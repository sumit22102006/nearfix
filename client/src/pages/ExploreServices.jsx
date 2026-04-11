import React, { useState } from 'react';
import { Search, MapPin, SlidersHorizontal, Star, Zap, Droplets, SprayCan, GraduationCap, Hammer, Paintbrush, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const allServices = [
  { id: 1, name: 'Ravi Electricals', category: 'Electrician', rating: 4.8, reviews: 132, price: '₹299/hr', location: 'Mumbai', verified: true },
  { id: 2, name: 'AquaFix Plumbing', category: 'Plumber', rating: 4.6, reviews: 89, price: '₹249/hr', location: 'Delhi', verified: true },
  { id: 3, name: 'SparkClean Services', category: 'Cleaner', rating: 4.9, reviews: 210, price: '₹199/hr', location: 'Bangalore', verified: true },
  { id: 4, name: 'Bright Minds Tutors', category: 'Tutor', rating: 4.7, reviews: 155, price: '₹399/hr', location: 'Mumbai', verified: false },
  { id: 5, name: 'WoodCraft Carpentry', category: 'Carpenter', rating: 4.5, reviews: 67, price: '₹349/hr', location: 'Chennai', verified: true },
  { id: 6, name: 'ColorPro Painters', category: 'Painter', rating: 4.6, reviews: 93, price: '₹279/hr', location: 'Hyderabad', verified: true },
  { id: 7, name: 'Quick Shock Electricals', category: 'Electrician', rating: 4.3, reviews: 44, price: '₹250/hr', location: 'Pune', verified: false },
  { id: 8, name: 'PipeKing Plumbing', category: 'Plumber', rating: 4.8, reviews: 120, price: '₹299/hr', location: 'Mumbai', verified: true },
  { id: 9, name: 'HomeSpark Cleaners', category: 'Cleaner', rating: 4.4, reviews: 78, price: '₹149/hr', location: 'Delhi', verified: true },
];

const categories = [
  { name: 'All', icon: SlidersHorizontal },
  { name: 'Electrician', icon: Zap },
  { name: 'Plumber', icon: Droplets },
  { name: 'Cleaner', icon: SprayCan },
  { name: 'Tutor', icon: GraduationCap },
  { name: 'Carpenter', icon: Hammer },
  { name: 'Painter', icon: Paintbrush },
];

const categoryColors = {
  Electrician: 'bg-yellow-100 text-yellow-700',
  Plumber: 'bg-blue-100 text-blue-700',
  Cleaner: 'bg-green-100 text-green-700',
  Tutor: 'bg-purple-100 text-purple-700',
  Carpenter: 'bg-orange-100 text-orange-700',
  Painter: 'bg-pink-100 text-pink-700',
};

const StarRating = ({ rating }) => (
  <span className="flex items-center gap-1">
    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
    <span className="font-semibold text-gray-800 text-sm">{rating}</span>
  </span>
);

const ExploreServices = () => {
  const [searchParams] = useSearchParams();
  
  const initialQuery = searchParams.get('query') || '';
  const initialLocation = searchParams.get('location') || '';
  const initialCategory = searchParams.get('category') || 'All';

  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filtered = allServices.filter((s) => {
    const matchCat = selectedCategory === 'All' || s.category === selectedCategory;
    const matchQuery = s.name.toLowerCase().includes(query.toLowerCase()) || s.category.toLowerCase().includes(query.toLowerCase());
    const matchLoc = location === '' || s.location.toLowerCase().includes(location.toLowerCase());
    return matchCat && matchQuery && matchLoc;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Explore Services</h1>
          <p className="text-blue-200 mb-6">Find trusted professionals near you</p>

          {/* Search Row */}
          <div className="bg-white rounded-2xl p-2 flex flex-col md:flex-row gap-2 shadow-xl max-w-3xl">
            <div className="flex-grow flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-200">
              <Search className="text-gray-400 w-4 h-4 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search by service or provider name"
                className="w-full py-2.5 outline-none text-gray-800 placeholder-gray-400 text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button onClick={() => setQuery('')}>
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <div className="flex-grow flex items-center px-4">
              <MapPin className="text-gray-400 w-4 h-4 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Location (e.g. Mumbai)"
                className="w-full py-2.5 outline-none text-gray-800 placeholder-gray-400 text-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              {location && (
                <button onClick={() => setLocation('')}>
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-2.5 rounded-xl text-sm whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="bg-white border-b border-gray-100 px-4 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-5xl flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setSelectedCategory(name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                selectedCategory === name
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <p className="text-sm text-gray-500 mb-5">
          Showing <span className="font-semibold text-gray-800">{filtered.length}</span> results
          {selectedCategory !== 'All' && <> for <span className="font-semibold text-blue-600">{selectedCategory}</span></>}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700">No providers found</h3>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or selecting a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-5 flex flex-col gap-3"
              >
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg font-bold uppercase">
                    {service.name[0]}
                  </div>
                  {service.verified && (
                    <span className="bg-green-50 text-green-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100">
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Name & Category */}
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{service.name}</h3>
                  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mt-1 ${categoryColors[service.category]}`}>
                    {service.category}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm">
                  <StarRating rating={service.rating} />
                  <span className="text-gray-400 text-xs">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <MapPin className="w-3.5 h-3.5" /> {service.location}
                  </span>
                  <span className="text-blue-600 font-bold text-sm">{service.price}</span>
                </div>

                {/* Action */}
                <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-2.5 rounded-xl text-sm">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreServices;
