import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeAre: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="who-we-are" ref={ref} className="py-20 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6"
            >
              WHO WE ARE
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-gray-300 mb-6">
                Alnovex is a cutting-edge financial brand positioned at the intersection 
                of advanced technologies and secure investment strategies.
              </p>
              
              <p className="text-gray-300 mb-6">
                Specializing in advanced data analysis, intelligent algorithms, and 
                strategic market insights, Alnovex provides a robust platform designed 
                to optimize investment performance while minimizing risk.
              </p>
              
              <p className="text-gray-300 mb-8">
                At the core of Alnovex is the integration of AI-based solutions, enabling 
                precise decision-making and dynamic portfolio management.
              </p>
              
              <div className="mt-8">
                <button className="btn btn-outline">
                  Learn More About Our Team
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="md:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-96 w-full relative"
            >
              {/* Tech-inspired arrow visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] clip-path-arrow relative">
                  {/* Arrow base */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-800/20 to-cyan-800/10 backdrop-blur-sm border border-cyan-500/20 p-8 flex flex-col justify-center items-center">
                    
                    {/* Circuit patterns inside the arrow */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Horizontal lines */}
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div 
                          key={`h-${i}`}
                          className="absolute h-[1px] bg-cyan-500/30"
                          style={{ 
                            left: '10%',
                            width: '80%',
                            top: `${i * 20}%`,
                          }}
                          initial={{ width: '0%', left: '50%' }}
                          animate={inView ? { width: '80%', left: '10%' } : { width: '0%', left: '50%' }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        />
                      ))}
                      
                      {/* Vertical lines */}
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div 
                          key={`v-${i}`}
                          className="absolute w-[1px] bg-cyan-500/30"
                          style={{ 
                            top: '10%',
                            height: '80%',
                            left: `${i * 20}%`,
                          }}
                          initial={{ height: '0%', top: '50%' }}
                          animate={inView ? { height: '80%', top: '10%' } : { height: '0%', top: '50%' }}
                          transition={{ duration: 1, delay: 0.7 + (i * 0.1) }}
                        />
                      ))}
                      
                      {/* Connection dots */}
                      {[20, 40, 60, 80].map((x) => 
                        [20, 40, 60, 80].map((y) => (
                          <motion.div
                            key={`dot-${x}-${y}`}
                            className="absolute bg-cyan-400 rounded-full"
                            style={{ 
                              width: x % 40 === 0 && y % 40 === 0 ? '8px' : '4px',
                              height: x % 40 === 0 && y % 40 === 0 ? '8px' : '4px',
                              left: `${x}%`,
                              top: `${y}%`,
                              transform: 'translate(-50%, -50%)',
                              boxShadow: x % 40 === 0 && y % 40 === 0 ? '0 0 10px rgba(0, 255, 244, 0.5)' : 'none'
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: 1 + ((x + y) / 100),
                              ease: "easeOut"
                            }}
                          />
                        ))
                      )}
                    </div>
                    
                    {/* Center circle with pulse */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      className="relative z-10"
                    >
                      <div className="w-16 h-16 rounded-full bg-cyan-400/20 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-white/90" />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Animated scan line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                      style={{ height: '10px' }}
                      initial={{ top: '-10px' }}
                      animate={inView ? { top: ['0%', '100%'] } : { top: '-10px' }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: "linear",
                        delay: 1.5
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="digital-line mt-10"></div>
    </section>
  );
};

export default WhoWeAre;