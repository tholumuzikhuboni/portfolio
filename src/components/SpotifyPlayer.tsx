
import React from 'react';
import { Music } from 'lucide-react';

interface SpotifyPlayerProps {
  playlistId: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ playlistId }) => {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm border border-gray-200 transition-all hover:shadow-xl">
      <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          <h3 className="font-semibold text-sm">My Spotify Playlist</h3>
        </div>
      </div>
      <div className="relative aspect-square w-full">
        <iframe
          title="Spotify Playlist"
          className="absolute inset-0 w-full h-full"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
