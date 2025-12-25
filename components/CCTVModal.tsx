
import React, { useEffect } from 'react';
import { ModalProps } from '../types';
import CCTVStream from './CCTVStream';

const CCTVModal: React.FC<ModalProps> = ({ airport, onClose }) => {
  useEffect(() => {
    if (airport) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [airport]);

  if (!airport) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
            </div>
            <h2 className="text-base font-bold text-white leading-none tracking-tight">
              {airport.name} 실시간 영상
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors p-1"
            aria-label="닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Video Area (Fixed Aspect Ratio to prevent clipping) */}
        <div className="relative w-full aspect-video bg-black">
          <CCTVStream airport={airport} showControls={false} />
          
          {/* External Link Button */}
          <div className="absolute bottom-4 right-4 z-30">
            <a 
              href={airport.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-lg"
            >
              <span>원본 창에서 보기</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-5 py-3 bg-slate-900 border-t border-slate-800 flex justify-center">
          <p className="text-[11px] text-slate-500 text-center">
            제공 기관의 사정에 따라 영상이 일시 중단될 수 있습니다. ({airport.location})
          </p>
        </div>
      </div>
    </div>
  );
};

export default CCTVModal;
