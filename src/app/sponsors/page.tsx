'use client'

import React from 'react';
import Image from 'next/image';

const SponsorPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Sponsors</span>
          </h1>
        </div>
      </div>

      {/* Sponsors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">

        {/* How to Become a Sponsor */}
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-black mb-4">Interested in Becoming a Corporate Sponsor?</h3>
            <ol className="list-decimal list-inside text-black space-y-4 text-lg">
              <li>
                View the Sponsorship Packet below.
              </li>
              <li>
                Reach out to <a href="mailto:utdnsbe@outlook.com" className="underline text-yellow-600">us</a> to ask questions or set up a meeting.
              </li>
              <li>
                Email the completed form to us at <a href="mailto:utdnsbe@outlook.com" className="underline text-yellow-600">utdnsbe@outlook.com</a>
              </li>
            </ol>
          </div>

          {/* Embedded PDF */}
          <div className="max-w-4xl mx-auto mb-12">
            <iframe 
              src="/University%20of%20Texas%20at%20Dallas%20Chapter%20Sponsorship%20Package.pdf#toolbar=1" 
              width="100%" 
              height="600px" 
              className="rounded-lg border"
            />
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Thank You to Our Sponsors</h2>
            <p className="text-lg text-black mb-8">
              We are grateful for the support of our corporate partners who help make our mission possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Sponsor Logos */}
            {[
              { src: "/sponors/verizon.png", alt: "Verizon" },
              { src: "/sponors/hak.png", alt: "HAK" },
              { src: "/sponors/geico.jpg", alt: "Geico" },
              { src: "/sponors/matchgrouplogo.png", alt: "Match Group" },
              { src: "/sponors/tx.png", alt: "Texas Instruments" },
              { src: "/sponors/pngtree-google-seo-promotion-icon-vector-png-image_9183333.png", alt: "SEO" },
              { src: "/sponors/nokia.jfif", alt: "Nokia" }
            ].map((sponsor, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-lg">
                <Image 
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={400}
                  height={200}
                  className="w-full h-48 object-contain"
                />
              </div>
            ))}
          </div>

          


          {/* Contact CTA */}
          <div className="max-w-2xl mx-auto text-center bg-black text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-4">
              Contact us to learn how your company can empower future Black engineers at UTD.
            </p>
            <a 
              href="mailto:utdnsbe@outlook.com" 
              className="text-yellow-400 hover:text-yellow-300 font-medium"
            >
              utdnsbe@outlook.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SponsorPage;
