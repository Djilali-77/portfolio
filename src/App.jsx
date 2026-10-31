// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f172a] text-gray-100 font-sans selection:bg-[#cd7f32] selection:text-white">
        <Navbar />

        <Routes>
          {/* One page that contains all the sections, in order */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;