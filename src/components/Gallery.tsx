
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
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
    <section id="gallery" className="py-20 bg-space-gradient px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center neon-text-green">Cosmic Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <Card 
              key={image.id} 
              className="space-card overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)]"
              onClick={() => setActiveImage(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-300 text-center">{image.caption}</p>
              </div>
            </Card>
          ))}
        </div>

        {activeImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setActiveImage(null)}>
            <div className="relative max-w-3xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute -top-10 right-0 text-white hover:text-neon-pink"
                onClick={() => setActiveImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img
                src={galleryImages.find(img => img.id === activeImage)?.src}
                alt={galleryImages.find(img => img.id === activeImage)?.alt || "Gallery image"}
                className="w-full h-auto object-contain rounded-lg"
              />
              
              <p className="text-white text-center mt-4">
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
