import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, ShieldCheck, LineChart } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent opacity-30" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
              <span className="text-white">Advanced AI for</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Intelligent Investing
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Alnovex combines cutting-edge AI technology with financial expertise to 
              deliver secure, innovative investment solutions that drive exceptional returns.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button className="btn btn-primary group">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { icon: <TrendingUp className="w-6 h-6 text-cyan-400" />, text: "AI-Powered" },
                { icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />, text: "Secure" },
                { icon: <LineChart className="w-6 h-6 text-cyan-400" />, text: "Data-Driven" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-3">
                  {item.icon}
                  <span className="text-sm mt-2 text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
              {/* Abstract Tech Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                  {/* Outer ring */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-pulse" />
                  
                  {/* Middle ring */}
                  <div className="absolute inset-8 border border-cyan-400/40 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
                  
                  {/* Inner ring */}
                  <div className="absolute inset-16 border border-blue-500/50 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
                  
                  {/* Center circle */}
                  <div className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-sm animate-pulse" />
                  <div className="absolute inset-0 m-auto w-12 h-12 bg-cyan-500 rounded-full glow z-10" />
                  
                  {/* Connection lines */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((degree, i) => (
                    <div 
                      key={i}
                      className="absolute top-1/2 left-1/2 w-[40%] h-0.5 bg-gradient-to-r from-cyan-500/80 to-transparent transform -translate-y-1/2 origin-left"
                      style={{ transform: `translateY(-50%) rotate(${degree}deg)` }}
                    />
                  ))}
                  
                  {/* Data nodes */}
                  {[45, 135, 225, 315].map((degree, i) => (
                    <div 
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,255,244,0.8)]"
                      style={{ 
                        top: `${50 + 42 * Math.sin(degree * Math.PI / 180)}%`,
                        left: `${50 + 42 * Math.cos(degree * Math.PI / 180)}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="digital-line mt-16"></div>
    </section>
  );
};

export default HeroSection;