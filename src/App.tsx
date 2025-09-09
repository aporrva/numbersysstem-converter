import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Converter from "./routes/converter/Converter";
import ContactPage from "./routes/contact-footer/Contact-page";

export default function App() {
  return ( <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}
