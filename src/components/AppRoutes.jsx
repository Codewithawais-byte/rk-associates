import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PropertySection from "./Property";
import PlotsSection from "./Plots";
import ContactUs from "./ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/properties" element={<PropertySection />} />
      <Route path="/plots" element={<PlotsSection />} />
      <Route path="/contact" element={<ContactUs />} />
      {/* Add a 404 catch-all if you like */}
      <Route
        path="*"
        element={
          <div style={{ padding: "100px", textAlign: "center" }}>
            404 Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
