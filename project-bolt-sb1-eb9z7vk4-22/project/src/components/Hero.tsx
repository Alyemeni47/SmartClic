import React from 'react';
import { ArrowRight, TrendingUp, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 max-w-2xl">
            <div className="mb-6 inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
              🚀 The NexaCoin Rewards Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Earn Rewards with Your NexaCoin
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Stake your NexaCoins, earn passive rewards, and climb the leaderboard. Join thousands of users maximizing their crypto assets today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
                Start Earning Now
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button className="flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 px-6 py-3 rounded-full text-lg font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl"></div>
              <div className="relative">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Rewards Overview</h3>
                  <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-3 rounded-full">Live</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <StatsCard 
                    title="Total NEXA Staked" 
                    value="1.2M" 
                    change="+12.5%" 
                    icon={<TrendingUp className="text-purple-500" />} 
                  />
                  <StatsCard 
                    title="Your Potential APY" 
                    value="24.6%" 
                    change="+2.1%" 
                    icon={<Award className="text-indigo-500" />} 
                  />
                  <StatsCard 
                    title="Secure Staking Pools" 
                    value="12" 
                    change="New" 
                    icon={<Shield className="text-blue-500" />} 
                  />
                  <StatsCard 
                    title="Reward Cycles" 
                    value="Daily" 
                    change="Active" 
                    icon={<TrendingUp className="text-green-500" />} 
                  />
                </div>

                <button className="mt-8 w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all transform hover:scale-[1.01]">
                  View Complete Dashboard
                </button>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white/60 dark:bg-gray-800/60 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-start mb-3">
        <span className="text-gray-500 dark:text-gray-400 text-sm">{title}</span>
        <span className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">{icon}</span>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
        <span className="text-green-500 text-sm font-medium">{change}</span>
      </div>
    </div>
  );
};

export default Hero;