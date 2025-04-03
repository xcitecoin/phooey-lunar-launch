
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    const section = document.getElementById('story');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section id="story" className="py-20 bg-space-blue px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 h-20 w-20 rounded-full bg-neon-green blur-xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 h-32 w-32 rounded-full bg-neon-pink blur-xl opacity-10"></div>
        <div className="absolute top-1/3 left-1/4 h-24 w-24 rounded-full bg-neon-green blur-xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className={`text-4xl font-bold mb-12 text-center neon-text-pink ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          The PHOOEY Story
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative group transform transition-transform hover:scale-[1.03] duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-green rounded-lg blur-lg opacity-30 group-hover:opacity-70 transition duration-700"></div>
              <img 
                src="/public/lovable-uploads/79060afc-9877-4721-a473-5275c74458e5.png" 
                alt="Apollo Command Module" 
                className="rounded-lg shadow-2xl w-full object-cover relative z-10"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className={`space-card transform transition-all hover:translate-x-2 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)] duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">From NASA Experiment to Crypto Legend</h3>
              <p className="text-gray-300">
                During the Apollo 17 mission in December 1972, NASA sent five pocket mice—Fe, Fi, Fo, Fum, and Phooey—to orbit the Moon. Their mission: to study the effects of cosmic radiation during spaceflight.
              </p>
            </Card>
            
            <Card className={`space-card transform transition-all hover:translate-x-2 hover:shadow-[0_0_15px_rgba(0,255,153,0.2)] duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">75 Lunar Orbits</h3>
              <p className="text-gray-300">
                These brave mice completed 75 orbits around the Moon in the Command Module while wearing custom radiation monitors. They were the first rodents to venture so far from Earth—becoming unsung heroes of space exploration.
              </p>
            </Card>
            
            <Card className={`space-card transform transition-all hover:translate-x-2 hover:shadow-[0_0_15px_rgba(255,0,255,0.2)] duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">The Mystery of Phooey</h3>
              <p className="text-gray-300">
                While four mice returned safely, Phooey's fate became the subject of lunar legend. Some say Phooey escaped, taking with him cosmic knowledge that would inspire a revolution in decentralized finance 50+ years later.
              </p>
            </Card>
            
            <Card className={`space-card transform transition-all hover:translate-x-2 hover:shadow-[0_0_15px_rgba(0,255,153,0.2)] duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">The PHOOEY Legacy</h3>
              <p className="text-gray-300">
                Today, PHOOEY honors these cosmic pioneers with a memecoin that embodies their adventurous spirit—reaching for the Moon isn't just a crypto cliché for us; our namesake actually did it!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
