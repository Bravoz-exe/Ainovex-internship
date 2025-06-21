import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-950/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
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
          <span className="text-xl font-bold tracking-tight">AInovex</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Solutions', 'About', 'Technology', 'Insights', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <button 
              onClick={handleLogout}
              className="btn btn-outline text-sm px-5 py-2"
            >
              Log Out
            </button>
          ) : (
            <>
              <button 
                onClick={() => setShowAuthModal(true)} 
                className="btn btn-outline text-sm px-5 py-2"
              >
                Log In
              </button>
              <button 
                onClick={() => setShowAuthModal(true)}
                className="btn btn-primary text-sm px-5 py-2"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden absolute w-full bg-gray-900/95 backdrop-blur-md shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {['Solutions', 'About', 'Technology', 'Insights', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors p-2 border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              {user ? (
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline w-full"
                >
                  Log Out
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsOpen(false);
                    }}
                    className="btn btn-outline w-full"
                  >
                    Log In
                  </button>
                  <button 
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsOpen(false);
                    }}
                    className="btn btn-primary w-full"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </motion.div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </header>
  );
};

export default Navbar;