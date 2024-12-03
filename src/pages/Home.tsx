import React from 'react';
import { ArrowRight, Coffee, Users, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Peaceful study space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Find Your Perfect Rest Space</h1>
            <p className="text-xl mb-8">
              Book comfortable and quiet spaces on campus to recharge, study, or collaborate.
              Available 24/7 for all university students.
            </p>
            <Button size="lg" className="flex items-center space-x-2">
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Spaces</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Coffee className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Single Pods</h3>
              <p className="text-gray-600 mb-4">
                Private spaces perfect for individual study or quick power naps between classes.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Group Zones</h3>
              <p className="text-gray-600 mb-4">
                Collaborative areas designed for group study sessions and team meetings.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quiet Study</h3>
              <p className="text-gray-600 mb-4">
                Silent spaces for focused work and deep concentration.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};