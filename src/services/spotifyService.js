const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

const getSpotifyToken = async () => {

try {
    const authParameters = btoa(CLIENT_ID + ':' + CLIENT_SECRET);
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + authParameters
        },

        body: 'grant_type=client_credentials'
    });

    if (!response.ok){
        throw new Error('Error en obtener el token de Spotify');

    }

    const data = await response.json();

    return data.access_token;
} catch (error) {
    console.error('Error en getSpotifyToken:', error);
    return null;
}

};

export const getBTSAlbums = async () => {

    try {
        const token = await getSpotifyToken();

        if (!token) {
            throw new Error("No hay token disponible");
        }

        const btsArtistId = '3Nrfpe0tUJi4K4DXYWgMUX';

        const response = await fetch (`https://api.spotify.com/v1/artists/${btsArtistId}/albums?include_groups=album,single&market=ES&limit=50`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (!response.ok) {
            throw new Error("Error en obtener los álbumes de BTS");
        }

        const data = await response.json();

        return data.items;
    } catch (error) {
        console.error("Error en getBTSAlbums:", error);
        return [];
    }
};