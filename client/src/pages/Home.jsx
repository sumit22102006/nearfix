import React, { useState } from 'react';
import { Search, MapPin, Zap, Droplets, SprayCan, GraduationCap, Hammer, Paintbrush, Shield, Star, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Electrician', icon: Zap, count: '120+ Providers', color: 'bg-yellow-50 text-yellow-600', hover: 'group-hover:bg-yellow-600' },
  { name: 'Plumber', icon: Droplets, count: '85+ Providers', color: 'bg-blue-50 text-blue-600', hover: 'group-hover:bg-blue-600' },
  { name: 'Cleaner', icon: SprayCan, count: '200+ Providers', color: 'bg-green-50 text-green-600', hover: 'group-hover:bg-green-600' },
  { name: 'Tutor', icon: GraduationCap, count: '150+ Providers', color: 'bg-purple-50 text-purple-600', hover: 'group-hover:bg-purple-600' },
  { name: 'Carpenter', icon: Hammer, count: '60+ Providers', color: 'bg-orange-50 text-orange-600', hover: 'group-hover:bg-orange-600' },
  { name: 'Painter', icon: Paintbrush, count: '90+ Providers', color: 'bg-pink-50 text-pink-600', hover: 'group-hover:bg-pink-600' },
];

const steps = [
  { num: '01', title: 'Search Your Service', desc: 'Enter the service you need and your location to find nearby professionals.' },
  { num: '02', title: 'Compare & Choose', desc: 'Browse reviews, ratings, and pricing to pick the best professional for the job.' },
  { num: '03', title: 'Book Instantly', desc: 'Confirm your booking in seconds and get a doorstep appointment.' },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/services?query=${searchQuery}&location=${location}`);
  };

  return (
    <div className="flex flex-col">

      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-24 px-4 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="relative container mx-auto max-w-5xl text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            🏆 India's Trusted Service Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Find Trusted Local Services <br className="hidden md:block" />
            <span className="text-yellow-300">Near You</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Book top-rated electricians, plumbers, cleaners, and more. Verified professionals at your doorstep in minutes.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-2xl p-2 max-w-4xl mx-auto flex flex-col md:flex-row gap-2"
          >
            <div className="flex-grow flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200">
              <Search className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="w-full py-3 outline-none text-gray-800 placeholder-gray-400 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-grow flex items-center px-4">
              <MapPin className="text-gray-400 w-5 h-5 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Your location (e.g. Mumbai)"
                className="w-full py-3 outline-none text-gray-800 placeholder-gray-400 text-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-8 py-3 rounded-xl whitespace-nowrap"
            >
              Search
            </button>
          </form>

          {/* Quick tags */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {['Electrician', 'Plumber', 'Cleaner', 'Tutor'].map((tag) => (
              <button
                key={tag}
                onClick={() => navigate(`/services?category=${tag}`)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs px-4 py-1.5 rounded-full transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <section className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-green-500 shrink-0" />
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">Verified Providers</p>
              <p className="text-gray-500 text-xs">Background checked professionals</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-500 shrink-0" />
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">Quality Guaranteed</p>
              <p className="text-gray-500 text-xs">Top-rated with real reviews</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-8 h-8 text-purple-500 shrink-0" />
            <div className="text-left">
              <p className="font-bold text-gray-900 text-sm">Instant Booking</p>
              <p className="text-gray-500 text-xs">Confirmed in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Popular Categories ── */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Explore Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Browse from hundreds of verified professionals across all major service categories.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group p-5 flex flex-col items-center text-center"
                  onClick={() => navigate(`/services?category=${cat.name}`)}
                >
                  <div className={`${cat.color} ${cat.hover} group-hover:text-white transition-all p-3 rounded-xl mb-3`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{cat.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{cat.count}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-8 py-3 rounded-xl"
            >
              View All Services <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">How NearFix Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <div key={i} className="text-center flex flex-col items-center relative">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white text-xl font-extrabold flex items-center justify-center mb-5 shadow-lg shadow-blue-200">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-14 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold mb-3">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 text-base max-w-xl mx-auto">
            Join thousands of happy customers who trust NearFix for reliable local services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/services')}
              className="bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" /> Find a Service
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="border border-white/40 text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" /> Become a Provider
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
