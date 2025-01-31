import React, { useState } from 'react';
import { Plane, Train, Building2, Home, Menu, User, X } from 'lucide-react';
import AuthModal from './auth/AuthModal';

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'flights' | 'trains' | 'hotels' | 'home'>('home');

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthModalOpen(true);
    setIsProfileOpen(false);
  };

  const handleNavigation = (section: 'flights' | 'trains' | 'hotels' | 'home') => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              TravelEase
            </button>
          </div>
          
          <nav className={`
            md:flex md:items-center md:space-x-8
            ${isMobileMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-white shadow-lg p-4 space-y-4 md:space-y-0 z-50 border-t' 
              : 'hidden md:flex'
            }
          `}>
            <button
              onClick={() => handleNavigation('flights')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                activeSection === 'flights'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Plane size={20} />
              <span>Flights</span>
            </button>

            <button
              onClick={() => handleNavigation('trains')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                activeSection === 'trains'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Train size={20} />
              <span>Trains</span>
            </button>

            <div className="relative group">
              <button
                onClick={() => handleNavigation('hotels')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  activeSection === 'hotels'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Building2 size={20} />
                <span>Hotels</span>
              </button>

              {/* Hotel submenu */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <button
                  onClick={() => handleNavigation('home')}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Home size={18} />
                  <span>Main Page</span>
                </button>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
              >
                <User size={20} />
                <span className="hidden md:inline">Account</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden transition-transform duration-200 ease-in-out transform hover:text-indigo-600"
              style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
        onSwitchType={(type) => setAuthType(type)}
      />
    </header>
  );
}