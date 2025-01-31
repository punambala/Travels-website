import React, { useState } from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';
import { SearchFilters } from '../../types';
import LocationInput from '../search/LocationInput';
import DatePicker from '../search/DatePicker';

const initialFilters: SearchFilters = {
  priceRange: [0, 1000],
  rating: 0,
  amenities: [],
  propertyType: [],
};

export default function HotelSearch() {
  const [location, setLocation] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const amenities = [
    'Wi-Fi',
    'Pool',
    'Parking',
    'Restaurant',
    'Fitness Center',
    'Spa',
    'Room Service',
    'Bar',
  ];

  const propertyTypes = [
    'Hotel',
    'Resort',
    'Apartment',
    'Villa',
    'Hostel',
    'Guesthouse',
  ];

  const toggleAmenity = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const togglePropertyType = (type: string) => {
    setFilters(prev => ({
      ...prev,
      propertyType: prev.propertyType.includes(type)
        ? prev.propertyType.filter(t => t !== type)
        : [...prev.propertyType, type],
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1 space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h3 className="font-semibold mb-4">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters(prev => ({
                ...prev,
                priceRange: [0, parseInt(e.target.value)],
              }))
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={filters.rating === rating}
                  onChange={() =>
                    setFilters(prev => ({ ...prev, rating }))
                  }
                  className="text-indigo-600"
                />
                <span>{rating}+ Stars</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Amenities</h3>
          <div className="space-y-2">
            {amenities.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                  className="text-indigo-600"
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Property Type</h3>
          <div className="space-y-2">
            {propertyTypes.map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes(type)}
                  onChange={() => togglePropertyType(type)}
                  className="text-indigo-600"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results Area */}
      <div className="lg:col-span-3 space-y-6">
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1">
              <LocationInput
                label="Destination"
                value={location}
                onChange={setLocation}
                type="city"
              />
            </div>
            <div className="col-span-1">
              <DatePicker
                label="Check-in"
                value={checkIn}
                onChange={setCheckIn}
              />
            </div>
            <div className="col-span-1">
              <DatePicker
                label="Check-out"
                value={checkOut}
                onChange={setCheckOut}
                minDate={checkIn}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rooms & Guests
              </label>
              <button className="w-full flex items-center justify-between px-4 py-2 border rounded-lg">
                <Users className="text-gray-400" size={20} />
                <span>{rooms} Room, {guests} Guests</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Search Hotels
            </button>
          </div>
        </div>

        {/* Results Placeholder */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm animate-pulse">
              <div className="flex space-x-4">
                <div className="w-48 h-32 bg-gray-200 rounded"></div>
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="w-32 space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}