import React, { useState } from 'react';
import { Plane, Train, Building2, Car, Package, Calendar, MapPin, Clock, Users } from 'lucide-react';
import LocationInput from './LocationInput';
import DatePicker from './DatePicker';
import HotelSearch from '../hotels/HotelSearch';
import CabBooking from '../cabs/CabBooking';

type SearchCategory = 'hotels' | 'flights' | 'trains' | 'cabs' | 'packages';

interface SearchTabsProps {
  onDestinationSelect?: (destination: string) => void;
}

export default function SearchTabs({ onDestinationSelect }: SearchTabsProps) {
  const [activeTab, setActiveTab] = useState<SearchCategory>('hotels');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTabChange = (tab: SearchCategory) => {
    setActiveTab(tab);
    setError(null);
    setSearchQuery('');
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError('Please enter a search term');
      return;
    }
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Handle search results
    } catch (err) {
      setError('An error occurred while searching. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'hotels', icon: Building2, label: 'Hotels' },
          { id: 'flights', icon: Plane, label: 'Flights' },
          { id: 'trains', icon: Train, label: 'Trains' },
          { id: 'cabs', icon: Car, label: 'Cabs' },
          { id: 'packages', icon: Package, label: 'Packages' }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => handleTabChange(id as SearchCategory)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
              activeTab === id
                ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Search Content */}
      <div className="space-y-6">
        {activeTab === 'hotels' && <HotelSearch />}
        {activeTab === 'cabs' && <CabBooking />}
        {(activeTab === 'flights' || activeTab === 'trains' || activeTab === 'packages') && (
          <div className="space-y-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <LocationInput
                  label="From"
                  value={null}
                  onChange={() => {}}
                  type={activeTab === 'flights' ? 'airport' : 'city'}
                />
                <LocationInput
                  label="To"
                  value={null}
                  onChange={() => {}}
                  type={activeTab === 'flights' ? 'airport' : 'city'}
                />
                <DatePicker
                  label="Departure"
                  value=""
                  onChange={() => {}}
                />
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Travelers & Class
                  </label>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-4 py-2 border rounded-lg"
                  >
                    <Users className="text-gray-400" size={20} />
                    <span>2 Adults, Economy</span>
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-indigo-600 text-white py-3 rounded-lg transition-colors ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700'
                }`}
              >
                {isLoading ? 'Searching...' : `Search ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Featured Offers Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Featured Offers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Summer Special',
              description: 'Get up to 30% off on beach resorts',
              image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
              category: 'Hotels',
              discount: '30% OFF',
            },
            {
              title: 'Family Package',
              description: 'Kids stay free at selected hotels',
              image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1',
              category: 'Packages',
              discount: 'Kids Free',
            },
            {
              title: 'Weekend Getaway',
              description: 'Special rates for weekend stays',
              image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
              category: 'Hotels',
              discount: '25% OFF',
            },
            {
              title: 'Flight Deal',
              description: 'Domestic flights starting at $49',
              image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
              category: 'Flights',
              discount: 'From $49',
            },
          ].map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
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
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{offer.title}</h4>
                <p className="text-gray-600 text-sm">{offer.description}</p>
                <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}