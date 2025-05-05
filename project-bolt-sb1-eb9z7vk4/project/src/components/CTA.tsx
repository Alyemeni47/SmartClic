import React from 'react';
import { Wallet, ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 dark:from-purple-800/20 dark:to-indigo-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Ready to Start Earning NexaCoin Rewards?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of NexaCoin holders who are already maximizing their token potential. Start staking today and earn passive rewards.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105">
              <Wallet size={20} className="mr-2" />
              Connect Wallet
            </button>
            <button className="flex items-center justify-center bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 px-6 py-3 rounded-full text-lg font-medium transition-all">
              Learn More
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <CTAStat value="50K+" label="Active Users" />
            <CTAStat value="842M" label="NEXA Staked" />
            <CTAStat value="126M" label="NEXA Rewards Paid" />
            <CTAStat value="24.6%" label="Average APY" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface CTAStatProps {
  value: string;
  label: string;
}

const CTAStat: React.FC<CTAStatProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-gray-900 dark:text-white">{value}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
};

export default CTA;