
import React from 'react';

const About = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-4xl font-bold text-navy mb-6">Our Mission</h1>
            <p className="text-xl text-slate-600 mb-8 font-light italic">
              "To provide the most secure, respectful, and compliant logistics ecosystem for the world's most essential goods."
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Sentinel Logistics Group was founded on the principle that critical cargo deserves a higher standard of care. We observed a gap between massive, impersonal shipping corporations and the unpredictable gig economy platforms.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We fill that gap by operating as a specialized, white-glove logistics partner. Our focus is narrow so our expertise can be deep. We don't deliver groceries; we deliver life-saving medical equipment and precision wellness products.
            </p>
          </div>
          <div className="bg-navy p-2 rounded-2xl shadow-2xl overflow-hidden aspect-square">
            <img src="https://picsum.photos/seed/mission/1000/1000" alt="Team at work" className="w-full h-full object-cover rounded-xl opacity-80" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Precision</h3>
            <p className="text-slate-500">Every route is optimized for safety and timeliness. We measure our success in seconds and millimeters.</p>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Accountability</h3>
            <p className="text-slate-500">We own the entire delivery lifecycle. If there's a challenge, we have a human ready to solve it instantly.</p>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Respect</h3>
            <p className="text-slate-500">We treat every delivery with the reverence it deserves, understanding its impact on the end recipient's life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;