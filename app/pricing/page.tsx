'use client';

import { motion } from 'framer-motion';
import Navbar from '@/app/components/Navbar';
import { Check, Zap, Shield, Star } from 'lucide-react';
import { useParallax } from '@/app/hooks/useAnimations';

const pricingPlans = [
  {
    id: 1,
    name: 'Standard',
    price: 50,
    period: '/day',
    description: 'Perfect for city exploration',
    popular: false,
    features: [
      'Compact & Economy Cars',
      'Third-party Insurance',
      'Friendly Support',
      'Mileage Limit: 200 km',
      'One Driver Included',
      'Late Return: $5/hour',
    ],
    icon: '🚗',
  },
  {
    id: 2,
    name: 'Premium',
    price: 150,
    period: '/day',
    description: 'Ultimate luxury experience',
    popular: true,
    features: [
      'Mercedes, BMW, Audi',
      'Full Comprehensive Cover',
      'VIP 24/7 Support',
      'Unlimited Mileage',
      'Multiple Drivers',
      'Free Upgrades',
      'Concierge Service',
    ],
    icon: '👑',
  },
  {
    id: 3,
    name: 'Executive',
    price: 200,
    period: '/day',
    description: 'Elite services for VIPs',
    popular: false,
    features: [
      'Porsche, Tesla, Jaguar',
      'Premium Insurance',
      'Personal Driver Option',
      'Unlimited Mileage',
      'Unlimited Drivers',
      'Airport Transfers',
      'Customized Itineraries',
      'Priority Booking',
    ],
    icon: '✨',
  },
];

const carCategories = [
  { name: 'Economy', starting: 40, category: '🚙' },
  { name: 'Comfort', starting: 80, category: '🚕' },
  { name: 'Luxury Sedan', starting: 150, category: '🚗' },
  { name: 'Sports', starting: 220, category: '🏎️' },
  { name: 'SUV', starting: 120, category: '🚙' },
  { name: 'Premium SUV', starting: 200, category: '🚐' },
];

export default function PricingPage() {
  const parallaxOffset = useParallax(0.4);

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
      transition: { duration: 0.8 },
    },
  };

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
              Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-black mt-4 mb-6">
              Simple & Flexible Rates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees, no surprises.
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{ y: plan.popular ? -16 : -8 }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'bg-black text-white border-2 border-black shadow-xl'
                    : 'bg-white border border-gray-300 text-black'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-6 left-0 right-0 text-center z-10"
                  >
                    <span className="inline-block px-4 py-2 bg-white text-black text-xs font-bold rounded-full">
                      BEST VALUE
                    </span>
                  </motion.div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <div className="mb-6 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-5xl mb-4"
                    >
                      {plan.icon}
                    </motion.div>
                    <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-black'}`}>{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>

                    <div className="mb-8">
                      <motion.div
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
                          ${plan.price}
                        </span>
                        <span className={`ml-2 ${plan.popular ? 'text-gray-400' : 'text-gray-600'}`}>
                          {plan.period}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-4 mb-8"
                  >
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        whileHover={{ x: 4 }}
                      >
                        <Check size={20} className={plan.popular ? 'text-white' : 'text-black'} />
                        <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: plan.popular ? '#fff' : '#000',
                      color: plan.popular ? '#000' : '#fff',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 font-bold rounded-lg transition-all duration-300 border-2 ${
                      plan.popular
                        ? 'bg-white text-black border-white hover:bg-gray-100'
                        : 'bg-black text-white border-black hover:bg-gray-900'
                    }`}
                  >
                    {plan.popular ? 'Book Now' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Starting Prices by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {carCategories.map((car, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, borderColor: '#000' }}
                  className="bg-white border border-gray-300 rounded-xl p-6 text-center transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="text-4xl mb-3">{car.category}</div>
                  <h4 className="text-lg font-bold text-black mb-2">{car.name}</h4>
                  <motion.p
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-2xl font-bold text-black"
                  >
                    From ${car.starting}/day
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is fuel included in the rental price?',
                a: 'No, fuel is charged separately. You can return the car with a full tank.',
              },
              {
                q: 'What insurance is included?',
                a: 'All plans include comprehensive insurance. Premium and Executive plans include zero-deductible coverage.',
              },
              {
                q: 'Can I cancel or modify my booking?',
                a: 'Yes, free cancellation up to 24 hours before pickup. Modifications allowed anytime.',
              },
              {
                q: 'Are there discounts for long-term rentals?',
                a: 'Yes, we offer exclusive discounts for weekly and monthly bookings. Contact us for details.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: '#f3f4f6' }}
                className="bg-white border border-gray-300 rounded-xl p-6 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <span className="text-black">Q:</span> {faq.q}
                </h4>
                <p className="text-gray-700 ml-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Book Your Luxury Ride?
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Get special discounts on your first booking. Limited time offer!
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
