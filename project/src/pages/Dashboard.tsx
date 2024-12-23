import React from 'react';
import { DollarSign, Users, Building2, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${title.includes('Expenses') ? 'bg-red-100' : 'bg-blue-100'}`}>
        <Icon className={title.includes('Expenses') ? 'text-red-600' : 'text-blue-600'} size={24} />
      </div>
    </div>
    <div className="mt-4">
      <span className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '+' : ''}{change}%
      </span>
      <span className="text-sm text-gray-500 ml-1">from last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  const stats = [
    { icon: DollarSign, title: 'Total Payroll', value: '$124,250', change: 12.5 },
    { icon: Users, title: 'Total Employees', value: '48', change: 4.2 },
    { icon: Building2, title: 'Departments', value: '8', change: 0 },
    { icon: Clock, title: 'Monthly Expenses', value: '$85,125', change: -2.4 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'Payroll processed', department: 'Engineering', time: '2 hours ago' },
            { action: 'New employee added', department: 'Marketing', time: '4 hours ago' },
            { action: 'Bonus approved', department: 'Sales', time: '6 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <div>
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.department}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;