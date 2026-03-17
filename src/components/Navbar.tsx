import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, Phone, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/listings', label: 'Listings', icon: Building2 },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled ? 'bg-blue-600' : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <Building2 className={`w-5 h-5 ${isScrolled ? 'text-white' : 'text-white'}`} />
              </div>
              <span className={`font-display text-xl transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                LuxeEstate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link flex items-center gap-2 ${
                    isScrolled 
                      ? isActive(link.path) ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                      : isActive(link.path) ? 'text-white font-semibold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/listings"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-slate-900 hover:bg-white/90'
                }`}
              >
                <Search className="w-4 h-4" />
                Find Property
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-4 rounded-xl text-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
            <Link
              to="/listings"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 p-4 bg-blue-600 text-white rounded-xl font-medium"
            >
              <Search className="w-5 h-5" />
              Find Property
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
