
import React, { useState, useEffect, useRef } from 'react';
import { Airport } from '../types';

interface CCTVStreamProps {
  airport: Airport;
  onExpand?: (airport: Airport) => void;
  showControls?: boolean;
}

declare global {
  interface window {
    Hls: any;
  }
}

const CCTVStream: React.FC<CCTVStreamProps> = ({ airport, onExpand, showControls = true }) => {
  const [key, setKey] = useState(0);
  const [isHLS, setIsHLS] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const isM3U8 = airport.url.toLowerCase().includes('.m3u8');
    setIsHLS(isM3U8);
    setIsLoading(true);
  }, [airport.url]);

  useEffect(() => {
    if (isHLS && videoRef.current && (window as any).Hls) {
      const Hls = (window as any).Hls;
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(airport.url);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play().catch(() => {});
          setIsLoading(false);
        });
        return () => hls.destroy();
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = airport.url;
        setIsLoading(false);
      }
    }
  }, [isHLS, airport.url, key]);

  return (
    <div className="relative w-full h-full bg-black group overflow-hidden flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-slate-950">
          <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {isHLS ? (
        <video 
          ref={videoRef} 
          key={`video-${key}`}
          className="w-full h-full object-contain relative z-10 bg-black" 
          autoPlay
          muted
          playsInline
        />
      ) : (
        <iframe
          key={`iframe-${key}`}
          src={airport.url}
          className="w-full h-full relative z-10 border-none bg-black"
          allow="autoplay; encrypted-media; fullscreen"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoading(false)}
        />
      )}

      {/* Simplified Status Dot - Moved to TOP-RIGHT to avoid overlapping with external player titles */}
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <div className="bg-black/60 backdrop-blur px-2 py-1 rounded border border-white/5 shadow-lg">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
        </div>
      </div>

      {/* Overlay Scanline Aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
    </div>
  );
};

export default CCTVStream;
