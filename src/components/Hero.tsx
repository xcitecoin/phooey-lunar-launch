
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ id: number; size: number; top: string; left: string; delay: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
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

    generateStars();
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16 bg-space-gradient px-4">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star twinkle-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}

      <div className="z-10 text-center max-w-5xl">
        <div className="mb-10 animate-float">
          <img 
            src="/public/lovable-uploads/1c1e67d0-8a47-4916-9f0f-bb6c95a8a263.png" 
            alt="Phooey Mouse in Space" 
            className="w-64 h-64 mx-auto object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="neon-text-pink">PHOOEY</span>
          <span className="block text-white"> The Cosmic Meme Coin That </span>
          <span className="neon-text-green">Actually Reached The Moon!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Inspired by the five pocket mice that orbited the Moon 75 times during the Apollo 17 mission in 1972.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="cosmic-button text-lg">Join the Lunar Crew</Button>
          <Button variant="outline" className="border-neon-pink text-white hover:bg-neon-pink/10 transition-colors text-lg">
            Read the Whitepaper
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-space-blue to-transparent"></div>
    </div>
  );
};

export default Hero;
