
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const Community = () => {
  const [email, setEmail] = useState("");
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

    const section = document.getElementById('community');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    toast.success("Welcome to the PHOOEY lunar crew!");
    setEmail("");
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      url: "#",
      color: "hover:bg-blue-400"
    },
    {
      name: "Telegram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 4.5L2.5 12.5L10.5 14.5L12.5 21.5L21.5 4.5Z"></path>
        </svg>
      ),
      url: "#",
      color: "hover:bg-blue-500"
    },
    {
      name: "Discord",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="12" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <path d="M7.5 7.2C8.9 6.4 10.5 6 12 6c1.5 0 3.1.4 4.5 1.2"></path>
          <path d="M7.5 16.8C8.9 17.6 10.5 18 12 18c1.5 0 3.1-.4 4.5-1.2"></path>
          <path d="M15.5 17 17 20.5c2.5-.5 4.5-1.5 6-3-1.5-1.5-3-2.5-5-3l-.5 2.5"></path>
          <path d="M8.5 17 7 20.5c-2.5-.5-4.5-1.5-6-3 1.5-1.5 3-2.5 5-3l.5 2.5"></path>
          <path d="M21 8V7c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4"></path>
        </svg>
      ),
      url: "#",
      color: "hover:bg-indigo-500"
    },
    {
      name: "Github",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
      url: "#",
      color: "hover:bg-gray-700"
    }
  ];

  return (
    <section id="community" className="py-20 bg-space-gradient px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full bg-neon-pink/5 blur-3xl opacity-70"></div>
        <div className="absolute bottom-[30%] left-[10%] w-48 h-48 rounded-full bg-neon-green/5 blur-3xl opacity-70"></div>
      </div>
      
      {/* Floating stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="star twinkle-star"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className={`text-4xl font-bold mb-12 text-center neon-text-green ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Join the Lunar Crew</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className={`space-card p-8 group hover:shadow-[0_0_25px_rgba(255,0,255,0.2)] transition-shadow duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-orbitron mb-6 neon-text-pink">Connect with Us</h3>
            <p className="text-gray-300 mb-8">
              Join the PHOOEY community across our social platforms to stay up to date with the latest news, memes, and lunar adventures!
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={`flex items-center justify-center p-4 rounded-full bg-black bg-opacity-30 text-white transition-all duration-300 hover:scale-110 ${link.color} relative group overflow-hidden backdrop-blur-sm`}
                  aria-label={link.name}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className={`space-card p-8 group hover:shadow-[0_0_25px_rgba(0,255,153,0.2)] transition-shadow duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-orbitron mb-6 neon-text-pink">Subscribe to Updates</h3>
            <p className="text-gray-300 mb-6">
              Be the first to hear about PHOOEY news, airdrops, and special events. Join our newsletter for exclusive cosmic content!
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-black/30 border-white/20 text-white focus:border-neon-pink focus:ring-neon-pink/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="cosmic-button whitespace-nowrap">
                  Join Mission
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                By subscribing, you agree to receive PHOOEY communications. Don't worry, we won't send space junk to your inbox!
              </p>
            </form>
          </div>
        </div>
        
        <div className={`mt-16 text-center animate-float relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-32 w-32 rounded-full bg-neon-green blur-3xl opacity-10"></div>
          </div>
          <img 
            src="/public/lovable-uploads/1c1e67d0-8a47-4916-9f0f-bb6c95a8a263.png" 
            alt="PHOOEY Mouse Astronaut" 
            className="w-40 h-40 mx-auto object-contain mb-8 transform hover:scale-110 transition-transform duration-300 hover:rotate-3"
          />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            <span className="neon-text-green">"</span>One small step for mice, one giant leap for memecoin-kind!<span className="neon-text-green">"</span> - PHOOEY
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
