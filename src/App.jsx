import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] text-gray-100 font-sans">
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;