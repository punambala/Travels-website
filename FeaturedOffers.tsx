import React from 'react';
import { Tag, Clock, Star, Users } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: 'Early Bird Special',
    description: 'Book your summer vacation early and save up to 30% on luxury resorts worldwide',
    discount: '30% OFF',
    validUntil: '2024-05-31',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000',
    price: 'From $299',
    rating: 4.8,
    reviews: 128,
    category: 'Hotels',
  },
  {
    id: 2,
    title: 'Weekend Getaway',
    description: 'Special hotel rates for weekend stays including breakfast and spa access',
    discount: '25% OFF',
    validUntil: '2024-04-30',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1000',
    price: 'From $199',
    rating: 4.6,
    reviews: 95,
    category: 'Packages',
  },
  {
    id: 3,
    title: 'Family Package',
    description: 'Kids stay and eat free at selected hotels plus complimentary airport transfers',
    discount: 'KIDS FREE',
    validUntil: '2024-06-30',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&q=80&w=1000',
    price: 'From $499',
    rating: 4.9,
    reviews: 216,
    category: 'Family',
  },
  {
    id: 4,
    title: 'Last Minute Deals',
    description: 'Incredible savings on last-minute flight and hotel bookings',
    discount: 'UP TO 40% OFF',
    validUntil: '2024-03-31',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1000',
    price: 'From $159',
    rating: 4.5,
    reviews: 73,
    category: 'Flights',
  },
];

export default function FeaturedOffers() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Offers</h2>
          <div className="flex space-x-2">
            {['All', 'Hotels', 'Flights', 'Packages', 'Family'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {offer.discount}
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded text-sm font-medium">
                  {offer.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{offer.title}</h3>
                  <p className="text-lg font-bold text-indigo-600">{offer.price}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="font-medium">{offer.rating}</span>
                    <span className="text-gray-500 text-sm">({offer.reviews})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-1" />
                    <span>Until {offer.validUntil}</span>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
}