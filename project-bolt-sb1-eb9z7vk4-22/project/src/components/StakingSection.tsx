import React, { useState } from 'react';
import { Lock, Clock, ArrowRight, Wallet, AlertCircle } from 'lucide-react';

const StakingSection: React.FC = () => {
  const [stakingAmount, setStakingAmount] = useState('');
  const [stakingPeriod, setStakingPeriod] = useState('30');
  
  const calculateReward = () => {
    const amount = parseFloat(stakingAmount) || 0;
    const days = parseInt(stakingPeriod, 10);
    
    let apy = 0;
    if (days === 30) apy = 0.12;
    else if (days === 90) apy = 0.18;
    else if (days === 180) apy = 0.24;
    else if (days === 365) apy = 0.30;
    
    return (amount * apy * (days / 365)).toFixed(2);
  };

  return (
    <section id="staking" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Stake Your NexaCoins
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose your staking period and amount to see your estimated rewards. The longer you stake, the higher your returns.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Staking Calculator</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Amount of NEXA to stake
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">NEXA</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Staking period
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { days: '30', label: '30 Days' },
                    { days: '90', label: '90 Days' },
                    { days: '180', label: '180 Days' },
                    { days: '365', label: '365 Days' }
                  ].map((period) => (
                    <button
                      key={period.days}
                      onClick={() => setStakingPeriod(period.days)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex flex-col items-center justify-center ${
                        stakingPeriod === period.days
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      <span>{period.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Estimated APY</span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {stakingPeriod === '30' ? '12%' : 
                     stakingPeriod === '90' ? '18%' : 
                     stakingPeriod === '180' ? '24%' : '30%'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Estimated rewards</span>
                  <span className="font-bold text-gray-900 dark:text-white">{calculateReward()} NEXA</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-medium flex items-center justify-center transition-all transform hover:scale-[1.01]">
                  <Wallet size={18} className="mr-2" />
                  Connect Wallet to Stake
                </button>
                <button className="w-full bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Learn More About Staking
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Staking Benefits</h3>
              
              <div className="space-y-6">
                <BenefitCard
                  icon={<Clock size={24} className="text-purple-500" />}
                  title="Flexible Lock Periods"
                  description="Choose from different staking periods based on your strategy. Longer periods offer higher rewards."
                />
                <BenefitCard
                  icon={<Lock size={24} className="text-indigo-500" />}
                  title="Secure Staking Protocol"
                  description="Your assets are secured by industry-leading security protocols and regular audits."
                />
                <BenefitCard
                  icon={<ArrowRight size={24} className="text-blue-500" />}
                  title="Auto-Compounding"
                  description="Automatically reinvest your rewards to maximize your returns through the power of compounding."
                />
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/30 rounded-xl">
                <div className="flex">
                  <AlertCircle size={20} className="text-yellow-600 dark:text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-500">Note</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-600">
                      Always do your own research before staking. While we provide a secure platform, all cryptocurrency investments carry inherent risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default StakingSection;