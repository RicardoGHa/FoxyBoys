import React from 'react';
import { BarChart2, Users, DollarSign, TrendingUp, ShoppingCart, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Revenue', value: '$54,763', icon: DollarSign, color: 'text-green-500' },
    { title: 'Active Users', value: '2,845', icon: Users, color: 'text-blue-500' },
    { title: 'New Customers', value: '186', icon: ShoppingCart, color: 'text-purple-500' },
    { title: 'Growth Rate', value: '12.5%', icon: TrendingUp, color: 'text-yellow-500' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h2 className="text-2xl font-semibold">{stat.value}</h2>
              </div>
              <stat.icon className={`h-10 w-10 ${stat.color}`} />
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 mr-2">4.75%</span>
              <span className="text-gray-500">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Additional Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <BarChart2 className="h-32 w-32 text-gray-400" />
            <p className="ml-4 text-gray-500">Revenue chart placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">User Activity</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <Activity className="h-32 w-32 text-gray-400" />
            <p className="ml-4 text-gray-500">User activity chart placeholder</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="divide-y divide-gray-200">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item} className="py-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    New user registered
                  </p>
                  <p className="text-sm text-gray-500">
                    User ID: {1000 + item}
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    New
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;