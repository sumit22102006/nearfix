import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Star, Shield, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/services?query=${searchQuery}&location=${location}`);
  };

  const categories = [
    { name: 'Electrician', icon: <Briefcase className="w-6 h-6" />, count: '120+ Providers' },
    { name: 'Plumber', icon: <Briefcase className="w-6 h-6" />, count: '85+ Providers' },
    { name: 'Cleaner', icon: <Briefcase className="w-6 h-6" />, count: '200+ Providers' },
    { name: 'Tutor', icon: <Briefcase className="w-6 h-6" />, count: '150+ Providers' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Trusted Local Services <br /> in Minutes
          </h1>
          <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Book top-rated electricians, plumbers, cleaners, and more. <br />
            Verified professionals at your doorstep.
          </p>

          {/* Search Bar UI */}
          <form 
            onSubmit={handleSearch}
            className="bg-white rounded-lg shadow-2xl p-2 max-w-4xl mx-auto flex flex-col md:flex-row gap-2"
          >
            <div className="flex-grow flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200">
              <Search className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="What service do you need?" 
                className="w-full py-3 outline-none text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-grow flex items-center px-4">
              <MapPin className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="Your location" 
                className="w-full py-3 outline-none text-gray-800"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="btn btn-primary px-8 text-white">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-base-200 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => navigate(`/services?category=${cat.name}`)}
              >
                <div className="card-body items-center text-center">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold">{cat.name}</h3>
                  <p className="text-gray-500">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-green-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Verified Providers</h4>
              <p className="text-gray-600">Every pro on NearFix goes through a rigorous background check.</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Quality Guaranteed</h4>
              <p className="text-gray-600">We stand behind the quality of work from our top-rated pros.</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-purple-500 mb-4" />
              <h4 className="text-xl font-bold mb-2">Instant Booking</h4>
              <p className="text-gray-600">Choose your pro and get confirmed in seconds.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
