'use client';

import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import { Check, Zap, Shield, Users, Clock, MapPin } from 'lucide-react';
import { useScroll, useParallax } from '@/app/hooks/useAnimations';

const services = [
  {
    id: 1,
    title: 'Luxury Car Rentals',
    description: 'Experience premium driving with our curated collection of high-end vehicles.',
    icon: Zap,
    features: ['24/7 Availability', 'Premium Fleet', 'Flexible Booking'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Driver Services',
    description: 'Professional drivers available for your convenience and safety.',
    icon: Users,
    features: ['Experienced Drivers', 'Safe & Reliable', 'Executive Transport'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Airport Transfers',
    description: 'Swift and reliable airport transportation services.',
    icon: MapPin,
    features: ['Real-time Tracking', 'Quick Pickup', 'Premium Comfort'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Corporate Solutions',
    description: 'Tailored fleet solutions for your business needs.',
    icon: Shield,
    features: ['Fleet Management', 'Custom Pricing', 'Business Support'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'Event Transportation',
    description: 'Elegant and reliable transportation for special occasions.',
    icon: Clock,
    features: ['Premium Vehicles', 'Event Planning', 'Full Coverage'],
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Tourism Packages',
    description: 'Explore Baku with our comprehensive tour packages.',
    icon: MapPin,
    features: ['Guided Tours', 'Flexible Routes', 'Local Expertise'],
    color: 'from-indigo-500 to-violet-500',
  },
];

export default function ServicesPage() {
  const parallaxOffset = useParallax(0.4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
        {/* Background elements */}
        <motion.div
          style={{ y: parallaxOffset }}
          className="absolute top-0 right-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10"
        />
        <motion.div
          style={{ y: -parallaxOffset }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10"
        />

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm md:text-base tracking-widest text-gray-600 font-semibold uppercase">
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-black mt-4 mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of rental and transportation solutions designed for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -12, borderColor: '#000' }}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 rounded-xl bg-black p-4 mb-6"
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors"
                    whileHover={{ letterSpacing: '0.5px' }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3 mb-8"
                  >
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        whileHover={{ x: 4 }}
                      >
                        <Check size={18} className="text-black flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gray-100 text-black border border-gray-300 font-semibold rounded-lg transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-300 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Contact us today to book your preferred service or get a custom quote.
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
