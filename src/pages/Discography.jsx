import { useState, useEffect } from 'react';
import { getBTSAlbums } from '../services/spotifyService';
import Tilt from 'react-parallax-tilt';

const Discography = () => {
    const [sections, setSections] = useState({ group: [], eps: [], japanese: [], singles: [], solo: [] });
    const [loading, setLoading] = useState(true);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

    useEffect(() => {
        const fetchAlbums = async () => {
            const data = await getBTSAlbums();
            setSections(data);
            setLoading(false);
        };
        fetchAlbums();
    }, []);

const renderAlbumGrid = (albums = []) => (   
         <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '25px',
            marginBottom: '50px'
        }}>
            {albums.map((album) => (
                <div 
                    key={album.id} 
                    onClick={() => setSelectedAlbum(album)}
                    style={{ cursor: 'pointer' }}
                >
                    <Tilt 
                        scale={1.05}             
                        transitionSpeed={2500}  
                        glareEnable={true}       
                        glareMaxOpacity={0.3}   
                        glareColor="#b388ff"    
                        glarePosition="all"
                    >
                        <div style={{ 
                            backgroundColor: '#242424', 
                            padding: '15px', 
                            borderRadius: '12px', 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <img
                                src={album.images[0]?.url}
                                alt={album.name}
                                style={{ width: '100%', borderRadius: '8px', aspectRatio: '1/1', objectFit: 'cover' }} 
                            />
                            <div>
                                <h4 style={{ margin: '15px 0 5px 0', color: 'white', fontSize: '1.1rem' }}>{album.name}</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#b388ff', fontWeight: 'bold' }}>
                                    {album.release_date.split('-')[0]}
                                </p>
                            </div>
                        </div>
                    </Tilt>
                </div>
            ))}
        </div>
    );

    return (
        <div style={{ padding: '20px', position: 'relative' }}>
            <h1 className="hero-title" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>
                💿 Discografía Completa
            </h1>

            {loading ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <p style={{ color: '#b388ff', fontSize: '1.2rem' }}>Sincronizando con el universo BTS... ⏳</p>
                </div>
            ) : (
                <>
                    <h2 style={{ borderBottom: '2px solid #b388ff', paddingBottom: '10px', marginBottom: '25px' }}>
                        🇰🇷 Álbumes
                    </h2>
                    {renderAlbumGrid(sections.group)}

                    <h2 style={{ borderBottom: '2px solid #b388ff', paddingBottom: '10px', marginBottom: '25px' }}>
                        Mini-Álbumes (EPs)
                    </h2>
                    {renderAlbumGrid(sections.eps)}

                    {/* ✨ NUEVA SECCIÓN JAPONESA */}
                    <h2 style={{ borderBottom: '2px solid #b388ff', paddingBottom: '10px', marginBottom: '25px' }}>
                        🇯🇵 Álbumes Japoneses
                    </h2>
                    {renderAlbumGrid(sections.japanese)}

                    <h2 style={{ borderBottom: '2px solid #b388ff', paddingBottom: '10px', marginBottom: '25px' }}>
                        Proyectos en Solitario
                    </h2>
                    {renderAlbumGrid(sections.solo)}

                    <h2 style={{ borderBottom: '2px solid #b388ff', paddingBottom: '10px', marginBottom: '25px' }}>
                        Singles
                    </h2>
                    {renderAlbumGrid(sections.singles)}
                </>
            )}

            {selectedAlbum && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 1000 
                }} onClick={() => setSelectedAlbum(null)}> 
                    
                    <div style={{
                        backgroundColor: '#181818', padding: '30px', borderRadius: '15px',
                        maxWidth: '500px', width: '90%', maxHeight: '80vh', overflowY: 'auto',
                        boxShadow: '0px 0px 20px #b388ff', position: 'relative'
                    }} onClick={(e) => e.stopPropagation()}> 
                        
                        <button 
                            onClick={() => setSelectedAlbum(null)}
                            style={{
                                position: 'absolute', top: '15px', right: '15px',
                                background: 'transparent', border: 'none', color: '#fff',
                                fontSize: '1.5rem', cursor: 'pointer'
                            }}
                        >
                            ✖
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                            <img src={selectedAlbum.images[0]?.url} alt="Portada" style={{ width: '100px', borderRadius: '10px' }} />
                            <div>
                                <h3 style={{ color: '#b388ff', margin: '0 0 5px 0' }}>{selectedAlbum.name}</h3>
                                <p style={{ color: '#888', margin: 0 }}>Lanzamiento: {selectedAlbum.release_date}</p>
                            </div>
                        </div>

                        <h4 style={{ color: 'white', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Lista de Canciones:</h4>
                        
                        <ul style={{ listStyleType: 'decimal', paddingLeft: '20px', color: '#ddd', lineHeight: '1.8' }}>
                            {selectedAlbum.tracks ? (
                                selectedAlbum.tracks.map((track, index) => (
                                    <li key={index}>{track}</li>
                                ))
                            ) : (
                                <li>Lista de canciones no disponible.</li>
                            )}
                        </ul>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Discography;