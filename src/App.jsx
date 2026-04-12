import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import WhatsAppIcon from "./components/WhatsAppIcon";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <WhatsAppIcon />
      <Footer />
    </>
  );
}

export default App;
