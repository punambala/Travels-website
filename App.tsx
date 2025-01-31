import React, { useState, Suspense } from 'react';
import Header from './components/Header';
import SearchTabs from './components/search/SearchTabs';
import FeaturedOffers from './components/FeaturedOffers';
import PopularDestinations from './components/PopularDestinations';

function App() {
  const handleDestinationSelect = (destination: string) => {
    // Handle destination selection
    console.log('Selected destination:', destination);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Journey Begins Here
          </h1>
          <p className="text-xl text-white mb-12">
            Discover the world with our best travel deals
          </p>

          {/* Search Tabs */}
          <SearchTabs onDestinationSelect={handleDestinationSelect} />
        </div>
      </section>

      {/* Featured Offers Section */}
      <FeaturedOffers />

      {/* Popular Destinations Section */}
      <PopularDestinations />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Best Price Guarantee',
                description: 'Find a lower price? We will match it and give you an extra discount.',
              },
              {
                title: 'Easy Booking Process',
                description: 'Book your perfect trip in just a few clicks with our intuitive platform.',
              },
              {
                title: '24/7 Customer Support',
                description: 'Our dedicated team is here to help you anytime, anywhere.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Making travel simple and accessible for everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Search Flights</a></li>
                <li><a href="#" className="hover:text-white">Book Hotels</a></li>
                <li><a href="#" className="hover:text-white">Train Tickets</a></li>
                <li><a href="#" className="hover:text-white">Cab Booking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the best travel deals.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 TravelEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;