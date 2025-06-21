import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Services from '../components/Services';
import { TrendingUp, Brain, Shield, BarChart3, Cpu, Target } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Advanced AI Algorithms",
      description: "Proprietary machine learning models trained on vast financial datasets"
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      title: "Precision Targeting",
      description: "Identify high-probability investment opportunities with surgical precision"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Risk Mitigation",
      description: "Advanced risk assessment and portfolio protection strategies"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Analytics",
      description: "Live market analysis and instant decision-making capabilities"
    }
  ];

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
              <span className="text-white">Our</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Solutions
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Cutting-edge AI-powered financial solutions designed to maximize returns while minimizing risk.
            </p>
          </motion.div>
        </div>
        <div className="digital-line mt-10"></div>
      </section>

      {/* Key Features */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
              KEY FEATURES
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our platform combines the latest in artificial intelligence with proven financial strategies.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6, 
                    delay: 0.1 + (index * 0.1) 
                  }
                } : { opacity: 0, y: 50 }}
                className="text-center p-6"
              >
                <div className="bg-gray-800/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="digital-line mt-16"></div>
      </section>

      <Services />
    </div>
  );
};

export default SolutionsPage;