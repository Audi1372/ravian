import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Vision from "./components/Vision/Vision";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offerings from "./components/offering/Offerings";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="vision" element={<Vision />} />
          <Route path="about" element={<About />} />
          <Route path="offerings" element={<Offerings />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
