import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const InsightsPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const articles = [
    {
      title: "The Future of AI in Financial Markets",
      excerpt: "Exploring how artificial intelligence is revolutionizing investment strategies and market analysis.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "AI Technology",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Risk Management in the Digital Age",
      excerpt: "How modern technology is transforming traditional risk assessment and portfolio protection strategies.",
      author: "Michael Rodriguez",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Risk Management",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Market Predictions Using Machine Learning",
      excerpt: "Deep dive into predictive analytics and how ML models are improving investment decision-making.",
      author: "Dr. James Wilson",
      date: "January 10, 2025",
      readTime: "10 min read",
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Blockchain and Financial Security",
      excerpt: "Understanding how blockchain technology is enhancing security and transparency in financial transactions.",
      author: "Lisa Thompson",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Blockchain",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Sustainable Investing with AI",
      excerpt: "How artificial intelligence is enabling more sustainable and responsible investment strategies.",
      author: "David Park",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Sustainable Finance",
      image: "https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "The Evolution of Algorithmic Trading",
      excerpt: "Tracing the development of algorithmic trading and its impact on modern financial markets.",
      author: "Emma Foster",
      date: "January 3, 2025",
      readTime: "11 min read",
      category: "Trading",
      image: "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const marketInsights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Market Trends",
      value: "+12.5%",
      description: "AI-driven portfolios outperforming traditional methods"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: "Risk Reduction",
      value: "-35%",
      description: "Average risk reduction using our AI models"
    },
    {
      icon: <PieChart className="w-8 h-8 text-cyan-400" />,
      title: "Success Rate",
      value: "94%",
      description: "Accuracy in market prediction algorithms"
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
              <span className="text-white">Market</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Insights
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Stay ahead of the curve with our latest research, analysis, and insights into AI-driven finance.
            </p>
          </motion.div>
        </div>
        <div className="digital-line mt-10"></div>
      </section>

      {/* Market Statistics */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
              MARKET PERFORMANCE
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Real-time insights and performance metrics from our AI-powered analysis.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {marketInsights.map((insight, index) => (
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
                className="bg-gradient-to-b from-gray-900 to-blue-900/20 border border-gray-800 rounded-lg p-8 text-center group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {insight.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{insight.title}</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{insight.value}</div>
                <p className="text-gray-400 text-sm">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="digital-line"></div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold mb-6">
              LATEST ARTICLES
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Expert analysis and thought leadership on the future of AI in finance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
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
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-gray-500" />
                      <div>
                        <div className="text-sm text-white">{article.author}</div>
                        <div className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="btn btn-outline">
              View All Articles
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;