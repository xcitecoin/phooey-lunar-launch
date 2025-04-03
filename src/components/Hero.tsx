
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ id: number; size: number; top: string; left: string; delay: number }[]>([]);
  const [floatingCoins, setFloatingCoins] = useState<{ id: number; size: number; top: string; left: string; rotation: number; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 3,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5
        });
      }
      setStars(newStars);
    };

    const generateCoins = () => {
      const newCoins = [];
      for (let i = 0; i < 8; i++) {
        newCoins.push({
          id: i,
          size: 20 + Math.random() * 30,
          top: `${20 + Math.random() * 60}%`,
          left: `${Math.random() * 90}%`,
          rotation: Math.random() * 360,
          delay: Math.random() * 3
        });
      }
      setFloatingCoins(newCoins);
    };

    generateStars();
    generateCoins();
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16 bg-space-gradient px-4">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star twinkle-star absolute"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      {floatingCoins.map((coin) => (
        <div
          key={coin.id}
          className="absolute hidden md:block"
          style={{
            top: coin.top,
            left: coin.left,
            animation: `float ${4 + coin.delay}s ease-in-out infinite alternate, spin-slow ${20 + coin.delay * 5}s linear infinite`,
            animationDelay: `${coin.delay}s`,
            opacity: 0.3,
            zIndex: 0
          }}
        >
          <div className="relative" style={{ transform: `rotate(${coin.rotation}deg)` }}>
            <div className="h-8 w-8 rounded-full bg-neon-pink blur-xl"></div>
          </div>
        </div>
      ))}

      <div className="z-10 text-center max-w-5xl relative">
        <div className="mb-10 animate-float relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink to-neon-green blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>
          <img 
            src="/public/lovable-uploads/1c1e67d0-8a47-4916-9f0f-bb6c95a8a263.png" 
            alt="Phooey Mouse in Space" 
            className="w-64 h-64 mx-auto object-contain relative z-10 transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="neon-text-pink animate-pulse-glow">PHOOEY</span>
          <span className="block text-white"> The Cosmic Meme Coin That </span>
          <span className="neon-text-green animate-pulse-glow">Actually Reached The Moon!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Inspired by the five pocket mice that orbited the Moon 75 times during the Apollo 17 mission in 1972.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="cosmic-button text-lg transform hover:translate-y-[-5px] transition-transform duration-300">
            Join the Lunar Crew
          </Button>
          <Button variant="outline" className="border-neon-pink text-white hover:bg-neon-pink/10 transition-colors text-lg backdrop-blur-sm">
            Read the Whitepaper
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-24 bg-gradient-to-t from-space-blue to-transparent"></div>
        <div className="wave-effect">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-neon-pink/10"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
