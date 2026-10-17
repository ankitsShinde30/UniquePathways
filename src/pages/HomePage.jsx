import Hero from "../components/Hero/Hero.jsx";
import Founder from "../components/Founder/Founder.jsx";
import ServiceSection from "../components/ServiceSection/ServiceSection.jsx";
import ManoRagini from "../components/ManoRagini/ManoRagini.jsx";
import ClientStories from "../components/ClientStories/ClientStories.jsx";
import SpaceSection from "../components/SpaceSection/SpaceSection.jsx";
import MediaPress from "../components/MediaPress/MediaPress.jsx";
import BeforeYouBegin from "../components/BeforeYouBegin/BeforeYouBegin.jsx";
import BookConsultation from "../components/BookConsultation/BookConsultation.jsx";

function HomePage() {
  return (
    <>
      <Hero />
      <Founder />
      <ServiceSection />
      <ManoRagini />
      {/* <SignatureProgramme /> */}
      <ClientStories />
      <SpaceSection />
      <MediaPress />
      <BeforeYouBegin />
      <BookConsultation />
    </>
  );
}

export default HomePage;
