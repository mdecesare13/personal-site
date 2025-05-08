import axios from 'axios';

// Use import.meta.env for Vite environment variables
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

// Types
export interface SpotifyArtist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  genres: string[];
  popularity: number;
}

// Add this interface
export interface ArtistWithStats extends SpotifyArtist {
  playCount: number;
}

// Add this interface for track data
export interface SpotifyTrack {
  id: string;
  name: string;
  duration_ms: number;
  album: {
    name: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
  };
  external_urls: {
    spotify: string;
  };
}

// Add this interface for artist with tracks
export interface ArtistWithTracks extends SpotifyArtist {
  topTracks: SpotifyTrack[];
  recentTrack?: SpotifyTrack;
  playCount: number;
}

// Get access token using refresh token
const getAccessToken = async (): Promise<string> => {
  try {
    const response = await axios.post(
      SPOTIFY_TOKEN_URL,
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
        client_id: SPOTIFY_CLIENT_ID,
        client_secret: SPOTIFY_CLIENT_SECRET,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw error;
  }
};

// Get top artists for the past 4 weeks
export const getTopArtists = async (limit = 10): Promise<SpotifyArtist[]> => {
  try {
    const accessToken = await getAccessToken();
    
    const response = await axios.get(`${SPOTIFY_API_URL}/me/top/artists`, {
      params: {
        time_range: 'short_term', // short_term = 4 weeks
        limit: limit,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    return response.data.items;
  } catch (error) {
    console.error('Error fetching top artists:', error);
    return [];
  }
};

// Add this function to get top tracks and count artist appearances
export const getTopArtistsWithStats = async (limit = 10): Promise<ArtistWithStats[]> => {
  try {
    const accessToken = await getAccessToken();
    
    // Get top artists
    const artistsResponse = await axios.get(`${SPOTIFY_API_URL}/me/top/artists`, {
      params: {
        time_range: 'short_term', // short_term = 4 weeks
        limit: limit,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // Get top tracks (we'll fetch 50 to get a good sample)
    const tracksResponse = await axios.get(`${SPOTIFY_API_URL}/me/top/tracks`, {
      params: {
        time_range: 'short_term',
        limit: 150, // Get more tracks for better stats
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // Apply weights to different time periods
    const artistPlayCounts = {};

    // Short term (4 weeks) counts more
    tracksResponse.data.items.forEach((track, index) => {
      const weight = 3 * (1 - index/50); // Higher ranked tracks count more
      track.artists.forEach(artist => {
        if (!artistPlayCounts[artist.id]) {
          artistPlayCounts[artist.id] = 0;
        }
        artistPlayCounts[artist.id] += weight;
      });
    });

    // Scale the values to look like play counts
    Object.keys(artistPlayCounts).forEach(id => {
      artistPlayCounts[id] = Math.round(artistPlayCounts[id] * 10);
    });
    
    // Combine artist data with play counts
    const artistsWithStats = artistsResponse.data.items.map(artist => ({
      ...artist,
      playCount: artistPlayCounts[artist.id] || 0
    }));
    
    return artistsWithStats;
  } catch (error) {
    console.error('Error fetching top artists with stats:', error);
    return [];
  }
};

// Get top artists with only your personal top tracks for each artist
export const getTopArtistsWithTracks = async (limit = 10): Promise<ArtistWithTracks[]> => {
  try {
    const accessToken = await getAccessToken();
    
    // Get top artists (medium-term = 6 months)
    const artistsResponse = await axios.get(`${SPOTIFY_API_URL}/me/top/artists`, {
      params: {
        time_range: 'medium_term',
        limit: limit,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // Instead of recently played, we'll use the top tracks as "recent tracks"
    // Get short-term top tracks (4 weeks) - max 50 per request
    const shortTermTracksResponse = await axios.get(`${SPOTIFY_API_URL}/me/top/tracks`, {
      params: {
        time_range: 'short_term',
        limit: 50,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // Map top tracks by artist (these are your most recent favorites)
    const recentTracksByArtist: Record<string, SpotifyTrack> = {};
    
    // Use short-term top tracks as "recent" tracks
    shortTermTracksResponse.data.items.forEach((track, index) => {
      // For each artist in the track
      track.artists.forEach(artist => {
        // Only store the first track we find for each artist (higher ranked = more recent favorite)
        if (!recentTracksByArtist[artist.id]) {
          recentTracksByArtist[artist.id] = track;
        }
      });
    });
    
    // Get medium-term top tracks (6 months) - max 50 per request
    const mediumTermTracksResponse = await axios.get(`${SPOTIFY_API_URL}/me/top/tracks`, {
      params: {
        time_range: 'medium_term',
        limit: 50,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // Get long-term top tracks (all time) - max 50 per request
    const longTermTracksResponse = await axios.get(`${SPOTIFY_API_URL}/me/top/tracks`, {
      params: {
        time_range: 'long_term',
        limit: 50,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    
    // Combine tracks and remove duplicates
    const allTracks = [];
    const trackIds = new Set();
    
    // Add short-term tracks first (prioritize recent listening)
    shortTermTracksResponse.data.items.forEach(track => {
      if (!trackIds.has(track.id)) {
        trackIds.add(track.id);
        allTracks.push(track);
      }
    });
    
    // Then add medium-term tracks if not already included
    mediumTermTracksResponse.data.items.forEach(track => {
      if (!trackIds.has(track.id)) {
        trackIds.add(track.id);
        allTracks.push(track);
      }
    });
    
    // Finally add long-term tracks if not already included
    longTermTracksResponse.data.items.forEach(track => {
      if (!trackIds.has(track.id)) {
        trackIds.add(track.id);
        allTracks.push(track);
      }
    });
    
    // Count artist appearances in tracks to estimate play count
    const artistPlayCounts = {};
    
    allTracks.forEach(track => {
      track.artists.forEach(artist => {
        if (!artistPlayCounts[artist.id]) {
          artistPlayCounts[artist.id] = 0;
        }
        // Increment play count for this artist
        artistPlayCounts[artist.id]++;
      });
    });
    
    // Group tracks by artist
    const tracksByArtist: Record<string, SpotifyTrack[]> = {};
    
    allTracks.forEach(track => {
      track.artists.forEach(artist => {
        if (!tracksByArtist[artist.id]) {
          tracksByArtist[artist.id] = [];
        }
        
        // Only add the track if it's not already in the array
        if (!tracksByArtist[artist.id].some(t => t.id === track.id)) {
          tracksByArtist[artist.id].push(track);
        }
      });
    });
    
    // Filter out Kanye West and combine artist data with their tracks
    const artistsWithTracks = artistsResponse.data.items
      .filter(artist => artist.name.toLowerCase() !== 'kanye west') // Filter out Kanye West
      .map(artist => {
        const personalTopTracks = tracksByArtist[artist.id] || [];
        
        // Use the artist's top track as fallback if no recent track is available
        const recentTrack = recentTracksByArtist[artist.id] || 
                            (personalTopTracks.length > 0 ? personalTopTracks[0] : undefined);
        
        return {
          ...artist,
          topTracks: personalTopTracks.slice(0, 5),
          recentTrack: recentTrack,
          playCount: artistPlayCounts[artist.id] || 0
        };
      });
    
    return artistsWithTracks;
  } catch (error) {
    console.error('Error fetching top artists with tracks:', error);
    return [];
  }
}; 