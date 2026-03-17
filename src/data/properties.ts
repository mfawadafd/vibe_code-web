export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: 'house' | 'apartment' | 'villa' | 'condo' | 'loft';
  description: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
  yearBuilt: number;
  lotSize?: string;
  garage?: number;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa with Ocean View",
    price: 2850000,
    location: "123 Ocean Drive",
    city: "Malibu",
    state: "CA",
    zipCode: "90265",
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4200,
    propertyType: "villa",
    description: "Experience coastal living at its finest in this stunning modern villa. Featuring floor-to-ceiling windows, an infinity pool overlooking the Pacific Ocean, and meticulously designed interiors. The open-concept living space seamlessly connects indoor and outdoor areas, perfect for entertaining. Gourmet kitchen with marble countertops, premium appliances, and a spacious island. Master suite with private balcony, walk-in closet, and spa-like bathroom. Additional features include smart home technology, solar panels, and a three-car garage.",
    features: [
      "Infinity Pool",
      "Ocean View",
      "Smart Home",
      "Solar Panels",
      "Wine Cellar",
      "Home Theater",
      "Gym",
      "Guest House"
    ],
    images: ["/property-8.jpg", "/property-1.jpg", "/property-2.jpg", "/property-5.jpg"],
    isFeatured: true,
    isNew: true,
    agent: {
      name: "Sarah Mitchell",
      phone: "(310) 555-0123",
      email: "sarah@luxeestate.com",
      image: "/agent-1.jpg"
    },
    yearBuilt: 2021,
    lotSize: "0.75 acres",
    garage: 3
  },
  {
    id: 2,
    title: "Downtown Penthouse with City Views",
    price: 1850000,
    location: "456 Skyline Tower",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90015",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    propertyType: "apartment",
    description: "Stunning penthouse in the heart of downtown LA with panoramic city views. This luxurious residence features high ceilings, floor-to-ceiling windows, and designer finishes throughout. The gourmet kitchen boasts custom cabinetry, Sub-Zero appliances, and a large island. Primary suite with walk-in closet and spa-inspired bathroom. Building amenities include 24/7 concierge, rooftop pool, fitness center, and private parking.",
    features: [
      "City Views",
      "Concierge",
      "Rooftop Pool",
      "Fitness Center",
      "Private Elevator",
      "Wine Storage",
      "Pet Friendly",
      "Valet Parking"
    ],
    images: ["/property-6.jpg", "/property-3.jpg", "/property-7.jpg", "/property-1.jpg"],
    isFeatured: true,
    isNew: false,
    agent: {
      name: "Michael Chen",
      phone: "(213) 555-0456",
      email: "michael@luxeestate.com",
      image: "/agent-2.jpg"
    },
    yearBuilt: 2019,
    garage: 2
  },
  {
    id: 3,
    title: "Contemporary Family Home in Beverly Hills",
    price: 3200000,
    location: "789 Palm Canyon Road",
    city: "Beverly Hills",
    state: "CA",
    zipCode: "90210",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    propertyType: "house",
    description: "Exceptional contemporary home in prestigious Beverly Hills neighborhood. This architectural masterpiece features clean lines, abundant natural light, and seamless indoor-outdoor living. The chef's kitchen opens to a family room and backyard oasis with pool and outdoor kitchen. All bedrooms are en-suite with custom closets. Additional highlights include a home office, media room, and four-car garage.",
    features: [
      "Swimming Pool",
      "Outdoor Kitchen",
      "Home Office",
      "Media Room",
      "Wine Cellar",
      "Smart Home",
      "Security System",
      "Landscaped Garden"
    ],
    images: ["/hero-bg.jpg", "/property-4.jpg", "/property-2.jpg", "/property-5.jpg"],
    isFeatured: true,
    isNew: true,
    agent: {
      name: "Sarah Mitchell",
      phone: "(310) 555-0123",
      email: "sarah@luxeestate.com",
      image: "/agent-1.jpg"
    },
    yearBuilt: 2020,
    lotSize: "0.5 acres",
    garage: 4
  },
  {
    id: 4,
    title: "Industrial Loft in Arts District",
    price: 950000,
    location: "321 Creative Avenue",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90013",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    propertyType: "loft",
    description: "Authentic industrial loft in the vibrant Arts District. Exposed brick walls, original concrete floors, and massive factory windows create a unique urban living experience. Open floor plan with high ceilings and mezzanine level. Updated kitchen with stainless steel appliances. Walking distance to galleries, cafes, and nightlife. Perfect for creative professionals.",
    features: [
      "Exposed Brick",
      "High Ceilings",
      "Mezzanine",
      "Rooftop Access",
      "Bike Storage",
      "Pet Friendly",
      "In-Unit Laundry",
      "Parking"
    ],
    images: ["/property-9.jpg", "/property-7.jpg", "/property-1.jpg", "/property-3.jpg"],
    isFeatured: false,
    isNew: true,
    agent: {
      name: "Michael Chen",
      phone: "(213) 555-0456",
      email: "michael@luxeestate.com",
      image: "/agent-2.jpg"
    },
    yearBuilt: 1925,
    garage: 1
  },
  {
    id: 5,
    title: "Mediterranean Estate with Vineyard",
    price: 4500000,
    location: "654 Wine Country Lane",
    city: "Napa",
    state: "CA",
    zipCode: "94558",
    bedrooms: 7,
    bathrooms: 6.5,
    sqft: 6500,
    propertyType: "villa",
    description: "Magnificent Mediterranean estate set on 5 acres in Napa Valley. This exceptional property features a private vineyard, olive grove, and stunning views of the surrounding hills. The main residence offers grand living spaces, a professional kitchen, wine cellar, and luxurious master suite. Guest house, pool house, and equestrian facilities complete this extraordinary estate.",
    features: [
      "Private Vineyard",
      "Wine Cellar",
      "Guest House",
      "Pool House",
      "Equestrian Facilities",
      "Olive Grove",
      "Tennis Court",
      "Helipad"
    ],
    images: ["/property-4.jpg", "/property-8.jpg", "/property-2.jpg", "/property-5.jpg"],
    isFeatured: true,
    isNew: false,
    agent: {
      name: "Sarah Mitchell",
      phone: "(310) 555-0123",
      email: "sarah@luxeestate.com",
      image: "/agent-1.jpg"
    },
    yearBuilt: 2015,
    lotSize: "5 acres",
    garage: 4
  },
  {
    id: 6,
    title: "Modern Condo Near Beach",
    price: 750000,
    location: "987 Coastal Highway",
    city: "Santa Monica",
    state: "CA",
    zipCode: "90401",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    propertyType: "condo",
    description: "Bright and modern condo just steps from Santa Monica Beach. Open living space with hardwood floors and updated kitchen. Both bedrooms feature ample closet space. Building offers rooftop deck with ocean views, bike storage, and secure parking. Walk to shops, restaurants, and the famous Santa Monica Pier.",
    features: [
      "Beach Access",
      "Rooftop Deck",
      "Ocean Views",
      "Bike Storage",
      "Secure Parking",
      "In-Unit Laundry",
      "Pet Friendly",
      "Fitness Center"
    ],
    images: ["/property-1.jpg", "/property-6.jpg", "/property-3.jpg", "/property-7.jpg"],
    isFeatured: false,
    isNew: true,
    agent: {
      name: "Michael Chen",
      phone: "(213) 555-0456",
      email: "michael@luxeestate.com",
      image: "/agent-2.jpg"
    },
    yearBuilt: 2010,
    garage: 1
  },
  {
    id: 7,
    title: "Spanish Revival Masterpiece",
    price: 2100000,
    location: "147 Historic Boulevard",
    city: "Pasadena",
    state: "CA",
    zipCode: "91105",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3600,
    propertyType: "house",
    description: "Beautifully restored Spanish Revival home in Pasadena's historic district. Original details include arched doorways, hand-painted tiles, and wrought iron fixtures. Updated kitchen and bathrooms blend modern convenience with period charm. Lush gardens with fountain, outdoor dining area, and detached guest cottage.",
    features: [
      "Historic Details",
      "Guest Cottage",
      "Gardens",
      "Fountain",
      "Fireplace",
      "Hardwood Floors",
      "Wine Cellar",
      "Two-Car Garage"
    ],
    images: ["/property-2.jpg", "/property-4.jpg", "/property-5.jpg", "/property-7.jpg"],
    isFeatured: false,
    isNew: false,
    agent: {
      name: "Sarah Mitchell",
      phone: "(310) 555-0123",
      email: "sarah@luxeestate.com",
      image: "/agent-1.jpg"
    },
    yearBuilt: 1928,
    lotSize: "0.3 acres",
    garage: 2
  },
  {
    id: 8,
    title: "Minimalist Architectural Gem",
    price: 1650000,
    location: "258 Design District",
    city: "West Hollywood",
    state: "CA",
    zipCode: "90069",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2400,
    propertyType: "house",
    description: "Stunning minimalist home designed by award-winning architect. Clean lines, white walls, and abundant natural light create a gallery-like atmosphere. Floor-to-ceiling glass walls open to a private courtyard with reflecting pool. Chef's kitchen with integrated appliances. Master suite with spa bathroom and private terrace.",
    features: [
      "Architectural Design",
      "Courtyard",
      "Reflecting Pool",
      "Floor-to-Ceiling Glass",
      "Integrated Appliances",
      "Private Terrace",
      "Smart Home",
      "Two-Car Garage"
    ],
    images: ["/property-3.jpg", "/property-1.jpg", "/property-6.jpg", "/property-9.jpg"],
    isFeatured: true,
    isNew: false,
    agent: {
      name: "Michael Chen",
      phone: "(213) 555-0456",
      email: "michael@luxeestate.com",
      image: "/agent-2.jpg"
    },
    yearBuilt: 2018,
    lotSize: "0.2 acres",
    garage: 2
  }
];

export const locations = [
  {
    id: 1,
    name: "Beverly Hills",
    state: "CA",
    image: "/location-1.jpg",
    propertyCount: 24
  },
  {
    id: 2,
    name: "Downtown LA",
    state: "CA",
    image: "/location-2.jpg",
    propertyCount: 18
  },
  {
    id: 3,
    name: "Malibu",
    state: "CA",
    image: "/property-8.jpg",
    propertyCount: 12
  },
  {
    id: 4,
    name: "Santa Monica",
    state: "CA",
    image: "/property-6.jpg",
    propertyCount: 31
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const filterProperties = (
  properties: Property[],
  filters: {
    location?: string;
    minPrice?: number;
    maxPrice?: number;
    propertyType?: string;
    bedrooms?: number;
  }
): Property[] => {
  return properties.filter((property) => {
    if (filters.location && !property.city.toLowerCase().includes(filters.location.toLowerCase()) && 
        !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    if (filters.propertyType && filters.propertyType !== 'all' && property.propertyType !== filters.propertyType) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }
    return true;
  });
};
