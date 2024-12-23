import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign } from 'lucide-react';

const PublicHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PayrollPro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-gray-900">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
            <Link
              to="/login"
              className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PublicHeader;