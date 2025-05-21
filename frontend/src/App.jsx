import React from 'react';
import { mockData } from './mockData';

export default function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Biblica Open Maps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockData.map((img, i) => (
          <div key={i} className="border rounded shadow bg-white p-4">
            <img
              src={img.image_url}
              alt={img.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{img.title}</h2>
            <p className="text-sm text-gray-600 mb-1">{img.description}</p>
            <p className="text-xs text-gray-500 italic">Ref: {img.bible_reference}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
