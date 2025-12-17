import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllServices from "./pages/AllServices";
import DetailServices from "./pages/DetailServices";
import Training from "./pages/Training";
import TrainingDetail from "./pages/TrainingDetail";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/:id" element={<DetailServices />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:id" element={<TrainingDetail />} />
          {/* <Route path="/team" element={<Team />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* Home-only Services section, not a standalone route */}
          <Route path="/team" element={<OurTeam />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
