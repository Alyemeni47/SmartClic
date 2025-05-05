import React, { useState } from 'react';
import { TrendingUp, Medal, Trophy, Star, Search, ChevronDown, ChevronUp } from 'lucide-react';

const LeaderboardSection: React.FC = () => {
  const [sortBy, setSortBy] = useState('rank');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  
  const leaderboardData = [
    { id: 1, rank: 1, username: 'BonkWhale', totalStaked: '42.5M', rewards: '2.1M', daysActive: 145 },
    { id: 2, rank: 2, username: 'SolanaKing', totalStaked: '38.2M', rewards: '1.9M', daysActive: 132 },
    { id: 3, rank: 3, username: 'CryptoDegen', totalStaked: '36.7M', rewards: '1.8M', daysActive: 156 },
    { id: 4, rank: 4, username: 'BonkMaster', totalStaked: '28.4M', rewards: '1.4M', daysActive: 98 },
    { id: 5, rank: 5, username: 'TokenStaker', totalStaked: '26.9M', rewards: '1.3M', daysActive: 112 },
    { id: 6, rank: 6, username: 'SolFarmer', totalStaked: '23.5M', rewards: '1.1M', daysActive: 88 },
    { id: 7, rank: 7, username: 'BonkLover', totalStaked: '21.2M', rewards: '1.0M', daysActive: 78 },
    { id: 8, rank: 8, username: 'RewardHunter', totalStaked: '19.8M', rewards: '0.9M', daysActive: 92 },
    { id: 9, rank: 9, username: 'StakeQueen', totalStaked: '17.6M', rewards: '0.8M', daysActive: 65 },
    { id: 10, rank: 10, username: 'CryptoNerd', totalStaked: '15.3M', rewards: '0.7M', daysActive: 72 },
  ];
  
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };
  
  const sortedData = [...leaderboardData]
    .filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      const aValue = a[sortBy as keyof typeof a];
      const bValue = b[sortBy as keyof typeof b];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const numA = parseFloat(aValue.replace(/[^\d.-]/g, ''));
        const numB = parseFloat(bValue.replace(/[^\d.-]/g, ''));
        
        if (!isNaN(numA) && !isNaN(numB)) {
          return sortOrder === 'asc' ? numA - numB : numB - numA;
        }
        
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return 0;
    });

  return (
    <section id="leaderboard" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            Nexa Rewards Leaderboard
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Check out the top NexaCoin stakers and see if you can climb the ranks. More staking means higher rewards and better positions.
          </p>
        </div>

        {/* Top performers cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <TopPerformerCard 
            rank={1}
            username="BonkWhale"
            amount="42.5M BONK"
            icon={<Trophy size={24} className="text-yellow-500" />}
            color="from-yellow-400 to-yellow-600"
          />
          <TopPerformerCard 
            rank={2}
            username="SolanaKing"
            amount="38.2M BONK"
            icon={<Medal size={24} className="text-gray-400" />}
            color="from-gray-400 to-gray-500"
          />
          <TopPerformerCard 
            rank={3}
            username="CryptoDegen"
            amount="36.7M BONK"
            icon={<Star size={24} className="text-amber-600" />}
            color="from-amber-500 to-amber-700"
          />
        </div>

        {/* Leaderboard table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-5xl mx-auto">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Top Stakers</h3>
              
              <div className="relative w-full md:w-64">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search username"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <SortableTableHeader 
                      title="Rank"
                      column="rank"
                      currentSort={sortBy}
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                    <SortableTableHeader 
                      title="Username"
                      column="username"
                      currentSort={sortBy}
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                    <SortableTableHeader 
                      title="Total Staked"
                      column="totalStaked"
                      currentSort={sortBy}
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                    <SortableTableHeader 
                      title="Rewards"
                      column="rewards"
                      currentSort={sortBy}
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                    <SortableTableHeader 
                      title="Days Active"
                      column="daysActive"
                      currentSort={sortBy}
                      currentOrder={sortOrder}
                      onSort={handleSort}
                    />
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                            user.rank === 1 ? 'bg-yellow-500' : 
                            user.rank === 2 ? 'bg-gray-400' : 
                            user.rank === 3 ? 'bg-amber-600' : 
                            'bg-purple-500'
                          }`}>
                            {user.rank}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium text-gray-900 dark:text-white">{user.username}</td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{user.totalStaked}</td>
                      <td className="py-4 px-4 text-green-600 dark:text-green-400 font-medium">{user.rewards}</td>
                      <td className="py-4 px-4 text-gray-700 dark:text-gray-300">{user.daysActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                View Complete Leaderboard
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard
              title="Total Stakers"
              value="56,478"
              trend="+12% this month"
              icon={<TrendingUp size={24} className="text-green-500" />}
            />
            <StatsCard
              title="Total BONK Staked"
              value="842.6M"
              trend="+28.5M this week"
              icon={<TrendingUp size={24} className="text-green-500" />}
            />
            <StatsCard
              title="Avg. Staking Period"
              value="72 Days"
              trend="+3 days vs last month"
              icon={<TrendingUp size={24} className="text-green-500" />}
            />
            <StatsCard
              title="Total Rewards Paid"
              value="126.4M BONK"
              trend="Since launch"
              icon={<TrendingUp size={24} className="text-green-500" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TopPerformerCardProps {
  rank: number;
  username: string;
  amount: string;
  icon: React.ReactNode;
  color: string;
}

const TopPerformerCard: React.FC<TopPerformerCardProps> = ({ rank, username, amount, icon, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 relative overflow-hidden group hover:shadow-xl transition-all">
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} rounded-bl-[40px] opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {icon}
        </div>
        <span className={`text-lg font-bold ${
          rank === 1 ? 'text-yellow-500' : 
          rank === 2 ? 'text-gray-400' : 
          'text-amber-600'
        }`}>#{rank}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{username}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3">Total Staked</p>
      <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
        {amount}
      </p>
    </div>
  );
};

interface SortableTableHeaderProps {
  title: string;
  column: string;
  currentSort: string;
  currentOrder: string;
  onSort: (column: string) => void;
}

const SortableTableHeader: React.FC<SortableTableHeaderProps> = ({ 
  title, column, currentSort, currentOrder, onSort 
}) => {
  return (
    <th className="py-3 px-4 text-left font-medium text-gray-500 dark:text-gray-400">
      <button 
        className="flex items-center space-x-1 focus:outline-none"
        onClick={() => onSort(column)}
      >
        <span>{title}</span>
        <span className="inline-flex flex-col">
          <ChevronUp 
            size={12} 
            className={`${currentSort === column && currentOrder === 'asc' 
              ? 'text-purple-600 dark:text-purple-400' 
              : 'text-gray-400 dark:text-gray-600'}`} 
          />
          <ChevronDown 
            size={12} 
            className={`${currentSort === column && currentOrder === 'desc' 
              ? 'text-purple-600 dark:text-purple-400' 
              : 'text-gray-400 dark:text-gray-600'}`} 
          />
        </span>
      </button>
    </th>
  );
};

interface StatsCardProps {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
      <p className="text-sm text-green-600 dark:text-green-400">{trend}</p>
    </div>
  );
};

export default LeaderboardSection;