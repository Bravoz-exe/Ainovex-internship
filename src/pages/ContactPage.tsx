import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Clock, Users, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: "Email Us",
      details: ["info@ainovex.com", "support@ainovex.com"],
      description: "Get in touch via email for detailed inquiries"
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Speak directly with our experts"
    },
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: "Visit Us",
      details: ["123 Innovation Drive", "Tech Valley, CA 94000"],
      description: "Our headquarters in Silicon Valley"
    }
  ];

  const stats = [
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      value: "24/7",
      label: "Support Available"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      value: "50+",
      label: "Expert Team Members"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      value: "<2h",
      label: "Average Response Time"
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
              <span className="text-white">Get In</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Touch
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Ready to transform your investment strategy? Contact our team of experts today.
            </p>
          </motion.div>
        </div>
        <div className="digital-line mt-10"></div>
      </section>

      {/* Contact Stats */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
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
                className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="digital-line"></div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-cyan-400 text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="demo">Request Demo</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Technical Support</option>
                    <option value="investment">Investment Opportunities</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full group"
                >
                  Send Message
                  <Send className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-cyan-400 text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8">
                Choose the best way to reach us. We're here to help you succeed.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gray-800/50 rounded-lg p-3">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-cyan-400 mb-1">{detail}</p>
                      ))}
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-blue-900/20 border border-gray-800 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday:</span>
                    <span className="text-cyan-400">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday:</span>
                    <span className="text-cyan-400">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday:</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;