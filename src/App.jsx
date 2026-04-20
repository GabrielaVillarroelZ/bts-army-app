import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Discography from './pages/Discography';
import Members from './pages/Members';
import GalaxyBackground from './components/GalaxyBackground';
import './App.css';

function App() {
  const [isArmyBombMode, setIsArmyBombMode] = useState(false);

  useEffect(() => {
    if (isArmyBombMode) {
      document.body.classList.add('army-bomb-theme');
    } else {
      document.body.classList.remove('army-bomb-theme');
    }
  }, [isArmyBombMode]);

  return (
    <BrowserRouter>
      <Navbar />
      
      {isArmyBombMode && <GalaxyBackground />}
      
      <div className="container" style={{ padding: '20px', position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                isArmyBombMode={isArmyBombMode} 
                setIsArmyBombMode={setIsArmyBombMode} 
              />
            } 
          />
          <Route path="/discography" element={<Discography />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
