'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '@/app/hooks/useAnimations';

export default function Hero() {
  const parallaxOffset = useParallax(0.5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background gradient with parallax */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        style={{ y: parallaxOffset }}
        className="absolute inset-0 z-0"
      >
        {/* Floating gradient circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Pre-heading */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6"
        >
          <span className="text-xs md:text-sm tracking-widest text-amber-400 font-semibold uppercase">
            Welcome to Premium Car Rentals
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Drive Your Dreams in Baku
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Explore the City of Flames with our exclusive collection of luxury vehicles. 
          Premium service, competitive rates, and unforgettable driving experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: '#fbbf24' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 md:px-10 py-4 bg-amber-500 text-black font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 overflow-hidden"
          >
            {/* Animated background shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 -z-10"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 0.5 }}
            />
            Book Your Ride
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, borderColor: '#fbbf24', color: '#fbbf24' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 md:px-10 py-4 border-2 border-amber-500 text-amber-400 font-semibold rounded-lg transition-all duration-300 hover:bg-amber-500/10"
          >
            View Fleet
          </motion.button>
        </motion.div>

        {/* Stats or additional info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '50+', label: 'Premium Vehicles' },
            { number: '24/7', label: 'Customer Support' },
            { number: '5★', label: 'Rated Service' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-center cursor-pointer group"
            >
              <motion.p
                className="text-2xl md:text-3xl font-bold text-amber-400 mb-2 group-hover:text-amber-300 transition-colors"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ delay: index * 0.2, duration: 2, repeat: Infinity }}
              >
                {stat.number}
              </motion.p>
              <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border border-amber-400/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
