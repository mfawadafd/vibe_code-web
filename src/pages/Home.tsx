import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowRight, TrendingUp, Shield, Award, MapPin, ChevronRight } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { properties, locations } from '../data/properties';

const Home = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        '.hero-subtitle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );
      gsap.fromTo(
        '.hero-search',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        }}
      );

      // Featured properties animation
      gsap.fromTo(
        '.featured-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: {
          trigger: featuredRef.current,
          start: 'top 80%',
        }}
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSearch = (filters: any) => {
    const params = new URLSearchParams();
    if (filters.location) params.set('location', filters.location);
    if (filters.propertyType && filters.propertyType !== 'all') params.set('type', filters.propertyType);
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.bedrooms) params.set('bedrooms', filters.bedrooms);
    navigate(`/listings?${params.toString()}`);
  };

  const featuredProperties = properties.filter(p => p.isFeatured).slice(0, 3);
  const stats = [
    { value: '2,500+', label: 'Properties Sold', icon: TrendingUp },
    { value: '$1.2B', label: 'Total Sales', icon: Award },
    { value: '15+', label: 'Years Experience', icon: Shield },
    { value: '98%', label: 'Client Satisfaction', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center mb-12">
            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
              Find Your Dream
              <span className="block text-blue-400">Home Today</span>
            </h1>
            <p className="hero-subtitle text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover exceptional properties in California's most desirable locations. 
              From beachfront villas to urban penthouses, we have the perfect home for you.
            </p>
          </div>

          {/* Search Bar */}
          <div className="hero-search max-w-5xl mx-auto">
            <SearchBar onSearch={handleSearch} variant="hero" />
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white">500+</span>
              <span className="text-sm">Properties</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white">50+</span>
              <span className="text-sm">Cities</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white">2k+</span>
              <span className="text-sm">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="block text-3xl md:text-4xl font-display text-slate-900 mb-1">
                  {stat.value}
                </span>
                <span className="text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section ref={featuredRef} className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-blue-600 font-medium mb-2 block">Featured Properties</span>
              <h2 className="text-3xl md:text-4xl font-display text-slate-900">
                Handpicked for You
              </h2>
            </div>
            <Link
              to="/listings"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <div key={property.id} className="featured-card">
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-medium mb-2 block">Popular Locations</span>
            <h2 className="text-3xl md:text-4xl font-display text-slate-900">
              Explore Neighborhoods
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Discover properties in California's most sought-after locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                to={`/listings?location=${location.name}`}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5]"
              >
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 location-overlay" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1 text-white/80 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{location.state}</span>
                  </div>
                  <h3 className="text-xl font-display text-white mb-1">{location.name}</h3>
                  <p className="text-white/70 text-sm">{location.propertyCount} Properties</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/property-4.jpg"
              alt="Luxury Property"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl mx-8 md:mx-16">
                <span className="text-blue-400 font-medium mb-4 block">Ready to Find Your Home?</span>
                <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
                  Start Your Property Search Today
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Browse our extensive collection of premium properties and find the perfect 
                  place to call home.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/listings"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Browse Listings
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Contact Agent
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-medium mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-display text-slate-900">
              The LuxeEstate Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Agents',
                description: 'Our experienced agents provide personalized service and deep market knowledge to help you make informed decisions.',
              },
              {
                icon: Shield,
                title: 'Trusted Service',
                description: 'We prioritize transparency and integrity in every transaction, ensuring a smooth and secure buying experience.',
              },
              {
                icon: TrendingUp,
                title: 'Market Insights',
                description: 'Access comprehensive market data and trends to find properties with the best investment potential.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-100 card-shadow-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
