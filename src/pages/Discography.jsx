import { useState, useEffect } from 'react';
import { getBTSAlbums } from '../services/spotifyService';
import Tilt from 'react-parallax-tilt';

const Discography = () => {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbums = async () => {
            const data = await getBTSAlbums();
            setAlbums(data);
            setLoading(false);
        };

        fetchAlbums();
    }, []);

    return (
        <div>
            <h2>💿 Discografía de BTS</h2>
            {loading ? (
                <p style={{color: '#b388ff'}}>Conectando con Spotify... ⏳</p>
            ) : (
                
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                    
                    {albums.map((album) => (
                        <Tilt 
                            key={album.id} 
                            scale={1.05}             
                            transitionSpeed={2500}  
                            glareEnable={true}       
                            glareMaxOpacity={0.3}   
                            glareColor="#b388ff"    
                            glarePosition="all"
                        >
                            
                            <div style={{ backgroundColor: '#242424', padding: '15px', borderRadius: '10px', height: '100%'}}>
                        
                            <img
                                src={album.images[0]?.url}
                                alt={album.name}
                                style={{ width: '100%', borderRadius: '5px'}} 
                            />
                            <h4 style={{ margin: '10px 0 5px 0', color: 'white'}}>{album.name}</h4>
                            <p style={{ margin: 0, fontSize: '14px', color: '#888'}}>
                                Lanzamiento: {album.release_date}
                            </p>
                        </div>
                        </Tilt>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Discography;