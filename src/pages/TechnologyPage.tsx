import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Database, Shield, Zap, Network, Brain } from 'lucide-react';

const TechnologyPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "Machine Learning",
      description: "Advanced neural networks and deep learning algorithms for pattern recognition and prediction.",
      details: ["Deep Neural Networks", "Reinforcement Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: "Big Data Analytics",
      description: "Processing and analyzing massive datasets in real-time for actionable insights.",
      details: ["Real-time Processing", "Data Mining", "Predictive Analytics", "Statistical Modeling"]
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: "Blockchain Security",
      description: "Immutable transaction records and smart contracts for enhanced security.",
      details: ["Smart Contracts", "Decentralized Storage", "Cryptographic Security", "Audit Trails"]
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      title: "High-Performance Computing",
      description: "Lightning-fast processing capabilities for complex financial calculations.",
      details: ["Parallel Processing", "GPU Acceleration", "Cloud Computing", "Edge Computing"]
    },
    {
      icon: <Network className="w-12 h-12 text-cyan-400" />,
      title: "API Integration",
      description: "Seamless connectivity with major financial markets and data providers.",
      details: ["REST APIs", "WebSocket Connections", "Market Data Feeds", "Third-party Integrations"]
    },
    {
      icon: <Cpu className="w-12 h-12 text-cyan-400" />,
      title: "Quantum Computing",
      description: "Next-generation computing power for complex optimization problems.",
      details: ["Quantum Algorithms", "Optimization Problems", "Risk Modeling", "Portfolio Theory"]
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
              <span className="text-white">Advanced</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Technology
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Explore the cutting-edge technologies that power our AI-driven financial solutions.
            </p>
          </motion.div>
        </div>
        <div className="digital-line mt-10"></div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
              TECHNOLOGY STACK
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our platform is built on a foundation of the most advanced technologies available today.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
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
                className="bg-gradient-to-b from-gray-900 to-blue-900/20 border border-gray-800 rounded-lg p-8 group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-6">
                  {tech.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {tech.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {tech.description}
                </p>
                
                <ul className="space-y-2">
                  {tech.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="digital-line mt-16"></div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
              PERFORMANCE METRICS
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our technology delivers exceptional performance across all key metrics.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime", description: "System availability" },
              { value: "<1ms", label: "Latency", description: "Response time" },
              { value: "1M+", label: "Transactions", description: "Per second" },
              { value: "256-bit", label: "Encryption", description: "Security standard" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    duration: 0.6, 
                    delay: 0.2 + (index * 0.1) 
                  }
                } : { opacity: 0, scale: 0.9 }}
                className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-lg font-medium text-white mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;