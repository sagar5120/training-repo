import React from 'react';
import { useLocation } from 'react-router-dom';

function Banner({ title, subtitle, description }) {
  const location = useLocation();

  return (
    <div className="relative h-[300px] flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1751601382303-f23fb4738449?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        alt="banner background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 text-center px-4">
        <p className="text-sm mb-1">{location.pathname}</p>
        <h1 className="text-3xl font-bold capitalize">{title}</h1>
        <h2 className="text-xl mt-2">{subtitle}</h2>
        <p className="mt-2 max-w-xl mx-auto">{description}</p>
      </div>
    </div>
  );
}

export default Banner;
