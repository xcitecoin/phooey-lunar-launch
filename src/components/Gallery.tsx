
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
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

    const section = document.getElementById('gallery');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);
  
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "/public/lovable-uploads/ddb1547a-e342-4029-8699-110a9a0d2489.png",
      alt: "Lunar Module",
      caption: "Apollo 17 Command Module orbiting the Moon - Home to our mice heroes"
    },
    {
      id: 2,
      src: "/public/lovable-uploads/96da47c1-c0bb-4610-9c80-0a59e8e9dfb3.png",
      alt: "Apollo 17 Crew",
      caption: "The Apollo 17 crew who shared their journey with five special mice"
    },
    {
      id: 3, 
      src: "/public/lovable-uploads/79060afc-9877-4721-a473-5275c74458e5.png",
      alt: "Pocket Mouse", 
      caption: "One of the brave pocket mice selected for the lunar mission"
    },
    {
      id: 4,
      src: "/public/lovable-uploads/1c1e67d0-8a47-4916-9f0f-bb6c95a8a263.png",
      alt: "Mice in Space",
      caption: "Artist's rendering of Fe, Fi, Fo, Fum, and Phooey floating in space"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-space-gradient px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-neon-green/5 blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-48 h-48 rounded-full bg-neon-pink/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className={`text-4xl font-bold mb-12 text-center neon-text-green ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          Cosmic Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className={`space-card overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,153,0.3)] cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              onClick={() => setActiveImage(image.id)}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <p className="text-sm text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {activeImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="relative max-w-3xl max-h-[90vh] w-full animate-scale-in" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-10 right-0 text-white hover:text-neon-pink transition-colors"
                onClick={() => setActiveImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-green to-neon-pink rounded-lg opacity-50 blur group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow"></div>
                <img
                  src={galleryImages.find(img => img.id === activeImage)?.src}
                  alt={galleryImages.find(img => img.id === activeImage)?.alt || "Gallery image"}
                  className="w-full h-auto object-contain rounded-lg relative z-10"
                />
              </div>
              
              <p className="text-white text-center mt-4 neon-text-green">
                {galleryImages.find(img => img.id === activeImage)?.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
