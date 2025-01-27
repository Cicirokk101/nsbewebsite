'use client'

import { useState, useEffect } from 'react'
import EventCalendar from '@/components/calendar'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: '/img/img3.png',
      title: 'We are UTD',
      subtitle: 'We are team of Black Engineers hoping to make a positive impact on the community'
    },
    {
      image: '/img/nsbe8.png',
      title: 'We are UTD',
      subtitle: 'We are team of Black Engineers hoping to make a positive impact on the community'
    },
    {
      image: '/img/funpic1.png',
      title: 'We are UTD',
      subtitle: 'We are team of Black Engineers hoping to make a positive impact on the community'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <main className="min-h-screen">
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
              {slides[currentSlide].title}
              <span className="text-[#ffc451]"> NSBE</span>
            </h1>
            <h2 className="text-xl text-white">
              {slides[currentSlide].subtitle}
            </h2>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-green-600 mb-12">
            NSBE CALENDAR
          </h2>
          
          <div className="flex justify-center mb-20">
            <EventCalendar />
          </div>
        </div>
      </section>


    </main>
  );
};

export default Home;