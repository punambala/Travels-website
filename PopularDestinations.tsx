import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
    description: 'The city of love and lights',
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1000',
    description: 'A blend of modern and traditional',
  },
  {
    id: 3,
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000',
    description: 'The city that never sleeps',
  },
  {
    id: 4,
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000',
    description: 'Luxury and innovation combined',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                <p className="text-gray-600 mt-1">{destination.description}</p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}