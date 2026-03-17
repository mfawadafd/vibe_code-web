import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Property Listings', path: '/listings' },
    { label: 'Contact Agent', path: '/contact' },
    { label: 'About Us', path: '#' },
    { label: 'Careers', path: '#' },
  ];

  const propertyTypes = [
    { label: 'Houses', path: '/listings?type=house' },
    { label: 'Apartments', path: '/listings?type=apartment' },
    { label: 'Villas', path: '/listings?type=villa' },
    { label: 'Condos', path: '/listings?type=condo' },
    { label: 'Lofts', path: '/listings?type=loft' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl">LuxeEstate</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect property. We specialize in luxury homes, 
              apartments, and investment properties across California.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-display text-lg mb-6">Property Types</h3>
            <ul className="space-y-3">
              {propertyTypes.map((type) => (
                <li key={type.label}>
                  <Link
                    to={type.path}
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {type.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-display text-lg mb-6">Contact Us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>(310) 555-0123</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>info@luxeestate.com</span>
              </div>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-3">Subscribe to Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} LuxeEstate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="#" className="text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-slate-500 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
