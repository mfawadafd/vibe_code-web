import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyListings from './pages/PropertyListings';
import PropertyDetails from './pages/PropertyDetails';
import ContactAgent from './pages/ContactAgent';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'LuxeEstate | Premium Real Estate';
    
    // Add viewport meta for better mobile experience
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
      metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<PropertyListings />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/contact" element={<ContactAgent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
