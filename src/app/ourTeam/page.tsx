import React from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Mageto Nyakoni",
    role: "President",
    year: "Senior",
    major: "Software Engineering",
    image: "/img/Mageto2024.png",
    linkedin: "https://www.linkedin.com/in/mageto-nyakoni-b50123209/"
  },
  {
    name: "Olu Akinyode",
    role: "Vice President",
    year: "Senior",
    major: "Computer Science",
    image: "/img/Olu_IMG_1823.jpeg",
    linkedin: "https://www.linkedin.com/in/olu-akinyode-74065a236/"
  },
  {
    name: "Maya Baptiste",
    role: "Secretary",
    year: "Senior",
    major: "Mechanical Engineer",
    image: "/img/Maya.png",
    linkedin: "https://www.linkedin.com/in/maya-baptiste/"
  },
  {
    name: "Ekemini John",
    role: "Treasurer",
    year: "Senior",
    major: "Information Systems & Technology",
    image: "/img/EJupdated.jpg",
    linkedin: "https://www.linkedin.com/in/ekemini-john-8614b723x/"
  },
  {
    name: "Blessing Ogunfowora",
    role: "Programs Chair",
    year: "Junior",
    major: "Computer Science",
    image: "/img/Blessing_Program_Chair.jpg",
    linkedin: "https://www.linkedin.com/in/blessingogunfowora/"
  },
  {
    name: "Abiola Alalade",
    role: "Parliamentarian",
    year: "Junior",
    major: "Computer Science",
    image: "/img/Abiola.png",
    linkedin: "https://www.linkedin.com/in/abiola-alalade-6401a6218"
  },
  {
    name: "Tolulope Allen-Taylor",
    role: "Senator",
    year: "Sophomore",
    major: "Computer Science",
    image: "/img/Professional_headshot_tolu.jpg",
    linkedin: "www.linkedin.com/in/tolulope-allen-taylor"
  },
  {
    name: "Caidin Albury",
    role: "Senator",
    year: "Sophomore",
    major: "Software Engineering",
    image: "/img/caidin.jpg",
    linkedin: "https://www.linkedin.com/in/caidin-albury-7b5318332/"
  },
  {
    name: "Ashley Usman",
    role: "Pre-College Initiative Chair",
    year: "Junior",
    major: "Computer Science",
    image: "/img/Ashley2024.jpg",
    linkedin: "https://www.linkedin.com/in/hafsat-m-usman/"
  },
  {
    name: "Smon Emahazien",
    role: "Historian",
    year: "Junior",
    major: "Computer Science",
    image: "/img/Smon.jpg",
    linkedin: "https://www.linkedin.com/in/smon-emahazien-480237225/"
  },
  {
    name: "Kennedy Nwokorie",
    role: "Academic Chair",
    year: "Junior",
    major: "Engineering",
    image: "/img/AJ.jpg",
    linkedin: "https://www.linkedin.com/in/kennedy-nwokorie-2b2a72234/"
  },
  {
    name: "Jaiden Ball",
    role: "Membership Chair",
    year: "Sophomore",
    major: "Software Engineering",
    image: "/img/Jaiden.jpg",
    linkedin: "https://www.linkedin.com/in/jaiden-ball-78969b2a4"
  },
  {
    name: "Samerawet Gorfe",
    role: "Convention Planning Chair",
    year: "Sophomore",
    major: "Computer Science",
    image: "/img/Samerawet.png",
    linkedin: "https://www.linkedin.com/in/samerawet-gorfe/"
  },
  {
    name: "Amon Ferow",
    role: "Finance Chair",
    year: "Senior",
    major: "Information Technology",
    image: "/img/Amon.jpg",
    linkedin: "https://www.linkedin.com/in/amonferow/"
  },
  {
    name: "Nykaela Burks",
    role: "Technology Chair",
    year: "Sophomore",
    major: "Computer Science",
    image: "/img/Nykaela Burks.jpg",
    linkedin: "https://www.linkedin.com/in/nykaela-burks/"
  },
  {
    name: "Laura Mullings",
    role: "Telecommunications Chair",
    year: "Seinor",
    major: "Computer Science",
    image: "/img/laura.jpg",
    linkedin: "https://www.linkedin.com/in/laura-mullings/"
  },
  {
    name: "Tsion Dessie",
    role: "Publication Chair",
    year: "Junior",
    major: "Software Engineering",
    image: "/img/Tsion Dessie.jpg",
    linkedin: "https://www.linkedin.com/in/tsion-dessie/"
  },
  {
    name: "Leila Igwegbe",
    role: "Finance Chair",
    year: "Sophomore",
    major: "Computer Science",
    image: "/img/leila-igwegbe.jpg",
    linkedin: "https://www.linkedin.com/in/leila-igwegbe/"
  },
  {
    name: "Victoria Nwosu",
    role: "Membership Chair",
    year: "Junior",
    major: "Mechanical Engineering",
    image: "/img/Vicky.jpg",
    linkedin: "https://www.linkedin.com/in/victoria-nwosu-146b45248/"
  }
];

interface TeamMember {
  name: string;
  role: string;
  year: string;
  major: string;
  image: string;
  linkedin: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex-shrink-0">
      <Image 
        src={member.image} 
        alt={member.name}
        width={128}
        height={128}
        className="w-32 h-32 object-cover rounded-lg"
      />
    </div>
    <div className="flex-grow">
      <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
      <span className="text-yellow-500 font-semibold">{member.role}</span>
      <p className="mt-2 text-gray-600">
        {member.year}<br />
        Major: {member.major}
      </p>
      <div className="mt-3">
        <a 
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <Linkedin className="w-5 h-5 mr-1" />
        </a>
      </div>
    </div>
  </div>
);

const TeamPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 -mt-16">
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Team</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300">
              Welcome to the UTD NSBE executive board! We are excited to meet you!
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="transform hover:-translate-y-1 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={200 + (index * 100)}
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TeamPage;