
import { Card } from "@/components/ui/card";

const Story = () => {
  return (
    <section id="story" className="py-20 bg-space-blue px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text-pink">The PHOOEY Story</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="/public/lovable-uploads/79060afc-9877-4721-a473-5275c74458e5.png" 
              alt="Apollo Command Module" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="space-card">
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">From NASA Experiment to Crypto Legend</h3>
              <p className="text-gray-300">
                During the Apollo 17 mission in December 1972, NASA sent five pocket mice—Fe, Fi, Fo, Fum, and Phooey—to orbit the Moon. Their mission: to study the effects of cosmic radiation during spaceflight.
              </p>
            </Card>
            
            <Card className="space-card">
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">75 Lunar Orbits</h3>
              <p className="text-gray-300">
                These brave mice completed 75 orbits around the Moon in the Command Module while wearing custom radiation monitors. They were the first rodents to venture so far from Earth—becoming unsung heroes of space exploration.
              </p>
            </Card>
            
            <Card className="space-card">
              <h3 className="text-2xl font-orbitron mb-4 neon-text-green">The Mystery of Phooey</h3>
              <p className="text-gray-300">
                While four mice returned safely, Phooey's fate became the subject of lunar legend. Some say Phooey escaped, taking with him cosmic knowledge that would inspire a revolution in decentralized finance 50+ years later.
              </p>
            </Card>
            
            <Card className="space-card">
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
