import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/secondSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FiveSection from "@/components/FiveSection";
import SixSection from "@/components/SixSection";
import SevenSection from "@/components/SevenSection";
import EighthSection from "@/components/EigthSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      {/* Main Layout */}
      <Navbar />
      <LandingPage />

      <div id="second-section">
        <SecondSection />
      </div>
      <div id="ThirdSection">
        <ThirdSection />
      </div>
      <FourthSection />
      <FiveSection />
      <SixSection />
      <SevenSection />
      <div id="EighthSection">
        <EighthSection />
      </div>

      <Footer />

    </div>
  );
}
