export interface SearchFilters {
  priceRange: [number, number];
  rating: number;
  amenities: string[];
  propertyType: string[];
}

export interface Location {
  id: string;
  city: string;
  country: string;
  airport?: string;
  code?: string;
}

export interface SearchHistory {
  id: string;
  type: 'flight' | 'train' | 'hotel' | 'cab';
  from?: Location;
  to?: Location;
  date: string;
  timestamp: number;
}

export interface UserPreferences {
  currency: string;
  language: string;
  seatPreference?: 'window' | 'aisle';
  mealPreference?: 'veg' | 'non-veg' | 'special';
  notifications: {
    email: boolean;
    sms: boolean;
    priceAlerts: boolean;
  };
}