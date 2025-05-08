import React, { useEffect, useState } from 'react';
import { getTopArtistsWithStats, ArtistWithStats } from '../services/spotifyService';
import { Music } from 'lucide-react';

const ArtistCarousel: React.FC = () => {
  const [artists, setArtists] = useState<ArtistWithStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const data = await getTopArtistsWithStats();
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

  if (loading) {
    return (
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Loading artist data...</span>
      </div>
    );
  }

  if (error || artists.length === 0) {
    return (
      <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Music className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {error || "No artist data available"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-4 w-max">
          {artists.map((artist) => (
            <a 
              key={artist.id} 
              href={artist.external_urls.spotify} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block min-w-[140px] max-w-[140px] transition-transform hover:scale-105"
            >
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={artist.images[0]?.url || '/placeholder-artist.png'} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Play count badge */}
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                    {artist.playCount} plays
                  </div>
                </div>
                <div className="p-2">
                  <h5 className="text-sm font-medium truncate">{artist.name}</h5>
                  <p className="text-xs text-muted-foreground truncate">
                    {artist.genres.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      {/* Gradient fade effect on edges */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ArtistCarousel; 