"use client";

import { useEffect, useState } from 'react';

export default function TopOfHeader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-blue-900 text-white items-center justify-center py-2 lg:py-4 text-center overflow-hidden">
      <div className={`whitespace-nowrap transition-transform ${isMobile ? 'animate-slide' : 'translate-x-0'}`}>
        <h1 className="text-sm sm:text-lg lg:text-xl font-bold">
          FREE DELIVERY ALL OVER PAKISTAN WITH 30% OFF🔥
        </h1>
      </div>
    </div>
  );
}
