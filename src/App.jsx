import "./App.css";
import ContactUs from "./components/ContactUs";
import FontLink from "./components/FontLink";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/Home";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PlotsSection from "./components/Plots";
// import Plots from "./components/Plots";
import PropertySection from "./components/Property";
// import Property from "./components/Property";

function App() {
  return (
    <>
      {/* <FontLink /> */}
      <Navbar />
      <HeroSection />
      {/* <Home /> */}
      <ServicesSection />
      <PropertySection />
      <PlotsSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
