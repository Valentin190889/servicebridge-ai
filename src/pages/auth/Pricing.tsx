import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan } from '../../types/subscription';
import { useAuth } from '../../contexts/AuthContext';

const plans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    tier: 'basic',
    price: 29,
    interval: 'month',
    features: [
      'AI Assistant Access',
      'Basic Knowledge Hub',
      'Community Access',
      'Email Support'
    ]
  },
  {
    id: 'pro',
    name: 'Professional',
    tier: 'pro',
    price: 79,
    interval: 'month',
    features: [
      'Everything in Basic',
      'Advanced AI Features',
      'Priority Support',
      'Expert Network Access',
      'Custom Integrations'
    ],
    isPopular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tier: 'enterprise',
    price: 299,
    interval: 'month',
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Custom AI Model Training',
      'SLA Guarantee',
      'On-premise Deployment',
      'Advanced Analytics'
    ]
  }
];

export function Pricing() {
  const { isAuthenticated, login } = useAuth();

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    if (!isAuthenticated) {
      await login();
    }
    // Handle subscription logic
  };

  return (
    <div className="min-h-screen bg-dark-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
            Start your 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg shadow-sm divide-y divide-dark-700 ${
                plan.isPopular ? 'border-2 border-primary-500' : 'border border-dark-700'
              } bg-dark-800`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                {plan.isPopular && (
                  <p className="mt-1 text-sm text-primary-400">Most popular</p>
                )}
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                  <span className="text-base font-medium text-gray-400">/month</span>
                </p>
                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`mt-8 w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white ${
                    plan.isPopular
                      ? 'bg-primary-600 hover:bg-primary-700'
                      : 'bg-dark-700 hover:bg-dark-600'
                  }`}
                >
                  Start free trial
                </button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-white">What's included:</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="h-5 w-5 text-primary-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}