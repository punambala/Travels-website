import React from 'react';
import { Shield, Clock, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your payments and personal information are always protected',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Book your travel any time, day or night',
  },
  {
    icon: Headphones,
    title: 'Customer Support',
    description: 'Get help whenever you need it from our support team',
  },
  {
    icon: CreditCard,
    title: 'Best Prices',
    description: 'Find the best deals and exclusive offers',
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}