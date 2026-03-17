import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bed, Bath, Square, MapPin, Calendar, Car, 
  ChevronLeft, ChevronRight, Heart, Share2, Phone, 
  Mail, Check, ArrowRight 
} from 'lucide-react';
import { properties, formatPrice } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const property = properties.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-display text-slate-900 mb-4">Property Not Found</h1>
          <p className="text-slate-500 mb-6">The property you're looking for doesn't exist.</p>
          <Link to="/listings" className="btn-primary">
            Browse Listings
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.propertyType === property.propertyType)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/listings" className="hover:text-blue-600">Listings</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 truncate max-w-[200px]">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative bg-slate-900">
        <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.isNew && <span className="badge-new">New Listing</span>}
            {property.isFeatured && <span className="badge-featured">Featured</span>}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-display text-slate-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-5 h-5" />
                    <span>{property.location}, {property.city}, {property.state} {property.zipCode}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-3xl md:text-4xl font-display text-blue-600">
                    {formatPrice(property.price)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    isLiked
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Saved' : 'Save'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <Bed className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="block text-2xl font-display text-slate-900">{property.bedrooms}</span>
                <span className="text-sm text-slate-500">Bedrooms</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <Bath className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="block text-2xl font-display text-slate-900">{property.bathrooms}</span>
                <span className="text-sm text-slate-500">Bathrooms</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <Square className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="block text-2xl font-display text-slate-900">{property.sqft.toLocaleString()}</span>
                <span className="text-sm text-slate-500">Sq Ft</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-4 text-center">
                <Car className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="block text-2xl font-display text-slate-900">{property.garage || 0}</span>
                <span className="text-sm text-slate-500">Garage</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-display text-slate-900 mb-4">About This Property</h2>
              <p className="text-slate-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-display text-slate-900 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-display text-slate-900 mb-4">Property Details</h2>
              <div className="bg-slate-50 rounded-xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Property Type</span>
                    <span className="font-medium text-slate-900 capitalize">{property.propertyType}</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Year Built</span>
                    <span className="font-medium text-slate-900">{property.yearBuilt}</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Lot Size</span>
                    <span className="font-medium text-slate-900">{property.lotSize || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Bedrooms</span>
                    <span className="font-medium text-slate-900">{property.bedrooms}</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Bathrooms</span>
                    <span className="font-medium text-slate-900">{property.bathrooms}</span>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block mb-1">Garage</span>
                    <span className="font-medium text-slate-900">{property.garage || 0} Cars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Agent Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-display text-lg text-slate-900 mb-4">Contact Agent</h3>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-medium text-slate-900 block">{property.agent.name}</span>
                    <span className="text-sm text-slate-500">Real Estate Agent</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {property.agent.email}
                  </a>
                </div>
                <button
                  onClick={() => setShowContactForm(!showContactForm)}
                  className="w-full mt-4 btn-primary"
                >
                  Send Message
                </button>
              </div>

              {/* Schedule Tour */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-display text-lg mb-2">Schedule a Tour</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  See this property in person. Schedule a private tour with our agent.
                </p>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Tour
                </Link>
              </div>

              {/* Mortgage Calculator */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-display text-lg text-slate-900 mb-4">Mortgage Estimate</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-slate-500">Monthly Payment</span>
                    <span className="block text-2xl font-display text-slate-900">
                      {formatPrice(Math.round(property.price * 0.0045))}
                    </span>
                  </div>
                  <div className="text-sm text-slate-500">
                    <p>Based on 20% down payment</p>
                    <p>30-year fixed rate at 6.5% APR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-display text-slate-900">
                Similar Properties
              </h2>
              <Link
                to="/listings"
                className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
              >
                View All
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
