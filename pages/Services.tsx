
import React, { useState } from 'react';
import { Icons } from '../constants';
import { Link } from 'react-router-dom';

interface ServiceDetail {
  title: string;
  icon: React.ReactNode;
  overview: string;
  included: string[];
  howItWorks: string[];
  security: string;
  useCases: string[];
  faqs: { q: string; a: string }[];
}

const servicesData: ServiceDetail[] = [
  {
    title: "Medical Supplies",
    icon: <Icons.Medical />,
    overview: "Specialized transport for life-sustaining medical consumables, diagnostic kits, and pharmaceuticals requiring stringent environmental controls.",
    included: ["Climate-controlled transport", "Sterile chain of custody", "Expedited same-day delivery", "Real-time thermal monitoring"],
    howItWorks: ["Secure pickup from lab or warehouse", "Transit in specialized climate units", "Continuous temperature logging", "Signature-verified delivery to medical facility"],
    security: "We utilize security-focused operations with background-checked drivers trained in compliance-aligned procedures for handling sensitive healthcare assets.",
    useCases: ["Diagnostic lab transfers", "Critical pharmaceutical restock", "Hospice care supply delivery"],
    faqs: [
      { q: "Do you handle refrigerated items?", a: "Yes, we provide validated cold-chain solutions for items requiring specific temperature ranges." },
      { q: "Are drivers trained in bio-hazard protocols?", a: "All drivers are trained in standard medical safety and secure handling protocols." }
    ]
  },
  {
    title: "Supplements & Nutraceuticals",
    icon: <Icons.Security />,
    overview: "White-glove distribution for premium wellness products, ensuring brand integrity from manufacturing to clinic or retail shelves.",
    included: ["Inventory batch tracking", "Secure 'no-tamper' packaging", "Branded delivery options", "Retail and clinic routing"],
    howItWorks: ["Consolidation at distribution hub", "Driver vetting for high-value cargo", "Secure route planning", "Verifiable delivery confirmation"],
    security: "Our security-focused operations include discreet transport methods and multi-point verification to prevent product diversion or tampering.",
    useCases: ["Direct-to-doctor supplement delivery", "Premium wellness retail restocking", "High-value nutraceutical distribution"],
    faqs: [
      { q: "Can you deliver to residential addresses?", a: "We primarily serve clinics and retailers, but residential 'white-glove' delivery is available for high-value wellness equipment." }
    ]
  },
  {
    title: "Mobility Equipment",
    icon: <Icons.Tracking />,
    overview: "Professional transport and careful placement of mobility aids and accessibility devices. We treat equipment with the same care as the patients who use them.",
    included: ["Heavy-duty handling equipment", "In-home placement assistance", "Device assembly support", "Removal of packaging"],
    howItWorks: ["Manufacturer pickup", "Pre-delivery inspection", "Scheduled delivery window", "Patient-focused setup and verification"],
    security: "Compliance-aligned procedures ensure that all in-home interactions are respectful, secure, and documented for patient privacy.",
    useCases: ["Power wheelchair delivery", "Hospital bed setup", "Accessibility ramp transport"],
    faqs: [
      { q: "Do you assemble the equipment?", a: "Our drivers provide professional placement and basic assembly as part of our white-glove service." }
    ]
  },
  {
    title: "Critical Route Planning",
    icon: <Icons.Time />,
    overview: "Algorithmic and human-verified route optimization for time-sensitive, recurring logistics networks.",
    included: ["Traffic-aware route optimization", "Multi-stop efficiency planning", "Emergency re-routing protocols", "Driver performance analytics"],
    howItWorks: ["Network demand analysis", "Custom route architecture", "Digital dispatch integration", "Continuous route optimization"],
    security: "Security-focused route planning minimizes dwell time and exposure for high-value cargo through optimized transit paths.",
    useCases: ["Daily medical lab pickup routes", "Inter-hospital supply chain management", "Scheduled retail distribution"],
    faqs: [
      { q: "Can routes be modified mid-transit?", a: "Our dispatch center can push real-time updates to drivers for emergency re-routing." }
    ]
  },
  {
    title: "Last-Mile Verification",
    icon: <Icons.Vetted />,
    overview: "Advanced proof-of-delivery services that go beyond simple signatures, providing total visibility into the final stage of transport.",
    included: ["Photo-verified delivery", "ID verification services", "Geo-fenced drop-off confirmation", "Chain of custody reporting"],
    howItWorks: ["Arrival at secure destination", "Identity and credential check", "Digital signature and photo capture", "Instant stakeholder notification"],
    security: "Compliance-aligned procedures ensure that sensitive items are only released to authorized personnel, maintaining a perfect chain of custody.",
    useCases: ["High-value pharmacy deliveries", "Sensitive medical record transport", "Controlled substance logistics"],
    faqs: [
      { q: "Is the verification data secure?", a: "All POD data is encrypted and stored in compliance-aligned secure environments." }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Our Logistics Expertise</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Click a service below to explore our detailed, security-focused operational procedures and compliance-aligned solutions.
          </p>
        </div>

        {/* Coverage Banner */}
        <div className="mb-12 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
          <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-navy rounded-full animate-pulse"></span>
            <strong>Service Coverage:</strong> Available across the Contiguous USA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <button 
              key={idx} 
              onClick={() => setSelectedService(service)}
              className="text-left bg-white border rounded-2xl p-8 hover:shadow-xl transition-all group border-slate-100 hover:border-navy/20"
            >
              <div className="bg-muted-green p-4 rounded-xl inline-block mb-6 text-green-800 group-hover:bg-navy group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{service.overview}</p>
              <span className="text-sm font-bold text-navy flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                View Service Details <Icons.Tracking />
              </span>
            </button>
          ))}
        </div>

        <div className="mt-24 bg-navy rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Routing Solution?</h2>
            <p className="text-slate-400">
              We specialize in scheduled routes, recurring multi-point distribution, and time-critical ad-hoc requests for the healthcare sector.
            </p>
          </div>
          <Link to="/contact" className="bg-white text-navy px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
            Consult With Our Team
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-navy transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-navy p-3 rounded-xl text-white">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold text-navy">{selectedService.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-10">
                  <section>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Service Overview</h4>
                    <p className="text-slate-700 leading-relaxed text-lg">{selectedService.overview}</p>
                  </section>

                  <section>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">How It Works</h4>
                    <div className="space-y-4">
                      {selectedService.howItWorks.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-navy text-sm">
                            {i + 1}
                          </div>
                          <p className="text-slate-600">{step}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="bg-slate-50 p-6 rounded-2xl">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Security & Compliance</h4>
                    <p className="text-slate-700 text-sm leading-relaxed italic">{selectedService.security}</p>
                  </section>

                  <section>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Common Use Cases</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.useCases.map((use, i) => (
                        <div key={i} className="bg-white border p-3 rounded-xl text-sm font-medium text-navy flex items-center gap-2">
                          <Icons.Vetted /> {use}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  <section>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {selectedService.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Service FAQs</h4>
                    <div className="space-y-4">
                      {selectedService.faqs.map((faq, i) => (
                        <div key={i}>
                          <p className="text-xs font-bold text-navy mb-1">{faq.q}</p>
                          <p className="text-xs text-slate-500">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <div className="pt-8">
                    <Link to="/contact" className="block w-full bg-navy text-white text-center py-4 rounded-xl font-bold hover:bg-charcoal transition-all shadow-lg shadow-navy/20">
                      Request Secure Transport
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
