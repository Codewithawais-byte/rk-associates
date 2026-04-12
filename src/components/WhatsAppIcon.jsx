import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppIcon = () => {
  const phoneNumber = "+923114455087"; // Replace with your actual number (include country code)
  const message = "Hello! I'm interested in your properties.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsAppIcon;
