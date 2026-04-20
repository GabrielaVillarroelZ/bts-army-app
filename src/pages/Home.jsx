import { useState, useEffect } from 'react';

const Home = ({ isArmyBombMode, setIsArmyBombMode }) => {
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const concertDate = new Date("2026-06-26T20:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = concertDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleArmyBomb = () => {
    setIsArmyBombMode(!isArmyBombMode);
  };

  return (
    <div className="home-content" style={{ textAlign: 'center', padding: '20px' }}>
      
      <h1 className="hero-title" style={{ fontSize: '3rem', margin: '20px 0 10px 0' }}>
        Gira Mundial <span style={{ color: '#b388ff' }}>2026</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '30px' }}>
        Prepárate para el concierto en el Estadio Riyadh Air Metropolitano, Madrid.
      </p>

      <button 
        onClick={toggleArmyBomb}
        className="army-bomb-button"
        style={{
          backgroundColor: isArmyBombMode ? '#121212' : '#b388ff',
          color: isArmyBombMode ? '#b388ff' : 'white',
          border: isArmyBombMode ? '2px solid #b388ff' : 'none',
          padding: '12px 25px',
          fontSize: '1.1rem',
          borderRadius: '30px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '40px',
          transition: 'all 0.3s ease',
          boxShadow: isArmyBombMode ? '0 0 15px #b388ff' : '0 4px 6px rgba(0,0,0,0.2)'
        }}
      >
        {isArmyBombMode ? '✨ Apagar ARMY Bomb' : '🔮 Encender ARMY Bomb'}
      </button>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        
        <div style={{
          backgroundColor: '#242424',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid #444',
          flex: '1',
          minWidth: '300px'
        }}>
          <h3 style={{ margin: '0 0 20px 0', color: '#fff' }}>Tiempo para Madrid 🇪🇸</h3>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#b388ff',
                  backgroundColor: '#121212',
                  padding: '15px',
                  borderRadius: '10px',
                  minWidth: '60px'
                }}>
                  {value.toString().padStart(2, '0')}
                </span>
                <span style={{ marginTop: '10px', textTransform: 'uppercase', fontSize: '0.8rem', color: '#888' }}>
                  {unit === 'days' ? 'Días' : unit === 'hours' ? 'Hrs' : unit === 'minutes' ? 'Min' : 'Seg'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <iframe 
            style={{ borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }} 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX08mhnhv6g9b?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Home;