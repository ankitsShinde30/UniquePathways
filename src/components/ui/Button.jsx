import React from "react";

// Maps component variants -> .common-btn modifiers defined in index.css
const variants = {
  gold: "",                        // default .common-btn (amber filled)
  cream: "cream",                  // cream filled
  "burgundy-outline": "outline",      // outline with plum border
  white: "white",                  // white filled (on dark sections)
  "light-outline": "light-outline",   // light outline (on dark sections)
  selected: "option active",       // active segmented option
  unselected: "option",            // inactive segmented option
};

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 8H13.5M8 2.5L13.5 8L8 13.5"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({
  children,
  variant = "gold",
  className = "",
  showArrow = false,
  type = "button",
  ...props
}) {
  const classes = [
    "common-btn",
    variants[variant] ?? variants.gold,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight />}
    </button>
  );
}