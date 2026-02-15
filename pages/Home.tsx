
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../constants';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden py-24 lg:py-32">
        {/* Replace the src with your actual image file path once hosted */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000" 
            alt="Secure Logistics Hero" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="uppercase tracking-widest text-slate-200">Active Service: USA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-[1.1] mb-6">
              Secure Logistics for <br/>
              <span className="text-slate-400">Sensitive</span> Deliveries
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
              Providing precision-focused transport for medical supplies, nutraceuticals, and specialized equipment via an elite, vetted contractor network.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-white text-navy px-10 py-5 rounded-xl font-bold hover:bg-slate-100 transition-all text-center shadow-2xl shadow-white/5">
                Request Logistics Services
              </Link>
              <Link to="/careers" className="bg-navy/40 backdrop-blur-lg border border-white/30 px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all text-center">
                Drive With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-3 text-navy">
              <Icons.Security />
              <div>
                <p className="font-bold text-sm">Security-Focused</p>
                <p className="text-xs text-slate-500">Chain of custody protocols</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-navy">
              <Icons.Compliance />
              <div>
                <p className="font-bold text-sm">Compliance-Aligned</p>
                <p className="text-xs text-slate-500">Fully licensed operations</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-navy">
              <Icons.Vetted />
              <div>
                <p className="font-bold text-sm">Professional Fleet</p>
                <p className="text-xs text-slate-500">Independently vetted drivers</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-navy">
              <Icons.Time />
              <div>
                <p className="font-bold text-sm">USA Coverage</p>
                <p className="text-xs text-slate-500">Contiguous United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">The Sentinel Standard</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Logistics is more than moving boxes. In the healthcare and wellness sectors, it's about life-sustaining supplies reaching their destination with absolute integrity.
              </p>
              <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                We bridge the gap through a network of elite professional contractors trained in compliance-aligned procedures and sensitivity protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'Strict environmental control',
                  'Signature-verified chain',
                  'GPS real-time tracking',
                  'Account management'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-navy font-semibold text-sm">
                    <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-navy/5 rounded-3xl group-hover:bg-navy/10 transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                alt="Logistics Facility" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
