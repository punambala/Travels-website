import React, { useState } from 'react';
import { Plus, Minus, Plane, Calendar, Users } from 'lucide-react';
import { Location } from '../../types';
import LocationInput from './LocationInput';
import DatePicker from './DatePicker';

interface City {
  from: Location | null;
  to: Location | null;
  date: string;
}

export default function MultiCitySearch() {
  const [cities, setCities] = useState<City[]>([
    { from: null, to: null, date: '' },
    { from: null, to: null, date: '' },
  ]);
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });

  const addCity = () => {
    if (cities.length < 5) {
      setCities([...cities, { from: null, to: null, date: '' }]);
    }
  };

  const removeCity = (index: number) => {
    if (cities.length > 2) {
      const newCities = cities.filter((_, i) => i !== index);
      setCities(newCities);
    }
  };

  const updateCity = (index: number, field: keyof City, value: any) => {
    const newCities = [...cities];
    newCities[index] = { ...newCities[index], [field]: value };
    setCities(newCities);
  };

  return (
    <div className="space-y-4">
      {cities.map((city, index) => (
        <div key={index} className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex-1 min-w-[200px]">
            <LocationInput
              label="From"
              value={city.from}
              onChange={(location) => updateCity(index, 'from', location)}
              type="airport"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <LocationInput
              label="To"
              value={city.to}
              onChange={(location) => updateCity(index, 'to', location)}
              type="airport"
            />
          </div>
          <div className="w-[200px]">
            <DatePicker
              label="Date"
              value={city.date}
              onChange={(date) => updateCity(index, 'date', date)}
            />
          </div>
          {index >= 2 && (
            <button
              onClick={() => removeCity(index)}
              className="self-end p-2 text-red-600 hover:text-red-700"
            >
              <Minus size={20} />
            </button>
          )}
        </div>
      ))}

      {cities.length < 5 && (
        <button
          onClick={addCity}
          className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700"
        >
          <Plus size={20} />
          Add City
        </button>
      )}

      <div className="flex flex-wrap gap-4 mt-6">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Passengers
            </label>
            <button className="w-full flex items-center justify-between px-4 py-2 border rounded-lg text-left">
              <Users className="text-gray-400" size={20} />
              <span>
                {passengers.adults + passengers.children + passengers.infants} Passengers
              </span>
            </button>
          </div>
        </div>
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Search Flights
        </button>
      </div>
    </div>
  );
}