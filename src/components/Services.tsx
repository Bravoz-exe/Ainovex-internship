import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, DatabaseBackup, Brain, ShieldCheck, BarChart2, RefreshCw } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />,
      title: "AI-Driven Investment Strategies",
      description: "Leveraging advanced algorithms to identify and capitalize on emerging market opportunities."
    },
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "Predictive Analytics",
      description: "Using machine learning to forecast market trends and optimize investment timing."
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-cyan-400" />,
      title: "Portfolio Optimization",
      description: "Science-based approach to maximize returns while managing risk exposure."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-cyan-400" />,
      title: "Risk Management Systems",
      description: "Advanced protocols to safeguard investments against market volatility."
    },
    {
      icon: <DatabaseBackup className="w-12 h-12 text-cyan-400" />,
      title: "Data-Driven Insights",
      description: "Transforming complex market data into actionable investment intelligence."
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-cyan-400" />,
      title: "Adaptive Strategy Development",
      description: "Evolving investment approaches that respond dynamically to changing market conditions."
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
            OUR SOLUTIONS
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Advanced financial technologies designed to optimize investment performance and create 
            sustainable growth in today's complex markets.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
              className="bg-gradient-to-b from-gray-900 to-blue-900/20 border border-gray-800 rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="p-8">
                <div className="bg-gray-800/50 rounded-lg w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400">
                  {service.description}
                </p>
                
                <div className="mt-8">
                  <a href="#" className="text-cyan-400 flex items-center group">
                    <span className="mr-2">Learn more</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn btn-outline">
            View All Solutions
          </button>
        </motion.div>
      </div>
      
      <div className="digital-line mt-16"></div>
    </section>
  );
};

export default Services;