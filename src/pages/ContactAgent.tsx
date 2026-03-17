import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  User, MessageSquare, Building2, ArrowRight 
} from 'lucide-react';
import { properties } from '../data/properties';

const ContactAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const agents = [
    {
      name: 'Sarah Mitchell',
      title: 'Senior Real Estate Agent',
      phone: '(310) 555-0123',
      email: 'sarah@luxeestate.com',
      image: '/agent-1.jpg',
      specialties: ['Luxury Homes', 'Waterfront Properties'],
      experience: '12 years',
    },
    {
      name: 'Michael Chen',
      title: 'Real Estate Consultant',
      phone: '(213) 555-0456',
      email: 'michael@luxeestate.com',
      image: '/agent-2.jpg',
      specialties: ['Urban Properties', 'Investment'],
      experience: '8 years',
    },
  ];

  const officeInfo = {
    address: '123 Luxury Lane, Beverly Hills, CA 90210',
    phone: '(310) 555-0100',
    email: 'info@luxeestate.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed',
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-center border border-slate-100 shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-display text-slate-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Thank you for reaching out. One of our agents will get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/listings" className="btn-primary inline-flex items-center gap-2">
                Browse Listings
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/" className="btn-secondary inline-flex items-center gap-2">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-display text-slate-900 mb-4">
            Contact Our Agents
          </h1>
          <p className="text-slate-500 max-w-2xl">
            Have questions about a property or need help finding your dream home? 
            Our experienced agents are here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-display text-slate-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Property Interest */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Interested In
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        name="propertyInterest"
                        value={formData.propertyInterest}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">Select a property</option>
                        {properties.map((property) => (
                          <option key={property.id} value={property.id}>
                            {property.title}
                          </option>
                        ))}
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-display text-lg text-slate-900 mb-6">Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{officeInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${officeInfo.phone}`} className="text-slate-600 hover:text-blue-600">
                    {officeInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${officeInfo.email}`} className="text-slate-600 hover:text-blue-600">
                    {officeInfo.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 whitespace-pre-line">{officeInfo.hours}</span>
                </div>
              </div>
            </div>

            {/* Our Agents */}
            <div>
              <h3 className="font-display text-lg text-slate-900 mb-6">Meet Our Agents</h3>
              <div className="space-y-4">
                {agents.map((agent, index) => (
                  <div key={index} className="bg-white rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={agent.image}
                        alt={agent.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <span className="font-medium text-slate-900 block">{agent.name}</span>
                        <span className="text-sm text-slate-500">{agent.title}</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="w-4 h-4" />
                        {agent.phone}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Mail className="w-4 h-4" />
                        {agent.email}
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {agent.specialties.map((specialty, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAgent;
