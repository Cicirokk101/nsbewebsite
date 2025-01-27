'use client'

import React, { useState, useEffect } from 'react';
import { CalendarDays, Award } from 'lucide-react';


const ConferencePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/img/nsbeReg5.jpg',
      title: 'NSBE',
      subtitle: 'Learn how to attend conferences with us!'
    },
    {
      image: '/img/nsbeReg6.jpg',
      title: 'NSBE',
      subtitle: 'Learn how to attend conferences with us!'
    },
    {
      image: '/img/nsbeReg7.jpg',
      title: 'NSBE',
      subtitle: 'Learn how to attend conferences with us!'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);  // Added slides.length dependency

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 flex items-center justify-start h-full container mx-auto px-4">
          <div className="max-w-2xl pt-20">
            <h1 className="text-5xl font-bold text-white mb-4">
              {slides[currentSlide].title}{' '}
              <span className="text-[#ffc451]">Conferences</span>
            </h1>
            <h2 className="text-xl text-white">
              {slides[currentSlide].subtitle}
            </h2>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Quick Info About Our Conferences</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <CalendarDays className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-black">Fall Regional Conference</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-black">A weekend-long event hosted by NSBE Region V</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-black">
                      <span className="font-semibold mr-2">When:</span> November 7th-10th
                    </li>
                    <li className="flex items-center text-black">
                      <span className="font-semibold mr-2">Where:</span> St. Louis, Missouri
                    </li>
                  </ul>
                  <button 
                    disabled
                    className="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
                  >
                    Applications Closed
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-black">National Conference</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-black">NSBE&apos;s premier professional event</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-black">
                      <span className="font-semibold mr-2">When:</span> March 5th-9th
                    </li>
                    <li className="flex items-center text-black">
                      <span className="font-semibold mr-2">Where:</span> Chicago, Illinois
                    </li>
                    <li className="flex items-center text-black">
                      <span className="font-semibold mr-2">Attendees:</span> 15k+
                    </li>
                  </ul>
                  <button 
                    disabled
                    className="inline-block bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed mt-4"
                  >
                    Applications Closed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Point System Overview</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-600">60%</span>
              </div>
              <h4 className="font-semibold mb-2 text-black">Attendance</h4>
              <p className="text-sm text-black">Attend events and check in/out</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-600">25%</span>
              </div>
              <h4 className="font-semibold mb-2 text-black">Interview</h4>
              <p className="text-sm text-black">10-minute elevator pitch</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-yellow-600">15%</span>
              </div>
              <h4 className="font-semibold mb-2 text-black">Application</h4>
              <p className="text-sm text-black">Resume, LinkedIn, and GitHub review</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-black">Do I have to go with UTD NSBE?</h3>
              <p className="text-black">
                No! Anyone can attend NSBE conferences individually. While we can only provide paid travel & accommodations for select members, you&apos;re welcome to attend independently. There are also outside grants available to help with expenses!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-black">How can I be successful with the point system?</h3>
              <ul className="list-disc list-inside text-black space-y-2">
                <li>Attend as many events as possible and check in/out</li>
                <li>Improve your interview skills through NSBE workshops</li>
                <li>Develop your technical skills throughout the semester</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ConferencePage;