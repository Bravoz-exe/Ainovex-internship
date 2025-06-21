import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative w-8 h-8 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <span className="text-xl font-bold tracking-tight">ALNOVEX</span>
            </Link>
            
            <p className="text-gray-400 mb-6">
              Advanced AI-driven financial solutions for the future of investing.
            </p>
            
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors duration-300"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {social === 'twitter' && <><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></>}
                    {social === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>}
                    {social === 'facebook' && <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></>}
                    {social === 'instagram' && <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white text-lg font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  {['About Us', 'Team', 'Careers', 'Contact', 'Press'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-4">Solutions</h4>
                <ul className="space-y-2">
                  {['AI Investing', 'Risk Management', 'Portfolio Analysis', 'Market Insights', 'Wealth Planning'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  {['Blog', 'Research', 'Webinars', 'Documentation', 'Partners'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alnovex. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;