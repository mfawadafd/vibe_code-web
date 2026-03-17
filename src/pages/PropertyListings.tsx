import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, SlidersHorizontal, ChevronDown } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { properties, filterProperties } from '../data/properties';

const PropertyListings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Get initial filters from URL
  const initialFilters = {
    location: searchParams.get('location') || '',
    propertyType: searchParams.get('type') || 'all',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    bedrooms: searchParams.get('bedrooms') || '',
  };

  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    const filtered = filterProperties(properties, {
      location: initialFilters.location,
      propertyType: initialFilters.propertyType,
      minPrice: initialFilters.minPrice ? parseInt(initialFilters.minPrice) : undefined,
      maxPrice: initialFilters.maxPrice ? parseInt(initialFilters.maxPrice) : undefined,
      bedrooms: initialFilters.bedrooms ? parseInt(initialFilters.bedrooms) : undefined,
    });
    setFilteredProperties(filtered);
  }, [searchParams]);

  const handleSearch = (filters: any) => {
    const params = new URLSearchParams();
    if (filters.location) params.set('location', filters.location);
    if (filters.propertyType && filters.propertyType !== 'all') params.set('type', filters.propertyType);
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.bedrooms) params.set('bedrooms', filters.bedrooms);
    setSearchParams(params);
  };

  const handleSort = (value: string) => {
    setSortBy(value);
    let sorted = [...filteredProperties];
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.yearBuilt - a.yearBuilt);
        break;
      case 'bedrooms':
        sorted.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
    }
    setFilteredProperties(sorted);
  };

  const priceRanges = [
    { label: 'Under $1M', min: 0, max: 1000000, count: properties.filter(p => p.price < 1000000).length },
    { label: '$1M - $2M', min: 1000000, max: 2000000, count: properties.filter(p => p.price >= 1000000 && p.price < 2000000).length },
    { label: '$2M - $3M', min: 2000000, max: 3000000, count: properties.filter(p => p.price >= 2000000 && p.price < 3000000).length },
    { label: '$3M+', min: 3000000, max: Infinity, count: properties.filter(p => p.price >= 3000000).length },
  ];

  const propertyTypes = [
    { label: 'Houses', value: 'house', count: properties.filter(p => p.propertyType === 'house').length },
    { label: 'Apartments', value: 'apartment', count: properties.filter(p => p.propertyType === 'apartment').length },
    { label: 'Villas', value: 'villa', count: properties.filter(p => p.propertyType === 'villa').length },
    { label: 'Condos', value: 'condo', count: properties.filter(p => p.propertyType === 'condo').length },
    { label: 'Lofts', value: 'loft', count: properties.filter(p => p.propertyType === 'loft').length },
  ];

  const bedroomOptions = [
    { label: '1+', value: 1, count: properties.filter(p => p.bedrooms >= 1).length },
    { label: '2+', value: 2, count: properties.filter(p => p.bedrooms >= 2).length },
    { label: '3+', value: 3, count: properties.filter(p => p.bedrooms >= 3).length },
    { label: '4+', value: 4, count: properties.filter(p => p.bedrooms >= 4).length },
    { label: '5+', value: 5, count: properties.filter(p => p.bedrooms >= 5).length },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-display text-slate-900 mb-4">
            Property Listings
          </h1>
          <p className="text-slate-500 max-w-2xl">
            Browse our exclusive collection of premium properties. Use the filters below 
            to find your perfect home.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <h3 className="font-display text-slate-900 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => handleSearch({ ...initialFilters, minPrice: range.min, maxPrice: range.max })}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        initialFilters.minPrice === String(range.min)
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <span>{range.label}</span>
                      <span className="text-sm text-slate-400">({range.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div>
                <h3 className="font-display text-slate-900 mb-4">Property Type</h3>
                <div className="space-y-2">
                  {propertyTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => handleSearch({ ...initialFilters, propertyType: type.value })}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                        initialFilters.propertyType === type.value
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <span>{type.label}</span>
                      <span className="text-sm text-slate-400">({type.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div>
                <h3 className="font-display text-slate-900 mb-4">Bedrooms</h3>
                <div className="flex flex-wrap gap-2">
                  {bedroomOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSearch({ ...initialFilters, bedrooms: option.value })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        initialFilters.bedrooms === String(option.value)
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchParams(new URLSearchParams());
                  setFilteredProperties(properties);
                }}
                className="w-full py-3 border border-slate-200 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-slate-600"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-slate-500">
                  Showing <span className="font-medium text-slate-900">{filteredProperties.length}</span> properties
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-2 text-slate-600 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="bedrooms">Most Bedrooms</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Properties Grid */}
            {filteredProperties.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    featured={viewMode === 'list'}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SlidersHorizontal className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-display text-slate-900 mb-2">No properties found</h3>
                <p className="text-slate-500">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
