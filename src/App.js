import "./index.css";
import Navbar from "./components/Navbar";
import WhereToBuy from "./components/WhereToBuy";
import Hero from "./components/Hero";
import Service from "./components/Service";
import AppBaner from "./components/AppBaner";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Service />
      <WhereToBuy />
      <AppBaner />
      <Footer />
    </div>
  );
}

export default App;
