
import React from 'react';
import { Icons } from '../constants';

const Compliance = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-navy mb-6">Compliance & Safety Infrastructure</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Security is the bedrock of our operations. We maintain rigorous standards across driver vetting, data protection, and physical cargo handling to ensure we meet the expectations of regulators and premium partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="p-8 border rounded-2xl">
            <div className="flex items-center space-x-3 text-navy mb-6">
              <Icons.Vetted />
              <h3 className="text-xl font-bold">Driver Vetting Process</h3>
            </div>
            <p className="text-slate-500 mb-6">
              Our vetting process is among the most stringent in the industry. We don't just hire couriers; we partner with professional logistics operators.
            </p>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-2"><strong>Multi-Tiered Background Checks:</strong> Conducted post-offer, covering criminal, driving, and identity verification.</li>
              <li className="flex gap-2"><strong>Training Requirements:</strong> Mandatory training on sensitive cargo handling, HIPAA awareness, and emergency protocols.</li>
              <li className="flex gap-2"><strong>Ongoing Monitoring:</strong> Periodic checks to ensure continued compliance with our safety standards.</li>
            </ul>
          </div>

          <div className="p-8 border rounded-2xl">
            <div className="flex items-center space-x-3 text-navy mb-6">
              <Icons.Security />
              <h3 className="text-xl font-bold">Insurance & Protection</h3>
            </div>
            <p className="text-slate-500 mb-6">
              Sentinel Logistics Group maintains comprehensive corporate insurance layers, complementing the professional coverage required from all independent contractors.
            </p>
            <ul className="space-y-4 text-sm text-slate-700">
              <li className="flex gap-2"><strong>Cargo Insurance:</strong> High-limit coverage specifically tailored for medical and expensive electronic equipment.</li>
              <li className="flex gap-2"><strong>Liability Protection:</strong> Robust general liability and professional indemnity policies.</li>
              <li className="flex gap-2"><strong>Contractor Compliance:</strong> Continuous verification of active commercial auto policies for all drivers.</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-3xl border border-slate-200">
          <h2 className="text-2xl font-bold text-navy mb-8">Handling Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-charcoal mb-2">Environmental Integrity</h4>
              <p className="text-sm text-slate-500">Strict adherence to temperature and light sensitivity requirements for sensitive pharmaceuticals and diagnostics.</p>
            </div>
            <div>
              <h4 className="font-bold text-charcoal mb-2">Privacy & Data</h4>
              <p className="text-sm text-slate-500">End-to-end encryption for routing data and strict adherence to patient privacy standards during delivery.</p>
            </div>
            <div>
              <h4 className="font-bold text-charcoal mb-2">Chain of Custody</h4>
              <p className="text-sm text-slate-500">Every touchpoint is logged via GPS and verified by digital signature or photographic evidence where required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;