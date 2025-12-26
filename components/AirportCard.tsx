
import React from 'react';
import { Airport } from '../types';

interface AirportCardProps {
  airport: Airport;
  onSelect: (airport: Airport) => void;
}

const AirportCard: React.FC<AirportCardProps> = ({ airport, onSelect }) => {
  return (
    <button 
      onClick={() => onSelect(airport)}
      className="flex items-center justify-center p-4 bg-slate-900 border border-slate-800 rounded-xl transition-all duration-200 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 group min-h-[60px]"
    >
      <span className="text-base font-bold text-slate-100 text-center tracking-tight">
        {airport.name}
      </span>
    </button>
  );
};

export default AirportCard;
