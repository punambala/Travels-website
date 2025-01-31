import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Loader } from 'lucide-react';
import { Location } from '../../types';

interface Props {
  label: string;
  value: Location | null;
  onChange: (location: Location) => void;
  type: 'airport' | 'city' | 'hotel';
}

const mockLocations: Location[] = [
  { id: '1', city: 'New York', country: 'USA', airport: 'JFK', code: 'JFK' },
  { id: '2', city: 'London', country: 'UK', airport: 'Heathrow', code: 'LHR' },
  { id: '3', city: 'Paris', country: 'France', airport: 'Charles de Gaulle', code: 'CDG' },
];

export default function LocationInput({ label, value, onChange, type }: Props) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchLocations = (searchQuery: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filtered = mockLocations.filter(
        location =>
          location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.airport?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
      setIsLoading(false);
    }, 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setIsOpen(true);
    if (newQuery.length >= 2) {
      searchLocations(newQuery);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (location: Location) => {
    onChange(location);
    setQuery(location.city + (location.airport ? ` (${location.code})` : ''));
    setIsOpen(false);
  };

  return (
    <div ref={inputRef} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder={`Enter ${type === 'airport' ? 'airport or city' : 'location'}`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              <Loader className="animate-spin inline-block mr-2" size={20} />
              Searching...
            </div>
          ) : suggestions.length > 0 ? (
            <ul className="max-h-60 overflow-auto">
              {suggestions.map((location) => (
                <li
                  key={location.id}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleSelect(location)}
                >
                  <div className="font-medium">{location.city}</div>
                  <div className="text-sm text-gray-500">
                    {location.airport ? `${location.airport} (${location.code})` : location.country}
                  </div>
                </li>
              ))}
            </ul>
          ) : query.length >= 2 ? (
            <div className="p-4 text-center text-gray-500">No results found</div>
          ) : null}
        </div>
      )}
    </div>
  );
}