
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-space-blue py-12 border-t border-white/10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-orbitron font-bold mb-4 neon-text-pink">PHOOEY</h3>
            <p className="text-gray-400">
              The cosmic memecoin inspired by five brave mice who orbited the Moon during Apollo 17.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-orbitron mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} PHOOEY Memecoin. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm text-center md:text-right">
            PHOOEY is a memecoin created for entertainment purposes only. <br />
            Not affiliated with NASA or the Apollo program.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
