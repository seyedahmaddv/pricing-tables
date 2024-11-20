import React from 'react';
import "./App.css";

interface PlanType {
  name: string;
  price: number;
  buttonText: string;
  includesPremium: boolean;
  isPopular?: boolean;
}

const PricingCard: React.FC<{ plan: PlanType }> = ({ plan }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {plan.isPopular && (
        <div className="text-sm font-semibold text-blue-600 mb-2">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-500">/per user, per month</span>
      </div>
      <ul className="mt-6 space-y-4">
        <li>10k Visitors/mo</li>
        <li>10 Funnels, 50 Pages</li>
        <li>Unlimited Transactions</li>
        <li>Analytics</li>
        <li>Integrations</li>
        <li>Audience Data</li>
        <li>Premium templates</li>
        <li>White Labelling</li>
      </ul>
      <button className="mt-8 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        {plan.buttonText}
      </button>
    </div>
  );
};

export default function PricingTable() {
  const plans: PlanType[] = [
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
    
    <div className="py-12 bg-gray-50">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Price</h2>
        <h3 className="text-4xl font-bold mt-2">Price Plans</h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the plan that suits your needs best and enjoy the creative
          process of brainstorming the new project of yours.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
      <div className="text-center mt-12">
        <span>Interested in a custom plan? </span>
        <a href="https://www.linkedin.com/in/seyedahmaddv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800">
          Get in touch
        </a>
      </div>
      <hr className="border-t-2 border-gray-200 my-8" />
    </div>
  );
};

