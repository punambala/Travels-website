import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface SearchFormProps {
  type: 'flights' | 'trains' | 'hotels' | 'cabs';
}

export default function SearchForm({ type }: SearchFormProps) {
  const [searchType, setSearchType] = useState<'oneWay' | 'roundTrip'>('oneWay');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {(type === 'flights' || type === 'trains') && (
        <div className="flex space-x-4 mb-4">
          <button
            className={\`px-4 py-2 rounded-full \${
              searchType === 'oneWay'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }\`}
            onClick={() => setSearchType('oneWay')}
          >
            One Way
          </button>
          <button
            className={\`px-4 py-2 rounded-full \${
              searchType === 'roundTrip'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }\`}
            onClick={() => setSearchType('roundTrip')}
          >
            Round Trip
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter city"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter city"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {searchType === 'roundTrip' && (
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Return
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}