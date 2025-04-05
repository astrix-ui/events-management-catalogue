import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import HeroSection from './Herosection/Herosection';
import Certifications from './certifications/Certifications';
import Features from './Features/Features';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Events from './EventsPage/Events';
import EventDetails from './eventDetails/EventDetails';
import About from './About/About';
import Contact from './Contact/Contact';


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
    
     <Footer />
    </div></Router>
  );
}

export default App;
