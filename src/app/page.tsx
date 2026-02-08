'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    image: '/img/Declass.jpg',
    title: 'We are UTD NSBE',
    subtitle:
      'Empowering Black engineers to excel academically, grow professionally, and impact the community',
  },
  {
    image: '/img/nsbeGBM1.jpg',
    title: 'We are UTD NSBE',
    subtitle:
      'Empowering Black engineers to excel academically, grow professionally, and impact the community',
  },
  {
    image: '/img/cleanUp.png',
    title: 'We are UTD NSBE',
    subtitle:
      'Empowering Black engineers to excel academically, grow professionally, and impact the community',
  },
]

// calendar moved to its own page at /calendar

export default function Home() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="min-h-screen">
      <section className="relative h-[100svh]">
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <Image
              key={i}
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 flex h-full items-center justify-start">
          <div className="container mx-auto px-4 pt-20">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-5xl font-bold text-white">
                {slides[current].title}
                <span className="text-[#ffc451]">.</span>
              </h1>
              <h2 className="mb-6 text-lg md:text-xl text-white">{slides[current].subtitle}</h2>
              <a
                href="/members"
                className="inline-block bg-[#ffc451] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#ffd571] transition-colors"
              >
                Become a Member
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-green-600">Upcoming Events</h2>
          <p className="text-center mb-6 text-gray-700 max-w-2xl mx-auto">
            See what’s coming up — meetings, workshops, and community events. For the full agenda and RSVP options, view the calendar page.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="/calendar"
              className="inline-block bg-[#ffc451] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#ffd571] transition-colors"
            >
              View Full Calendar
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
