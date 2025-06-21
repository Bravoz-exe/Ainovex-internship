import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Hexagon, Shield, BarChart3, Eye } from 'lucide-react';

const CoreValues: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const valueCards = [
    {
      icon: <Hexagon className="w-12 h-12 text-cyan-400" />,
      title: "INNOVATION",
      description: "Constantly evolving with the latest developments in artificial intelligence and machine learning to outperform market trends."
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "SECURITY",
      description: "Providing a foundation of trust and protection for every investor, with coding guidelines and strategies designed to safeguard capital."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />,
      title: "STRENGTH",
      description: "Backed by a team of experts and a solid technological infrastructure that supports stable and sustainable financial growth."
    },
    {
      icon: <Eye className="w-12 h-12 text-cyan-400" />,
      title: "TRANSPARENCY",
      description: "Clear and straightforward investment solutions, with a commitment to open and honest communication."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 + (i * 0.1) 
      }
    })
  };

  return (
    <section id="core-values" ref={ref} className="py-20 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
            CORE VALUES
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our foundational principles guide every decision we make and every solution we provide,
            ensuring that we deliver exceptional value to our clients.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              className="group"
            >
              <div className="relative glow overflow-hidden group">
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg relative z-10 h-full flex flex-col transition-all duration-300 group-hover:bg-gray-900/80 group-hover:border-cyan-500/50">
                  <div className="mb-6 flex justify-center sm:justify-start">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white text-center sm:text-left">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-400 flex-1 text-center sm:text-left">
                    {card.description}
                  </p>
                  
                  <div className="mt-6 w-12 h-0.5 bg-cyan-500/30 mx-auto sm:mx-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="digital-line mt-16"></div>
    </section>
  );
};

export default CoreValues;