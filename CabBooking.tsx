import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Car } from 'lucide-react';
import LocationInput from '../search/LocationInput';
import DatePicker from '../search/DatePicker';

const cabTypes = [
  { id: 'economy', name: 'Economy', price: '1x', time: '25-30 min' },
  { id: 'premium', name: 'Premium', price: '1.5x', time: '20-25 min' },
  { id: 'luxury', name: 'Luxury', price: '2x', time: '15-20 min' },
];

export default function CabBooking() {
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedCab, setSelectedCab] = useState('economy');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <LocationInput
            label="Pickup Location"
            value={pickup}
            onChange={setPickup}
            type="city"
          />
          <LocationInput
            label="Dropoff Location"
            value={dropoff}
            onChange={setDropoff}
            type="city"
          />
          <DatePicker
            label="Date"
            value={date}
            onChange={setDate}
          />
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Select Car Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cabTypes.map((cab) => (
              <div
                key={cab.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedCab === cab.id
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'hover:border-gray-300'
                }`}
                onClick={() => setSelectedCab(cab.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{cab.name}</span>
                  <Car size={24} className="text-gray-600" />
                </div>
                <div className="text-sm text-gray-600">
                  <div>Price: {cab.price}</div>
                  <div>ETA: {cab.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Book Now
        </button>
      </div>

      {/* Fare Estimate */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg mb-4">Fare Estimate</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Base Fare</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Distance (5 km)</span>
            <span>$8.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time Fare</span>
            <span>$5.00</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Total Estimate</span>
              <span>$23.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}