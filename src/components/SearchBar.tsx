import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, Bed } from 'lucide-react';

interface SearchFilters {
  location: string;
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
}

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
  variant?: 'hero' | 'compact';
}

const SearchBar = ({ onSearch, variant = 'compact' }: SearchBarProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  const isHero = variant === 'hero';

  const inputClasses = isHero
    ? 'bg-white/10 backdrop-blur-md border-white/20 text-black placeholder-black focus:bg-white/20'
    : 'bg-white border-slate-200 text-black placeholder-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200';

  const labelClasses = 'text-black';
  const iconClasses = 'text-black';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isHero
          ? 'bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6'
          : 'bg-white border border-slate-200 rounded-xl shadow-lg p-4'
      }`}
    >
      <div className={`grid gap-4 ${isHero ? 'md:grid-cols-5' : 'md:grid-cols-6'}`}>
        {/* Location */}
        <div className={isHero ? 'md:col-span-1' : 'md:col-span-2'}>
          <label className={`block text-sm font-medium mb-2 ${labelClasses}`}>
            Location
          </label>
          <div className="relative">
            <MapPin className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${iconClasses}`} />
            <input
              type="text"
              placeholder="City or ZIP"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all ${inputClasses}`}
            />
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${labelClasses}`}>
            Property Type
          </label>
          <div className="relative">
            <Home className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${iconClasses}`} />
            <select
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all appearance-none text-black ${inputClasses}`}
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="condo">Condo</option>
              <option value="loft">Loft</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${labelClasses}`}>
            Min Price
          </label>
          <div className="relative">
            <DollarSign className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${iconClasses}`} />
            <select
              value={filters.minPrice}
              onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all appearance-none text-black ${inputClasses}`}
            >
              <option value="">No Min</option>
              <option value="500000">$500k</option>
              <option value="750000">$750k</option>
              <option value="1000000">$1M</option>
              <option value="1500000">$1.5M</option>
              <option value="2000000">$2M</option>
            </select>
          </div>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${labelClasses}`}>
            Max Price
          </label>
          <div className="relative">
            <DollarSign className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${iconClasses}`} />
            <select
              value={filters.maxPrice}
              onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all appearance-none text-black ${inputClasses}`}
            >
              <option value="">No Max</option>
              <option value="1000000">$1M</option>
              <option value="2000000">$2M</option>
              <option value="3000000">$3M</option>
              <option value="5000000">$5M</option>
              <option value="10000000">$10M+</option>
            </select>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <label className={`block text-sm font-medium mb-2 ${labelClasses}`}>
            Bedrooms
          </label>
          <div className="relative">
            <Bed className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5  ${iconClasses}`} />
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all appearance-none text-black ${inputClasses}`}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              isHero
                ? 'bg-white text-slate-900 hover:bg-white/90'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
