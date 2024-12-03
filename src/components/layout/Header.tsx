import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, User, HelpCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-blue-600" />
          <span className="font-semibold text-xl">Rest Space</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link to="/book" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <Calendar className="w-5 h-5" />
            <span>Book</span>
          </Link>
          <Link to="/account" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <User className="w-5 h-5" />
            <span>Account</span>
          </Link>
          <Link to="/help" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </Link>
          <Button variant="primary" size="sm">Sign In</Button>
        </div>
      </nav>
    </header>
  );
};