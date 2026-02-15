
import React, { useState } from 'react';

const Contact = () => {
  const [formType, setFormType] = useState<'business' | 'driver'>('business');

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Contact Sentinel Logistics Group</h1>
          <p className="text-slate-500 text-lg">Connect with our logistics team or inquire about contracting opportunities.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1 rounded-xl inline-flex">
            <button 
              onClick={() => setFormType('business')}
              className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${formType === 'business' ? 'bg-white shadow-sm text-navy' : 'text-slate-500 hover:text-navy'}`}
            >
              Business Inquiry
            </button>
            <button 
              onClick={() => setFormType('driver')}
              className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${formType === 'driver' ? 'bg-white shadow-sm text-navy' : 'text-slate-500 hover:text-navy'}`}
            >
              Careers / Driving
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white border rounded-3xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Contact Name</label>
                  <input type="text" className="w-full border-b py-2 focus:border-navy outline-none bg-transparent text-slate-900" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Professional Email</label>
                  <input type="email" className="w-full border-b py-2 focus:border-navy outline-none bg-transparent text-slate-900" required />
                </div>
              </div>
              {formType === 'business' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Company / Institution</label>
                  <input type="text" className="w-full border-b py-2 focus:border-navy outline-none bg-transparent text-slate-900" required />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                  <input type="tel" className="w-full border-b py-2 focus:border-navy outline-none bg-transparent text-slate-900" required />
                </div>
              )}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full border-b py-2 focus:border-navy outline-none resize-none bg-transparent text-slate-900" placeholder="How can we assist you?"></textarea>
              </div>
              <button className="bg-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-charcoal transition-all shadow-lg shadow-navy/20">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-navy text-white p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Corporate Headquarters</p>
                  <p className="text-sm">19755 E 35th Dr<br />Aurora, CO 80011, United States</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-1">Email</p>
                  <p className="text-sm">contact@sentinellogistics.info</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border">
              <h3 className="text-lg font-bold text-navy mb-4">Service Regions</h3>
              <p className="text-sm text-slate-600 mb-4 font-medium italic">Comprehensive logistics available across:</p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Contiguous United States</li>
                <li>• All 48 Mainland States</li>
                <li className="text-xs text-slate-400 italic pt-2">Professional logistics across the Contiguous USA.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
