import React from 'react';
import { Calendar } from 'lucide-react';

interface Props {
  label: string;
  value: string;
  onChange: (date: string) => void;
  minDate?: string;
}

export default function DatePicker({ label, value, onChange, minDate }: Props) {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="date"
          value={value}
          min={minDate || today}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}