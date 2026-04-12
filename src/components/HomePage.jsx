import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "./HeroSection";
import ServicesSection from "./Home";
import PropertySection from "./Property";
import PlotsSection from "./Plots";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import MeetOurTeam from "./MeetOurTeam";

// A "Home" component that bundles your landing page sections
const HomePage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <PropertySection />
    <PlotsSection />
    <MeetOurTeam />
    <Gallery />
    <ContactUs />
  </>
);

export default HomePage;
