import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      features: [
        'Up to 25 employees',
        'Basic payroll processing',
        'Tax calculations',
        'Email support',
        'Mobile access'
      ]
    },
    {
      name: 'Professional',
      price: '$99',
      features: [
        'Up to 100 employees',
        'Advanced payroll features',
        'Time tracking',
        'Priority support',
        'API access',
        'Custom reports'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited employees',
        'Full feature access',
        'Dedicated support',
        'Custom integration',
        'White labeling',
        'Training sessions'
      ]
    }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that best fits your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
              </p>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;