import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/another";
  return (
    <>
      {!isLandingPage && <Navbar />}
      <main>
        <AppRoutes />
      </main>
      <WhatsAppIcon />
      {!isLandingPage && <Footer />}
    </>
  );
}

export default App;
