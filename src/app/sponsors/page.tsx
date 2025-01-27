'use client'

import React from 'react';
import Image from 'next/image';

const SponsorPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-yellow-400">Sponsors</span>
          </h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Thank You to Our Sponsors</h2>
            <p className="text-lg text-black mb-8">
              We are grateful for the support of our corporate partners who help make our mission possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image 
                src="/sponors/verizon.png" 
                alt="Verizon"
                width={400}
                height={200}
                className="w-full h-48 object-contain"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image 
                src="/sponors/hak.png" 
                alt="HAK"
                width={400}
                height={200}
                className="w-full h-48 object-contain"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image 
                src="/sponors/geico.jpg" 
                alt="Geico"
                width={400}
                height={200}
                className="w-full h-48 object-contain"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image 
                src="/sponors/matchgrouplogo.png" 
                alt="Match Group"
                width={400}
                height={200}
                className="w-full h-48 object-contain"
              />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Image 
                src="/sponors/tx.png" 
                alt="Texas Instruments"
                width={400}
                height={200}
                className="w-full h-48 object-contain"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-black text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in Sponsoring UTD NSBE?</h3>
            <p className="text-lg mb-4">
              Join us in supporting the next generation of Black engineers and making a lasting impact on our community.
            </p>
            <div className="inline-flex items-center space-x-2">
              <span>Contact us at:</span>
              <a 
                href="mailto:utdnsbe@outlook.com" 
                className="text-yellow-400 hover:text-yellow-300 font-medium"
              >
                utdnsbe@outlook.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SponsorPage;