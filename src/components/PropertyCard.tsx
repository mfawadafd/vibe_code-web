import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { formatPrice, type Property } from '../data/properties';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/property/${property.id}`}
      className={`group block bg-white rounded-2xl overflow-hidden border border-slate-100 property-card ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''
      }`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
        )}
        <img
          src={property.images[0]}
          alt={property.title}
          className={`w-full h-full object-cover property-card-image ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {property.isNew && (
            <span className="badge-new">New</span>
          )}
          {property.isFeatured && (
            <span className="badge-featured">Featured</span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isLiked
              ? 'bg-red-500 text-white'
              : 'bg-white/90 text-slate-600 hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Property Type Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 capitalize">
            {property.propertyType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <span className="price-tag text-blue-600">{formatPrice(property.price)}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 text-slate-500 mb-4">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">
            {property.location}, {property.city}, {property.state}
          </span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Bed className="w-4 h-4 feature-icon" />
            <span className="text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <Bath className="w-4 h-4 feature-icon" />
            <span className="text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <Square className="w-4 h-4 feature-icon" />
            <span className="text-sm font-medium">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
