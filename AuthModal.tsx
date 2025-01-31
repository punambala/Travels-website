import React, { useState } from 'react';
import { X, Mail, Lock, User, Eye, EyeOff, Facebook, Github } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onSwitchType: (type: 'login' | 'signup') => void;
}

export default function AuthModal({ isOpen, onClose, type, onSwitchType }: AuthModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isResetPassword, setIsResetPassword] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }
    if (type === 'signup') {
      if (!formData.name) {
        setError('Please enter your name');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      if (formData.password.length < 8) {
        setError('Password must be at least 8 characters long');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isResetPassword) {
        setSuccess('Password reset link has been sent to your email');
        return;
      }

      setSuccess(type === 'login' ? 'Successfully logged in!' : 'Account created successfully!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            {isResetPassword 
              ? 'Reset Password'
              : type === 'login' 
                ? 'Welcome Back' 
                : 'Create Account'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isResetPassword 
              ? 'Enter your email to receive a password reset link'
              : type === 'login'
                ? 'Sign in to your account'
                : 'Fill in your details to create an account'}
          </p>
        </div>

        {(error || success) && (
          <div className={`p-4 rounded-lg mb-4 ${
            error ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
          }`}>
            {error || success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isResetPassword && type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {!isResetPassword && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          )}

          {!isResetPassword && type === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          {!isResetPassword && type === 'login' && (
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setIsResetPassword(true)}
                className="text-sm text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {isResetPassword 
              ? 'Send Reset Link'
              : type === 'login' 
                ? 'Sign In' 
                : 'Create Account'}
          </button>

          {!isResetPassword && (
            <>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleSocialLogin('facebook')}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Facebook size={20} className="text-blue-600" />
                  <span className="ml-2">Facebook</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSocialLogin('github')}
                  className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Github size={20} />
                  <span className="ml-2">GitHub</span>
                </button>
              </div>
            </>
          )}
        </form>

        {!isResetPassword && (
          <div className="mt-4 text-center text-sm text-gray-600">
            {type === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    onSwitchType('signup');
                    setError('');
                    setSuccess('');
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => {
                    onSwitchType('login');
                    setError('');
                    setSuccess('');
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        )}

        {isResetPassword && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsResetPassword(false)}
              className="text-sm text-indigo-600 hover:text-indigo-700"
            >
              Back to {type === 'login' ? 'login' : 'signup'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}