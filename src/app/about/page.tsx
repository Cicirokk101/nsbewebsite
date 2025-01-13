import React from 'react';
export const metadata = {
  title: 'About Us | NSBE',
}
const AboutPage = () => {
  return (
    <main className="py-16 px-4 max-w-7xl mx-auto">
      {/* What is NSBE Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold mb-4">What is NSBE?</h2>
          <p className="text-gray-600">
            The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations based in the United States. 
            NSBE, founded in 1975, supports and promotes the aspirations of collegiate and pre-collegiate students and technical professionals in engineering and technology.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src='/img/funpic2.png' 
            alt="NSBE Community" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Our Mission Section - Reversed */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community. 
            UTD NSBE's goal is to assist Black Engineers growth and development, by providing them with workshops, events, and the potential to network with industry
            professionals.
          </p>
        </div>
        <div className="flex-1">
          <img 
            src= '/img/nsbeReg3.jpg' 
            alt="NSBE Mission" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Our Goals Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Our Goals</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Merchandise! Our goal is to have UTD NSBE merch available to purchase
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Tech Workshops to improve your skills!
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              New events, and regional conferences!
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Support all Engineers in their technical development
            </li>
          </ul>
          
        </div>
        <div className="flex-1">
          <img 
            src='/img/nsbeReg4.jpg'
            alt="NSBE Goals" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;