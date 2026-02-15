
import React, { useState } from 'react';
import { Icons } from '../constants';

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-green-700 font-bold tracking-widest uppercase text-sm mb-4 block">Premium Contracting</span>
            <h1 className="text-4xl font-bold text-navy mb-6 leading-tight">Professional Delivery Drivers Wanted</h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sentinel Logistics Group is seeking elite independent contractors for high-value medical and sensitive equipment transport. This is a premium positioning for professional drivers who value reliability and compliance.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg h-fit">
                  <Icons.Compliance />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Superior Compensation</h3>
                  <p className="text-slate-500 text-sm">Our routes pay significantly above industry average due to specialized cargo and compliance requirements.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg h-fit">
                  <Icons.Security />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Company-Paid Screening</h3>
                  <p className="text-slate-500 text-sm italic">All background screening costs are employer-paid or reimbursed after the standard post-offer vetting period.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="bg-slate-100 p-3 rounded-lg h-fit">
                  <Icons.Tracking />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">Dedicated Support</h3>
                  <p className="text-slate-500 text-sm">24/7 dispatch support and optimized routing tools provided to all active contractors.</p>
                </div>
              </div>
            </div>

            <div className="bg-muted-green p-8 rounded-2xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-4">Minimum Requirements:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-800 font-medium">
                <li>• Valid State Driver's License</li>
                <li>• Clean Driving Record</li>
                <li>• Insured, Reliable Cargo Vehicle</li>
                <li>• Smartphone Proficiency</li>
                <li>• Professional Attire & Demeanor</li>
                <li>• Pass Post-Offer Background Check</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border rounded-3xl p-8 md:p-12 shadow-sm">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-navy mb-2">Apply to Drive</h2>
                <p className="text-slate-500 mb-8 text-sm">Start your professional driver application. No fees are required to apply.</p>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                      <input type="text" className="w-full border-b py-2 focus:border-navy outline-none transition-colors bg-transparent text-slate-900" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                      <input type="email" className="w-full border-b py-2 focus:border-navy outline-none transition-colors bg-transparent text-slate-900" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">City</label>
                      <input type="text" className="w-full border-b py-2 focus:border-navy outline-none transition-colors bg-transparent text-slate-900" placeholder="Chicago" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">State</label>
                      <input type="text" className="w-full border-b py-2 focus:border-navy outline-none transition-colors bg-transparent text-slate-900" placeholder="IL" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                      <input type="tel" className="w-full border-b py-2 focus:border-navy outline-none transition-colors bg-transparent text-slate-900" placeholder="(555) 000-0000" required />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Vehicle Type</label>
                      <select className="w-full border-b py-2 focus:border-navy outline-none bg-transparent text-slate-900">
                        <option className="text-slate-900">Sedan / SUV</option>
                        <option className="text-slate-900">Sprinter / Cargo Van</option>
                        <option className="text-slate-900">Box Truck</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-slate-400 mb-6">
                      By clicking "Submit Application", you acknowledge that Sentinel Logistics Group will contact you regarding potential contracting opportunities. Background checks are only initiated after a conditional contract offer.
                    </p>
                    <button type="submit" className="w-full bg-navy text-white py-4 rounded-xl font-bold hover:bg-charcoal shadow-lg shadow-navy/20 transition-all">
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                   <Icons.Vetted />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">Application Received</h2>
                <p className="text-slate-600 mb-6 font-semibold text-lg leading-relaxed">
                  Thank you for applying.
                </p>
                <p className="text-slate-500 mb-10 leading-relaxed">
                  If selected, a member of our team will contact you within <strong>3 business days</strong> for a brief interview.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="inline-flex items-center text-navy font-bold hover:text-charcoal transition-colors group"
                >
                  <span className="border-b-2 border-navy group-hover:border-charcoal">Submit another application</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
