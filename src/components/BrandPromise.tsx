import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Shield, BarChart3 } from 'lucide-react';

const BrandPromise: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="brand-promise" className="py-20 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.h2 
              variants={fadeIn} 
              className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6"
            >
              BRAND PROMISE
            </motion.h2>
            
            <motion.p variants={fadeIn} className="text-gray-300 mb-6">
              Alnovex is committed to empowering its clients with innovative, secure, all profitable
              investment opportunities.
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-gray-300 mb-8">
              By leveraging artificial intelligence and other advanced technologies, we offer
              tailored financial solutions that ensure both stability and growth, allowing clients
              to stay competitive in an ever-evolving financial landscape.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
            >
              {[
                { 
                  icon: <Cpu className="w-8 h-8 text-cyan-400" />,
                  title: "AI-Powered",
                  description: "Advanced algorithms and machine learning"
                },
                { 
                  icon: <Shield className="w-8 h-8 text-cyan-400" />,
                  title: "Secure",
                  description: "Enterprise-grade security protocols"
                },
                { 
                  icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
                  title: "Data-Driven",
                  description: "Decisions backed by comprehensive analysis"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        duration: 0.6,
                        delay: index * 0.1
                      } 
                    }
                  }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-full">{item.icon}</div>
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            variants={fadeIn}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Circuit-inspired logo visual */}
              <svg 
                viewBox="0 0 300 300" 
                className="w-full h-full animate-float"
                style={{ 
                  filter: "drop-shadow(0 0 10px rgba(0, 255, 244, 0.3))"
                }}
              >
                {/* Outer hexagon */}
                <motion.path
                  d="M150,20 L245,75 L245,185 L150,240 L55,185 L55,75 Z"
                  fill="none"
                  stroke="#0FF4F4"
                  strokeWidth="2"
                  strokeDasharray="800"
                  initial={{ strokeDashoffset: 800 }}
                  animate={{ strokeDashoffset: inView ? 0 : 800 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                
                {/* Inner hexagon */}
                <motion.path
                  d="M150,60 L215,95 L215,165 L150,200 L85,165 L85,95 Z"
                  fill="none"
                  stroke="#0FF4F4"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                  strokeDasharray="600"
                  initial={{ strokeDashoffset: 600 }}
                  animate={{ strokeDashoffset: inView ? 0 : 600 }}
                  transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
                />
                
                {/* Central element */}
                <motion.path
                  d="M140,100 V140 H120 V160 H160 V120 H180 V100 Z"
                  fill="none"
                  stroke="#0FF4F4"
                  strokeWidth="3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                
                {/* Connection lines */}
                {[
                  "M150,20 C150,20 180,80 150,100",
                  "M245,75 C245,75 200,100 180,100",
                  "M245,185 C245,185 200,160 180,160",
                  "M150,240 C150,240 160,200 160,160",
                  "M55,185 C55,185 100,160 120,160",
                  "M55,75 C55,75 100,100 120,100"
                ].map((path, i) => (
                  <motion.path
                    key={i}
                    d={path}
                    fill="none"
                    stroke="#0FF4F4"
                    strokeWidth="1"
                    strokeOpacity="0.7"
                    strokeDasharray="200"
                    initial={{ strokeDashoffset: 200 }}
                    animate={{ strokeDashoffset: inView ? 0 : 200 }}
                    transition={{ duration: 2, delay: 1 + (i * 0.1), ease: "easeInOut" }}
                  />
                ))}
                
                {/* Glowing circles at connection points */}
                {[
                  [150, 20], [245, 75], [245, 185], [150, 240], [55, 185], [55, 75],
                  [150, 100], [180, 100], [180, 160], [160, 160], [120, 160], [120, 100]
                ].map((coords, i) => (
                  <motion.circle
                    key={i}
                    cx={coords[0]}
                    cy={coords[1]}
                    r={i < 6 ? 4 : 3}
                    fill="#0FF4F4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: inView ? 0.9 : 0,
                      scale: inView ? 1 : 0
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.5 + (i * 0.1),
                      ease: "easeOut"
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="digital-line mt-10"></div>
    </section>
  );
};

export default BrandPromise;