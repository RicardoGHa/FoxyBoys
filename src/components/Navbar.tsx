import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <Cpu className="h-8 w-8 mr-2 text-purple-400" />
                <span className="font-semibold text-white text-lg">FoxyBoys</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="py-4 px-2 text-gray-300 hover:text-purple-300 transition duration-300">Home</Link>
            <Link to="/services" className="py-4 px-2 text-gray-300 hover:text-purple-300 transition duration-300">Services</Link>
            <Link to="/pricing" className="py-4 px-2 text-gray-300 hover:text-purple-300 transition duration-300">Pricing</Link>
            <Link to="/login" className="py-2 px-2 font-medium text-gray-900 bg-purple-400 rounded hover:bg-purple-300 transition duration-300">Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;