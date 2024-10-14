import React from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999/month',
      features: [
        'Basic AI model deployment',
        'Limited cloud resources',
        '8/5 support',
      ],
    },
    {
      name: 'Pro',
      price: '$2,999/month',
      features: [
        'Advanced AI model deployment',
        'Scalable cloud resources',
        '24/7 support',
        'Performance optimization',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Custom AI solutions',
        'Dedicated cloud infrastructure',
        'Priority 24/7 support',
        'Full security suite',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">
        Pricing Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              {plan.name}
            </h2>
            <p className="text-4xl font-bold mb-6 text-gray-100">
              {plan.price}
            </p>
            <ul className="mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2">
                  <Check className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-400 transition duration-300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
