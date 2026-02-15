
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icons, COLORS } from '../constants';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Compliance', path: '/compliance' },
    { name: 'About', path: '/about' },
    { name: 'Partner Portal', path: '/ai-hub' },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-navy p-2 rounded">
                <Icons.Security />
              </div>
              <span className="text-xl font-bold font-heading text-navy tracking-tight">SENTINEL <span className="text-slate-500 font-light">LOGISTICS</span></span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-navy ${
                  location.pathname === link.path ? 'text-navy border-b-2 border-navy' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-navy text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-charcoal transition-all shadow-md">
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-navy">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-slate-700 hover:text-navy font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="block bg-navy text-white text-center py-2 rounded">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-navy text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="bg-white p-1 rounded">
              <Icons.Security />
            </div>
            <span className="text-xl font-bold font-heading tracking-tight">SENTINEL LOGISTICS GROUP</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6">
            A premier white-glove logistics partner specializing in secure, time-critical transport of medical, wellness, and specialized equipment.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
               <Icons.Compliance />
               <span>ISO 27001 Certified Environment (Simulated)</span>
            </div>
            <div className="text-xs text-slate-500 border-l border-slate-700 pl-4 py-1">
               <p><strong>Service Coverage:</strong> Contiguous United States.</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 uppercase tracking-widest text-sm">Services</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>Medical Supplies</li>
            <li>Supplements & Nutraceuticals</li>
            <li>Mobility Equipment</li>
            <li>Critical Route Planning</li>
            <li>Last-Mile Verification</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 uppercase tracking-widest text-sm">Company</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/compliance">Compliance</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>© 2026 Sentinel Logistics Group. All rights reserved.</p>
        <p>Professional logistics for independent contractors and healthcare providers.</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
