'use client';

import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import { useState } from 'react';
import { useParallax } from '@/app/hooks/useAnimations';

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+994 12 XXX XXXX',
      description: '24/7 Support',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@bakurentals.com',
      description: 'We reply within 2 hours',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Baku, Azerbaijan',
      description: 'City Center Office',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: '24/7 Available',
      description: 'Always open for you',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
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
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-black mt-4 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help. Reach out to us for any questions or reservations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-12 h-12 rounded-lg bg-black p-3 mb-4 mx-auto"
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-black mb-2">{method.title}</h3>
                  <p className="text-black font-semibold text-sm mb-1">{method.value}</p>
                  <p className="text-gray-600 text-xs">{method.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>
              <form className="space-y-6">
                {[
                  { id: 'name', label: 'Full Name', type: 'text' },
                  { id: 'email', label: 'Email Address', type: 'email' },
                  { id: 'message', label: 'Message', type: 'textarea' },
                ].map((field) => (
                  <motion.div key={field.id} whileHover={{ scale: 1.01 }}>
                    <label className="block text-sm font-semibold text-black mb-3">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        rows={5}
                        placeholder={`Your ${field.label.toLowerCase()}...`}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-all duration-300"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={`Your ${field.label.toLowerCase()}...`}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-all duration-300"
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#000', color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-gray-100 text-black border border-gray-300 font-bold rounded-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gray-50 border border-gray-300 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Premium fleet of luxury vehicles',
                    'Professional and courteous service',
                    '24/7 customer support',
                    'Competitive and transparent pricing',
                    'Safe and reliable transportation',
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-2 h-2 bg-black rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                <Globe size={32} className="text-black mx-auto mb-4" />
                <h4 className="text-lg font-bold text-black mb-2">Social Media</h4>
                <p className="text-gray-600 text-sm">Follow us for updates and special offers</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
