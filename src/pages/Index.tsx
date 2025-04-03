
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Gallery from '@/components/Gallery';
import Tokenomics from '@/components/Tokenomics';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Gallery />
        <Tokenomics />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
