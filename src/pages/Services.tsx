import React from 'react';
import { Cpu, Cloud, Shield, Database, Zap, Users } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'AI Model Deployment',
      description: 'Deploy your AI models with ease and efficiency.',
      icon: Cpu,
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for your AI needs.',
      icon: Cloud,
    },
    {
      title: 'Security & Compliance',
      description:
        'Ensure your AI infrastructure meets the highest security standards.',
      icon: Shield,
    },
    {
      title: 'Data Management',
      description: 'Efficient handling and storage of large-scale AI datasets.',
      icon: Database,
    },
    {
      title: 'Performance Optimization',
      description:
        'Boost your AI model performance with our optimization techniques.',
      icon: Zap,
    },
    {
      title: 'AI Consulting',
      description: 'Expert advice on AI strategy and implementation.',
      icon: Users,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-400">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300"
          >
            <service.icon className="h-12 w-12 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-100">
              {service.title}
            </h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
