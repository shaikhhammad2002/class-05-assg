import React from 'react';
import ThreeCardSection from './ThreeCardSection';
import TwoCardSection from './TwoCardSection';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">M.Hammad Shaikh</h1>
      <ThreeCardSection />
      <TwoCardSection />
    </div>
  );
}
