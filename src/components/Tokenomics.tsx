
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface TokenAllocation {
  name: string;
  percentage: number;
  color: string;
  description: string;
}

const Tokenomics = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const totalSupply = "75,000,000 PHOOEY";
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimateProgress(true);
          }, 300);
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    const section = document.getElementById('tokenomics');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);
  
  const allocations: TokenAllocation[] = [
    {
      name: "Community & Airdrops",
      percentage: 40,
      color: "bg-neon-pink",
      description: "40% allocated to community rewards, airdrops, and lunar mission participants."
    },
    {
      name: "Liquidity Pool",
      percentage: 30,
      color: "bg-neon-green",
      description: "30% reserved for DEX liquidity, locked for 1 year orbital period."
    },
    {
      name: "Development",
      percentage: 20,
      color: "bg-blue-500",
      description: "20% for ongoing development of the PHOOEY ecosystem and lunar exploration tools."
    },
    {
      name: "Team",
      percentage: 9,
      color: "bg-purple-500",
      description: "9% allocated to the team, with a 6-month vesting period."
    },
    {
      name: "Memorial Fund",
      percentage: 1,
      color: "bg-yellow-500",
      description: "1% set aside in honor of the fallen mouse from Apollo 17."
    }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-space-blue px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-neon-pink/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[5%] w-80 h-80 rounded-full bg-neon-green/5 blur-3xl"></div>
        <div className="absolute bottom-[60%] right-[40%] w-40 h-40 rounded-full bg-blue-500/5 blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className={`text-4xl font-bold mb-12 text-center neon-text-pink ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Tokenomics</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className={`space-card p-8 flex flex-col justify-center group hover:shadow-[0_0_25px_rgba(255,0,255,0.2)] transition-shadow duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-orbitron mb-6 text-center">Total Supply</h3>
            <div className="text-5xl font-bold text-center mb-6 neon-text-green animate-pulse-glow">{totalSupply}</div>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-neon-green/30 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-neon-green text-lg font-bold">75 orbits</span>
              </div>
            </div>
            <p className="text-center text-gray-300 mb-8">
              One token for each minute the mice spent orbiting the Moon during Apollo 17
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">No Taxes</span>
                <span className="text-sm neon-text-green">0% Buy/Sell Fee</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Contract</span>
                <span className="text-sm neon-text-green truncate w-40 text-right">0x72f...169F</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Decimals</span>
                <span className="text-sm neon-text-green">18</span>
              </div>
            </div>
          </div>
          
          <Card className={`space-card p-8 hover:shadow-[0_0_25px_rgba(0,255,153,0.2)] transition-shadow duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-orbitron mb-6 text-center">Token Distribution</h3>
            
            <div className="space-y-6">
              {allocations.map((allocation, index) => (
                <div key={index} className={`space-y-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{allocation.name}</span>
                    <span className="neon-text-green">{allocation.percentage}%</span>
                  </div>
                  <Progress 
                    value={animateProgress ? allocation.percentage : 0} 
                    className="h-2 bg-white/10" 
                    indicatorClassName={`${allocation.color} transition-all duration-1000 ease-out`}
                  />
                  <p className="text-sm text-gray-400">{allocation.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Just like the Apollo 17 mice pioneered space exploration, PHOOEY pioneers fair tokenomics and community governance. No funny business, just lunar adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
