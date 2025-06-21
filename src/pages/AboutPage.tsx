import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhoWeAre from '../components/WhoWeAre';
import CoreValues from '../components/CoreValues';
import BrandPersonality from '../components/BrandPersonality';

const AboutPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">About</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                AInovex
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Discover our mission, values, and the innovative approach that drives our AI-powered financial solutions.
            </p>
          </motion.div>
        </div>
        <div className="digital-line mt-10"></div>
      </section>

      <WhoWeAre />
      <CoreValues />
      <BrandPersonality />
    </div>
  );
};

export default AboutPage;