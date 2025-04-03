
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

interface TokenAllocation {
  name: string;
  percentage: number;
  color: string;
  description: string;
}

const Tokenomics = () => {
  const totalSupply = "75,000,000 PHOOEY";
  
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
    <section id="tokenomics" className="py-20 bg-space-blue px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text-pink">Tokenomics</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-card p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-orbitron mb-6 text-center">Total Supply</h3>
            <div className="text-5xl font-bold text-center mb-6 neon-text-green">{totalSupply}</div>
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
          
          <Card className="space-card p-8">
            <h3 className="text-2xl font-orbitron mb-6 text-center">Token Distribution</h3>
            
            <div className="space-y-6">
              {allocations.map((allocation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{allocation.name}</span>
                    <span className="neon-text-green">{allocation.percentage}%</span>
                  </div>
                  <Progress 
                    value={allocation.percentage} 
                    className="h-2 bg-white/10" 
                    indicatorClassName={allocation.color}
                  />
                  <p className="text-sm text-gray-400">{allocation.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Just like the Apollo 17 mice pioneered space exploration, PHOOEY pioneers fair tokenomics and community governance. No funny business, just lunar adventure!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
