import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    'Automated salary calculations',
    'Tax deductions and compliance',
    'Employee attendance tracking',
    'Leave management',
    'Performance bonuses',
    'Detailed reporting',
    'Multi-currency support',
    'Secure data encryption',
    'Mobile accessibility',
    'Email notifications',
    'Document management',
    'Audit trails'
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comprehensive Payroll Features
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Everything you need to manage your organization's payroll efficiently and accurately.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-lg text-gray-500">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;