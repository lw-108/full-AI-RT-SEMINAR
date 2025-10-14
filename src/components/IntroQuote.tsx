import React, { useRef, useEffect, useState } from "react";
import { Globe } from "@/components/ui/Globe";

const IntroQuote = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      if (!sectionRef.current) return;

      // Get the background color of the section
      const style = window.getComputedStyle(sectionRef.current);
      const backgroundColor = style.backgroundColor;
      
      // Parse RGB values
      const rgb = backgroundColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        const [r, g, b] = rgb.map(Number);
        // Calculate relative luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        setIsDarkBackground(luminance < 0.5);
      }
    };

    checkBackground();
    
    // Optional: Re-check on resize if you have responsive backgrounds
    window.addEventListener('resize', checkBackground);
    
    return () => window.removeEventListener('resize', checkBackground);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen py-20 dark:bg-black bg-white"
    >
      <div className="section-container">
        <div className="max-w-6xl mx-auto text-center">
          {/* Quote with dynamic text color */}
          <div className="relative z-50 mb-24 px-4 pt-8">
            <blockquote
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-bold leading-tight tracking-tight  ${
                isDarkBackground ? 'text-white' : 'text-gray-900'
              }`}
            >
              <span className="text-white dark:text-white">"</span>
              There is a vast amount of <br /> AI tools hidden <br /> in the
              <span className="text-pulse-500"> OCEAN </span>
              of the internet <br /> which is one search
              <br />
              (<span className="text-pulse-500"> DIVE </span>) ahead.
              <span className="text-pulse-500">"</span>
            </blockquote>
            
            <div className="mt-8 w-24 h-8 bg-pulse-500 mx-auto rounded-full opacity-60"></div>
          </div>

          <div className="mt-16">
            <Globe className="mt-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroQuote;