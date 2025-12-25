
import React, { useState, useMemo } from 'react';
import { AIRPORTS } from './constants';
import { Airport } from './types';
import AirportCard from './components/AirportCard';
import CCTVModal from './components/CCTVModal';
import CCTVStream from './components/CCTVStream';

const App: React.FC = () => {
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'monitor'>('list');

  // 검색 기능이 제거되었으므로 모든 공항을 표시합니다.
  const airports = AIRPORTS;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 font-sans pb-20">
      {/* Simple Header */}
      <header className="max-w-7xl mx-auto px-6 py-6 border-b border-slate-800/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-white whitespace-nowrap tracking-tight">공항주변 CCTV</h1>
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
              >
                [목록뷰]
              </button>
              <button 
                onClick={() => setViewMode('monitor')}
                className={`px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${viewMode === 'monitor' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
              >
                [모니터링뷰]
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Area */}
      <main className={`mx-auto px-6 py-8 ${viewMode === 'monitor' ? 'max-w-full' : 'max-w-7xl'}`}>
        {airports.length > 0 ? (
          viewMode === 'list' ? (
            /* Simple Button Grid for List View */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {airports.map((airport) => (
                <AirportCard 
                  key={airport.id} 
                  airport={airport} 
                  onSelect={setSelectedAirport} 
                />
              ))}
            </div>
          ) : (
            /* Monitoring View: Direct Iframe Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
              {airports.map((airport) => (
                <div key={airport.id} className="flex flex-col bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-xl group">
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <CCTVStream 
                      airport={airport} 
                      onExpand={setSelectedAirport}
                    />
                  </div>
                  <div className="px-3 py-2.5 flex justify-center items-center bg-slate-900 border-t border-slate-800/50">
                    <span className="text-[13px] font-bold text-slate-300">{airport.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="py-20 text-center text-slate-600 text-sm">표시할 공항이 없습니다.</div>
        )}
      </main>

      {/* Fixed Bottom Footer with Links */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[#020617]/90 backdrop-blur-md border-t border-slate-800/50 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-[12px] font-medium">
          <span className="text-slate-500">CCTV 웹사이트 이동 :</span>
          <a 
            href="https://www.utic.go.kr/map/map.do?menu=cctv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <span>전국</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span className="text-slate-800">|</span>
          <a 
            href="https://www.jejuits.go.kr/jido/mainView.do?DEVICE_KIND=CCTV" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
          >
            <span>제주</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </footer>

      <CCTVModal 
        airport={selectedAirport} 
        onClose={() => setSelectedAirport(null)} 
      />
    </div>
  );
};

export default App;
