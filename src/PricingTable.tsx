import React from 'react';
import  "./App.css";

const PricingCard = ({ plan }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg ${plan.isPopular ? 'border-2 border-purple-500' : ''}`}>
      {plan.isPopular && (
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">MOST POPULAR</span>
      )}
      
      <h3 className="text-xl font-bold mt-4">{plan.name}</h3>
      
      <div className="mt-4">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-500">/per user, per month</span>
      </div>

      <ul className="mt-6 space-y-4">
        <li className="flex items-center">
          <span className="text-gray-700">10k Visitors/mo</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-700">10 Funnels, 50 Pages</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-700">Unlimited Transactions</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-700">Analytics</span>
        </li>
        <li className="flex items-center">
          <span className="text-gray-700">Integrations</span>
        </li>
        <li className={`flex items-center ${!plan.includesPremium && 'text-gray-400 line-through'}`}>
          <span>Audience Data</span>
        </li>
        <li className={`flex items-center ${!plan.includesPremium && 'text-gray-400 line-through'}`}>
          <span>Premium templates</span>
        </li>
        <li className={`flex items-center ${!plan.includesPremium && 'text-gray-400 line-through'}`}>
          <span>White Labelling</span>
        </li>
      </ul>

      <button
        className={`w-full py-2 mt-8 rounded-lg font-semibold
          ${plan.isPopular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
          }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default function PricingTable  () {
  const plans = [
    {
      name: "Basic",
      price: 49,
      buttonText: "Get Basic",
      includesPremium: false
    },
    {
      name: "Professional",
      price: 69,
      isPopular: true,
      buttonText: "Get Pro",
      includesPremium: true
    },
    {
      name: "Ultimate",
      price: 89,
      buttonText: "Get Ultimate",
      includesPremium: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center">
        <h3 className="text-gray-500 text-sm uppercase">our price</h3>
        <h2 className="text-3xl font-bold mt-2">Price Plans</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Choose the plan that suits your needs best and enjoy the creative
          process of brainstorming the new project of yours.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <p className="text-center mt-8 text-gray-600">
        Interested in a custom plan?{' '}
        <a href="#" className="text-purple-600 hover:text-purple-700">
          Get in touch
        </a>
      </p>
    </div>
  );
};

