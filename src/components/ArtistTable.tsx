import React, { useEffect, useState } from 'react';
import { getTopArtistsWithTracks, ArtistWithTracks } from '../services/spotifyService';
import { Music, ChevronDown, ChevronUp, ExternalLink, Clock } from 'lucide-react';
import SpotifyLogo from '../assets/spotifyLogo.svg';

// Spotify theme colors
const SPOTIFY_GREEN = '#1db954';
const SPOTIFY_DARK = '#121212';
const SPOTIFY_GRAY = '#212121';
const SPOTIFY_LIGHT_GRAY = '#535353';
const SPOTIFY_TEXT = '#b3b3b3';

const ArtistTable: React.FC = () => {
  const [artists, setArtists] = useState<ArtistWithTracks[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedArtist, setExpandedArtist] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const data = await getTopArtistsWithTracks();
        setArtists(data);
        setError(null);
      } catch (err) {
        setError('Failed to load artist data');
        console.error('Error fetching artist data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  const toggleExpand = (artistId: string) => {
    if (expandedArtist === artistId) {
      setExpandedArtist(null);
    } else {
      setExpandedArtist(artistId);
    }
  };

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="h-64 flex items-center justify-center" style={{ backgroundColor: SPOTIFY_DARK }}>
        <span style={{ color: SPOTIFY_TEXT }}>Loading artist data...</span>
      </div>
    );
  }

  if (error || artists.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center" style={{ backgroundColor: SPOTIFY_DARK }}>
        <div className="flex items-center gap-2">
          <Music style={{ color: SPOTIFY_TEXT }} />
          <span style={{ color: SPOTIFY_TEXT }}>
            {error || "No artist data available"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-lg overflow-hidden" style={{ backgroundColor: SPOTIFY_DARK }}>
        <div className="overflow-y-auto max-h-[500px] spotify-scrollbar">
          <table className="w-full">
            <thead className="sticky top-0" style={{ backgroundColor: SPOTIFY_GRAY }}>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: SPOTIFY_GREEN }}>Artist</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: SPOTIFY_GREEN }}>Genres</th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: SPOTIFY_GREEN }}>Recent Listen</th>
                <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider" style={{ color: SPOTIFY_GREEN }}></th>
              </tr>
            </thead>
            <tbody className="divide-y" style={{ borderColor: SPOTIFY_LIGHT_GRAY }}>
              {artists.map((artist) => (
                <React.Fragment key={artist.id}>
                  <tr 
                    className={`cursor-pointer transition-colors`}
                    style={{ 
                      backgroundColor: expandedArtist === artist.id ? SPOTIFY_GRAY : SPOTIFY_DARK,
                      color: '#fff'
                    }}
                    onClick={() => toggleExpand(artist.id)}
                    onMouseEnter={(e) => {
                      if (expandedArtist !== artist.id) {
                        e.currentTarget.style.backgroundColor = SPOTIFY_GRAY;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (expandedArtist !== artist.id) {
                        e.currentTarget.style.backgroundColor = SPOTIFY_DARK;
                      }
                    }}
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 rounded overflow-hidden mr-3">
                          <img 
                            src={artist.images[0]?.url || '/placeholder-artist.png'} 
                            alt={artist.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium">{artist.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm" style={{ color: SPOTIFY_TEXT }}>
                        {artist.genres.slice(0, 2).join(', ')}
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {artist.recentTrack ? (
                        <div className="flex items-center">
                          <div className="h-8 w-8 flex-shrink-0 rounded overflow-hidden mr-2">
                            <img 
                              src={artist.recentTrack.album.images[0]?.url || '/placeholder-album.png'} 
                              alt={artist.recentTrack.album.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-sm font-medium truncate max-w-[150px]">{artist.recentTrack.name}</div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm" style={{ color: SPOTIFY_TEXT }}>
                          No recent tracks
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm">
                      <div className="flex items-center justify-end">
                        <a 
                          href={artist.external_urls.spotify} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mr-2 transition-colors"
                          style={{ color: SPOTIFY_TEXT }}
                          onMouseEnter={(e) => e.currentTarget.style.color = SPOTIFY_GREEN}
                          onMouseLeave={(e) => e.currentTarget.style.color = SPOTIFY_TEXT}
                        >
                          <ExternalLink size={16} />
                        </a>
                        {expandedArtist === artist.id ? (
                          <ChevronUp size={16} style={{ color: SPOTIFY_TEXT }} />
                        ) : (
                          <ChevronDown size={16} style={{ color: SPOTIFY_TEXT }} />
                        )}
                      </div>
                    </td>
                  </tr>
                  {expandedArtist === artist.id && (
                    <tr>
                      <td colSpan={4} className="px-4 py-2 w-full" style={{ backgroundColor: SPOTIFY_GRAY }}>
                        <div className="text-xs font-medium uppercase mb-2 mt-1" style={{ color: SPOTIFY_TEXT }}>
                          Top Tracks
                        </div>
                        <div className="space-y-2 pb-2">
                          {artist.topTracks.length > 0 ? (
                            artist.topTracks.map((track) => (
                              <a 
                                key={track.id}
                                href={track.external_urls.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-2 rounded transition-colors w-full"
                                style={{ color: '#fff' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = SPOTIFY_LIGHT_GRAY}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                              >
                                <div className="h-8 w-8 flex-shrink-0 rounded overflow-hidden mr-3">
                                  <img 
                                    src={track.album.images[0]?.url || '/placeholder-album.png'} 
                                    alt={track.album.name}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="flex-grow min-w-0">
                                  <div className="text-sm font-medium truncate">{track.name}</div>
                                  <div className="text-xs truncate" style={{ color: SPOTIFY_TEXT }}>{track.album.name}</div>
                                </div>
                                <div className="flex items-center text-xs ml-3" style={{ color: SPOTIFY_TEXT }}>
                                  <Clock size={12} className="mr-1" />
                                  {formatDuration(track.duration_ms)}
                                </div>
                              </a>
                            ))
                          ) : (
                            <div className="text-sm py-2" style={{ color: SPOTIFY_TEXT }}>
                              No tracks found for this artist in your listening history.
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <div className="flex items-center text-xs" style={{ color: SPOTIFY_TEXT }}>
          <span className="mr-1">Data supplied by</span>
          <a 
            href="https://spotify.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img src={SpotifyLogo} alt="Spotify" className="h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistTable; 