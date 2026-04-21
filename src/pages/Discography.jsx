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
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100dvh', // 100dvh arregla el bug de Safari
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 9999 // Z-index súper alto para que nada lo tape
                }} onClick={() => setSelectedAlbum(null)}> 
                    
                    <div style={{
                        backgroundColor: '#181818', padding: '20px', borderRadius: '15px',
                        maxWidth: '500px', width: '90%', maxHeight: '85vh', overflowY: 'auto',
                        boxShadow: '0px 0px 20px #b388ff', display: 'flex', flexDirection: 'column'
                    }} onClick={(e) => e.stopPropagation()}> 
                        
                        {/* Cabecera del modal: Portada, Título y la 'X' juntas */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #333', paddingBottom: '15px', marginBottom: '15px' }}>
                             <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <img src={selectedAlbum.images[0]?.url} alt="Portada" style={{ width: '80px', borderRadius: '8px' }} />
                                <div>
                                    <h3 style={{ color: '#b388ff', margin: '0 0 5px 0', fontSize: '1.2rem' }}>{selectedAlbum.name}</h3>
                                    <p style={{ color: '#888', margin: 0, fontSize: '0.9rem' }}>Lanzamiento: {selectedAlbum.release_date.split('-')[0]}</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setSelectedAlbum(null)}
                                style={{
                                    background: 'transparent', border: 'none', color: '#fff',
                                    fontSize: '1.8rem', cursor: 'pointer', padding: '0 5px'
                                }}
                            >
                                ✖
                            </button>
                        </div>

                        <h4 style={{ color: 'white', margin: '0 0 10px 0' }}>Lista de Canciones:</h4>
                        
                        <ul style={{ listStyleType: 'decimal', paddingLeft: '20px', color: '#ddd', lineHeight: '1.8', margin: 0 }}>
                            {selectedAlbum.tracks ? (
                                selectedAlbum.tracks.map((track, index) => (
                                    <li key={index}>{track}</li>
                                ))
                            ) : (
                                <li>Lista de canciones no disponible.</li>
                            )}
                        </ul>

                        {/* Botón extra gigante para salir cómodamente desde el móvil */}
                        <button
                            onClick={() => setSelectedAlbum(null)}
                            style={{
                                marginTop: '20px', padding: '12px', backgroundColor: '#b388ff',
                                color: '#181818', border: 'none', borderRadius: '8px', fontWeight: 'bold',
                                fontSize: '1rem', cursor: 'pointer', width: '100%'
                            }}
                        >
                            Cerrar Álbum
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Discography;