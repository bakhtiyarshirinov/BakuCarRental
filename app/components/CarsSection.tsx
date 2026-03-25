'use client';

import { motion } from 'framer-motion';
import { Star, Zap, Users } from 'lucide-react';
import { useParallax } from '@/app/hooks/useAnimations';

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  specs: {
    seats: number;
    transmission: string;
    acceleration: string;
  };
}

const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes-Benz E-Class',
    category: 'Luxury Sedan',
    price: 150,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1618654377503-930e6dc16913?w=500&h=500&fit=crop',
    specs: { seats: 5, transmission: 'Automatic', acceleration: '5.5s' },
  },
  {
    id: 2,
    name: 'BMW X7',
    category: 'Luxury SUV',
    price: 200,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19f27081?w=500&h=500&fit=crop',
    specs: { seats: 7, transmission: 'Automatic', acceleration: '5.2s' },
  },
  {
    id: 3,
    name: 'Audi A8',
    category: 'Executive Sedan',
    price: 180,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1606664515524-2ddc6298947d?w=500&h=500&fit=crop',
    specs: { seats: 5, transmission: 'Automatic', acceleration: '5.4s' },
  },
  {
    id: 4,
    name: 'Tesla Model S',
    category: 'Electric Luxury',
    price: 190,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560958089-b8a63ebd8acc?w=500&h=500&fit=crop',
    specs: { seats: 5, transmission: 'Electric', acceleration: '3.2s' },
  },
  {
    id: 5,
    name: 'Porsche 911',
    category: 'Sports Car',
    price: 220,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=500&h=500&fit=crop',
    specs: { seats: 4, transmission: 'Automatic', acceleration: '3.4s' },
  },
  {
    id: 6,
    name: 'Range Rover Evoque',
    category: 'Compact Luxury',
    price: 140,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1609706228149-25b5a4261db0?w=500&h=500&fit=crop',
    specs: { seats: 5, transmission: 'Automatic', acceleration: '6.1s' },
  },
];

export default function CarsSection() {
  const parallaxOffset = useParallax(0.3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="fleet" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <motion.div
        style={{ y: parallaxOffset }}
        className="absolute top-0 right-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: -parallaxOffset }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <span className="text-sm md:text-base tracking-widest text-gray-600 font-semibold uppercase">
            Our Fleet
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Premium Vehicles
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked collection of luxury vehicles designed for sophistication and comfort.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cars.map((car) => (
            <motion.div
              key={car.id}
              variants={itemVariants}
              whileHover={{ y: -12, borderColor: '#000' }}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <motion.img
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                />
                
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.1, x: -3 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="px-3 py-1 bg-black text-white text-xs font-semibold rounded-full shadow-md">
                    {car.category}
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <Star size={14} className="fill-black text-black" />
                  <span className="text-black text-xs font-semibold">{car.rating}</span>
                </motion.div>
              </div>

              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <motion.h3
                    className="text-xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors"
                    whileHover={{ letterSpacing: '0.5px' }}
                  >
                    {car.name}
                  </motion.h3>
                  <motion.div
                    className="flex items-baseline gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="text-3xl font-bold text-black"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      ${car.price}
                    </motion.span>
                    <span className="text-gray-600 text-sm">/day</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="space-y-3 mb-6 pb-6 border-b border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    className="flex items-center gap-3 text-gray-700 group/spec hover:text-black transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Users size={18} className="text-gray-600" />
                    <span className="text-sm">{car.specs.seats} Seats</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-gray-700 group/spec hover:text-black transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <Zap size={18} className="text-gray-600" />
                    <span className="text-sm">{car.specs.transmission}</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 text-gray-700 group/spec hover:text-black transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-gray-600 font-semibold">⚡</span>
                    <span className="text-sm">0-100 km/h: {car.specs.acceleration}</span>
                  </motion.div>
                </motion.div>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#000',
                    color: '#fff',
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="w-full py-3 bg-gray-100 text-black border border-gray-300 font-semibold rounded-lg transition-all duration-300 hover:text-white overflow-hidden relative"
                >
                  <motion.div
                    className="absolute inset-0 bg-black -z-10"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                  View Details
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
