import React from 'react';
import Header from './components/Header';
import { Agentation } from "agentation";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Exactly as requested: Only the Header with White Background, no other hero sections or images */}
        <Header />
        
        {/* Pure White Background Container */}
        <main className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-400 text-sm">
            {/* Subtle placeholder indicating clean white workspace */}
          </div>
        </main>
      </div>
      {/* Vite uses import.meta.env.DEV instead of process.env.NODE_ENV */}
      {import.meta.env.DEV && <Agentation />}
    </>
  );
}
