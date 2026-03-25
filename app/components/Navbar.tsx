'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useScroll } from '@/app/hooks/useAnimations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScroll();
  const hasScrolled = scrollY > 50;

  const navLinks = [
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
  };

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95 },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
      },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        hasScrolled
          ? 'bg-black/90 border-b border-amber-500/40 shadow-lg shadow-amber-500/10'
          : 'bg-black/80 border-b border-amber-500/20'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">B</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:inline">
                Baku Rentals
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ color: '#fbbf24' }}
                className="text-gray-400 font-medium transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#f59e0b' }}
            whileTap={{ scale: 0.98 }}
            initial="hidden"
            animate="visible"
            variants={linkVariants}
            custom={navLinks.length}
            className="hidden md:block px-6 py-2 bg-amber-500 text-black font-semibold rounded-lg transition-all duration-300"
          >
            Book Now
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-400 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-amber-500/20 overflow-hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                custom={index}
                variants={menuItemVariants}
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                onClick={() => setIsOpen(false)}
                className="text-gray-400 font-medium text-lg hover:text-amber-400 transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              custom={navLinks.length}
              variants={menuItemVariants}
              initial="closed"
              animate={isOpen ? 'open' : 'closed'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-all duration-300"
            >
              Book Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
