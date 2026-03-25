import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarsSection from './components/CarsSection';

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <CarsSection />
    </main>
  );
}
