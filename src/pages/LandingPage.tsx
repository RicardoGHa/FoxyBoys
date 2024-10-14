import React from 'react';
import { ArrowRight, Cpu, Cloud, Shield } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <main className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to FoxyBoys</h1>
        <p className="text-xl mb-8">Empowering Your Business with Cutting-Edge AI Infrastructure</p>
        <a href="/services" className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Explore Our Services
          <ArrowRight className="ml-2" />
        </a>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Cpu className="h-12 w-12 mb-4 mx-auto text-purple-400" />
            <h2 className="text-xl font-semibold mb-2">AI Processing</h2>
            <p className="text-gray-300">State-of-the-art AI processing capabilities to handle complex computations.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Cloud className="h-12 w-12 mb-4 mx-auto text-purple-400" />
            <h2 className="text-xl font-semibold mb-2">Cloud Integration</h2>
            <p className="text-gray-300">Seamless integration with leading cloud platforms for scalable AI solutions.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 mb-4 mx-auto text-purple-400" />
            <h2 className="text-xl font-semibold mb-2">Secure Infrastructure</h2>
            <p className="text-gray-300">Robust security measures to protect your AI models and data.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;