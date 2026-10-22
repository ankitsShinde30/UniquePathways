<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Vary: Origin');

$config = require __DIR__ . '/config.php';
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}
function cleanText($value): string
{
    return is_string($value) ? trim($value) : '';
}
function validName(string $name): bool
{
    return preg_match("/^[\\p{L}\\p{M} .'-]+$/u", $name) === 1;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Invalid request method.');
}
if ($origin !== '' && !in_array($origin, $config['allowed_origins'], true)) {
    respond(403, false, 'Origin is not allowed.');
}

$raw = file_get_contents('php://input');
if ($raw === false || strlen($raw) > 12000) {
    respond(413, false, 'Form data is invalid or too large.');
}
$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(400, false, 'Invalid form data.');
}

$concern = cleanText($data['concern'] ?? '');
$name = cleanText($data['fullName'] ?? '');
$phone = cleanText($data['phone'] ?? '');
$email = cleanText($data['email'] ?? '');
$session = cleanText($data['sessionPreference'] ?? '');
$message = cleanText($data['message'] ?? '');

$allowedConcerns = [
    'mental-health' => 'Psychotherapy & Mental Health',
    'relationship' => 'Relationship & Family Counselling',
    'child-youth' => 'Child & Youth Development',
    'manoragini' => 'ManoRagini Mindset Programmes',
    'trauma-healing' => 'Trauma Healing & Emotional Release',
    'other' => 'Other',
];

if (!isset($allowedConcerns[$concern])) respond(422, false, 'Please select a valid concern.');
if (mb_strlen($name) < 2 || mb_strlen($name) > 100 || !validName($name)) {
    respond(422, false, 'Please enter a valid full name (2–100 characters).');
}
$digits = preg_replace('/\D/', '', $phone);
if (!preg_match('/^[+0-9().\s-]+$/', $phone) || strlen($digits) < 10 || strlen($digits) > 15) {
    respond(422, false, 'Please enter a valid phone number with 10–15 digits.');
}
if ($email !== '' && (strlen($email) > 100 || !filter_var($email, FILTER_VALIDATE_EMAIL))) {
    respond(422, false, 'Please enter a valid email address.');
}
if (!in_array($session, ['in-person', 'online'], true)) respond(422, false, 'Please select a valid session preference.');
if (mb_strlen($message) > 1000) respond(422, false, 'Message must be 1000 characters or fewer.');

if ($email === '') {
    // Email is optional; omit Reply-To when the visitor has not provided one.
    $replyEmail = null;
} else {
    $replyEmail = $email;
}

