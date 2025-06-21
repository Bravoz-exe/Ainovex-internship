import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Cpu, Target, Users, Activity } from 'lucide-react';

const BrandPersonality: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalityTraits = [
    {
      icon: <Lightbulb className="w-10 h-10 text-cyan-400" />,
      title: "VISIONARY",
      description: "Always looking ahead, anticipating market shifts and emerging technologies to lead rather than follow."
    },
    {
      icon: <Cpu className="w-10 h-10 text-cyan-400" />,
      title: "CUTTING-EDGE",
      description: "Continuously harnessing the power of advanced technologies to deliver superior financial solutions."
    },
    {
      icon: <Target className="w-10 h-10 text-cyan-400" />,
      title: "PRECISION-FOCUSED",
      description: "Meticulous attention to detail in every analysis, recommendation, and strategy implementation."
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "CLIENT-CENTRIC",
      description: "Every decision and innovation is guided by what will bring the most value to our clients."
    },
    {
      icon: <Activity className="w-10 h-10 text-cyan-400" />,
      title: "DYNAMIC",
      description: "Agile and responsive, adapting quickly to market conditions and client needs."
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + (i * 0.1) 
      }
    })
  };

  return (
    <section id="brand-personality" ref={ref} className="py-20 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
              BRAND PERSONALITY
            </h2>
            
            <p className="text-gray-300 mb-8">
              Our brand personality is a reflection of our values, approach, and commitment to excellence in everything we do.
            </p>
            
            <div className="space-y-6">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className="flex items-start space-x-4 border-l-2 border-cyan-500/50 pl-4 py-2"
                >
                  <div className="flex-shrink-0 mt-1">
                    {trait.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{trait.title}</h3>
                    <p className="text-gray-400">{trait.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <button className="btn btn-primary">
                Connect With Us
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 flex items-center justify-center"
          >
            {/* Abstract digital brain representation */}
            <div className="relative w-full h-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900/30 border border-cyan-500/30">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  {/* Neural network visualization */}
                  <svg viewBox="0 0 500 500" className="w-full h-full opacity-70">
                    {/* Nodes and connections are generated dynamically */}
                    {Array.from({ length: 30 }).map((_, i) => {
                      const x = 100 + Math.random() * 300;
                      const y = 100 + Math.random() * 300;
                      const radius = 3 + Math.random() * 5;
                      
                      return (
                        <motion.circle
                          key={`node-${i}`}
                          cx={x}
                          cy={y}
                          r={radius}
                          fill="#0FF4F4"
                          initial={{ opacity: 0 }}
                          animate={inView ? { 
                            opacity: [0, 0.8, 0.4, 0.8],
                          } : { opacity: 0 }}
                          transition={{ 
                            duration: 3 + Math.random() * 2,
                            delay: 0.5 + (i * 0.05),
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      );
                    })}
                    
                    {/* Connection lines */}
                    {Array.from({ length: 40 }).map((_, i) => {
                      const x1 = 50 + Math.random() * 400;
                      const y1 = 50 + Math.random() * 400;
                      const x2 = 50 + Math.random() * 400;
                      const y2 = 50 + Math.random() * 400;
                      
                      return (
                        <motion.line
                          key={`line-${i}`}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke="#0FF4F4"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                          initial={{ pathLength: 0 }}
                          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 1 + (i * 0.03),
                            ease: "easeInOut"
                          }}
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Pulsing center */}
                  <motion.div
                    className="absolute w-24 h-24 bg-gradient-radial from-cyan-400 to-transparent rounded-full"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </div>
                
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
                  style={{ height: '40px' }}
                  initial={{ top: '-40px' }}
                  animate={inView ? { top: ['0%', '100%'] } : { top: '-40px' }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: "linear",
                    delay: 0.5
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPersonality;