import React, { useState } from 'react';
import { ChevronsRight, ArrowRight, CheckCircle, LucidePieChart } from 'lucide-react';

const RewardsSection: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('daily');

  const tabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' }
  ];

  return (
    <section id="rewards" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Maximize Your Nexa Rewards
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Earn passive income by staking your NexaCoins. Choose from multiple reward tiers and strategies.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTab === tab.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Rewards Structure</h3>
              <div className="space-y-4">
                <RewardTier
                  name="Bronze Tier"
                  amount="10K - 100K NEXA"
                  apy="12%"
                  color="from-amber-400 to-amber-500"
                />
                <RewardTier
                  name="Silver Tier"
                  amount="100K - 1M NEXA"
                  apy="18%"
                  color="from-gray-300 to-gray-400"
                />
                <RewardTier
                  name="Gold Tier"
                  amount="1M - 10M NEXA"
                  apy="24%"
                  color="from-yellow-400 to-yellow-500"
                />
                <RewardTier
                  name="Platinum Tier"
                  amount="10M+ NEXA"
                  apy="30%"
                  color="from-purple-400 to-indigo-600"
                />
              </div>

              <button className="mt-6 flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                View all tiers <ChevronsRight size={16} className="ml-1" />
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Benefits</h3>
              <div className="space-y-3">
                <Benefit title="Compounding Returns" description="Automatically compound your rewards for maximum growth" />
                <Benefit title="No Lock-up Period" description="Withdraw your tokens at any time without penalties" />
                <Benefit title="Reward Boosters" description="Earn bonus rewards by completing special missions" />
                <Benefit title="Referral Program" description="Earn when friends join using your referral code" />
                <Benefit title="Governance Rights" description="Gain voting power on platform decisions" />
              </div>

              <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-medium flex items-center justify-center transition-all transform hover:scale-[1.01]">
                Start Earning Rewards <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RewardTierProps {
  name: string;
  amount: string;
  apy: string;
  color: string;
}

const RewardTier: React.FC<RewardTierProps> = ({ name, amount, apy, color }) => {
  return (
    <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white font-bold text-sm mr-4`}>
        <LucidePieChart size={16} />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{amount}</p>
      </div>
      <div className="text-right">
        <span className="text-green-600 dark:text-green-400 font-bold">{apy}</span>
        <p className="text-xs text-gray-500 dark:text-gray-400">APY</p>
      </div>
    </div>
  );
};

interface BenefitProps {
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ title, description }) => {
  return (
    <div className="flex">
      <CheckCircle size={20} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default RewardsSection;