require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$e = static fn(string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeName = $e($name);
$safePhone = $e($phone);
$safeEmail = $email !== '' ? $e($email) : 'Not provided';
$safeConcern = $e($allowedConcerns[$concern]);
$safeSession = $e($session === 'in-person' ? 'In Person' : 'Online');
$safeMessage = nl2br($e($message !== '' ? $message : 'No message provided.'));

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = (int)$config['smtp_port'];
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    if ($replyEmail !== null) $mail->addReplyTo($replyEmail, $name);
    $mail->isHTML(true);
    $mail->Subject = 'New Unique Pathways Consultation Request — ' . $allowedConcerns[$concern];
    $mail->Body = <<<HTML
<!doctype html><html><body style="margin:0;background:#f5f2ec;font-family:Arial,sans-serif;color:#292329;padding:24px">
<table role="presentation" style="max-width:640px;width:100%;margin:auto;background:#fff;border-collapse:collapse">
<tr><td style="background:#48213F;color:#fff;padding:26px"><h1 style="margin:0;font-size:23px">Unique Pathways</h1><p style="margin:8px 0 0">New consultation request</p></td></tr>
<tr><td style="padding:26px"><p>A new consultation request was submitted on the website.</p>
<table role="presentation" style="width:100%;border-collapse:collapse">
<tr><td style="padding:12px;background:#f8f6f2;border-bottom:1px solid #eee;width:36%">Full name</td><td style="padding:12px;border-bottom:1px solid #eee">{$safeName}</td></tr>
<tr><td style="padding:12px;background:#f8f6f2;border-bottom:1px solid #eee">Phone</td><td style="padding:12px;border-bottom:1px solid #eee">{$safePhone}</td></tr>
<tr><td style="padding:12px;background:#f8f6f2;border-bottom:1px solid #eee">Email</td><td style="padding:12px;border-bottom:1px solid #eee">{$safeEmail}</td></tr>
<tr><td style="padding:12px;background:#f8f6f2;border-bottom:1px solid #eee">Concern</td><td style="padding:12px;border-bottom:1px solid #eee">{$safeConcern}</td></tr>
<tr><td style="padding:12px;background:#f8f6f2;border-bottom:1px solid #eee">Session preference</td><td style="padding:12px;border-bottom:1px solid #eee">{$safeSession}</td></tr>
<tr><td style="padding:12px;background:#f8f6f2;vertical-align:top">Message</td><td style="padding:12px;line-height:1.6">{$safeMessage}</td></tr>
</table><p style="margin-top:24px;color:#666;font-size:13px">Reply to this email to contact the visitor when an email address was provided.</p></td></tr>
<tr><td style="background:#faf9f7;padding:18px;text-align:center;color:#777;font-size:12px">Automatically generated from the Unique Pathways website.</td></tr>
</table></body></html>
HTML;
    $mail->AltBody = "New Unique Pathways consultation request\n\nName: $name\nPhone: $phone\nEmail: " . ($email ?: 'Not provided') . "\nConcern: {$allowedConcerns[$concern]}\nSession: " . ($session === 'in-person' ? 'In Person' : 'Online') . "\nMessage: " . ($message ?: 'No message provided');

    $mail->send(); // Admin notification sent successfully.

    // Send confirmation email to the visitor, if an email was provided.
    if ($email !== '') {
        try {
            $visitorMail = new PHPMailer(true);

            $visitorMail->isSMTP();
            $visitorMail->Host = $config['smtp_host'];
            $visitorMail->SMTPAuth = true;
            $visitorMail->Username = $config['smtp_username'];
            $visitorMail->Password = $config['smtp_password'];
            $visitorMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $visitorMail->Port = (int) $config['smtp_port'];
            $visitorMail->CharSet = 'UTF-8';

            // Use the same verified sender as the admin notification.
            $visitorMail->setFrom(
                $config['from_email'],
                $config['from_name']
            );

            $visitorMail->addAddress($email, $name);
            $visitorMail->isHTML(true);
            $visitorMail->Subject =
                'We received your consultation request | Unique Pathways';

            $visitorMail->Body = <<<HTML
<!doctype html>
<html>
<body style="margin:0;background:#f5f2ec;font-family:Arial,sans-serif;color:#292329;padding:24px">
<table role="presentation" style="max-width:600px;width:100%;margin:auto;background:#fff;border-collapse:collapse">
<tr>
<td style="background:#48213F;color:#fff;padding:26px">
<h1 style="margin:0;font-size:24px">Unique Pathways</h1>
<p style="margin:8px 0 0">Thank you for reaching out to us</p>
</td>
</tr>
<tr>
<td style="padding:28px;line-height:1.7">
<p>Dear {$safeName},</p>
<p>Thank you for contacting Unique Pathways.</p>
<p>We have successfully received your consultation request regarding
<strong>{$safeConcern}</strong>, with your preferred session as
<strong>{$safeSession}</strong>.</p>
<p>Our team will review your enquiry and get in touch with you within one working day.</p>
<p>If you have any additional information to share, you can reply to this email.</p>
<p>Warm regards,<br><strong>Team Unique Pathways</strong></p>
</td>
</tr>
<tr>
<td style="background:#faf9f7;padding:18px;text-align:center;color:#777;font-size:12px">
This email confirms receipt of your consultation request.
</td>
</tr>
</table>
</body>
</html>
HTML;

            $visitorMail->AltBody =
                "Dear {$name},\n\n" .
                "Thank you for contacting Unique Pathways. " .
                "We have received your consultation request regarding " .
                $allowedConcerns[$concern] . ".\n\n" .
                "Our team will get in touch with you within one working day.\n\n" .
                "Warm regards,\nTeam Unique Pathways";

            $visitorMail->send();
        } catch (\Throwable $visitorException) {
            // The admin lead was already sent. Log confirmation failures
            // without incorrectly telling the visitor that the lead failed.
            error_log(
                'Unique Pathways visitor confirmation failure: ' .
                    $visitorException->getMessage()
            );
        }
    }

    respond(
        200,
        true,
        'Your consultation request has been submitted successfully. Our team will get in touch with you within one working day.'
    );
} catch (Exception $exception) {
    // Log SMTP errors without exposing internal details to visitors.
    error_log('Unique Pathways mail failure: ' . $exception->getMessage());

    respond(
        500,
        false,
        'We could not send your request right now. Please try again later or contact us by phone/WhatsApp.'
    );
}
