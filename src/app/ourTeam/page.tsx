import React from 'react';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Samri Gorfe",
    role: "President",
    year: "Senior",
    major: "Software Engineering",
    image: "/img/Samerawet.png",
    linkedin: "https://www.linkedin.com/in/samerawetgorfe/"
  },
  {
    name: "Jaiden Ball",
    role: "Vice President",
    year: "Junior",
    major: "Software Engineering",
    image: "/img/Jaiden.jpg",
    linkedin: "https://www.linkedin.com/in/jaiden-ball-78969b2a4"
  },
  {
    name: "Blessing Ogunfowora",
    role: "Secretary",
    year: "Senior",
    major: "Computer Science",
    image: "/img/Blessing_Program_Chair.jpg",
    linkedin: "https://www.linkedin.com/in/blessingogunfowora/"
  },
  {
    name: "Victoria Nwosu",
    role: "Treasurer",
    year: "Senior",
    major: "Mechanical Engineering",
    image: "/img/Vicky.jpg",
    linkedin: "https://www.linkedin.com/in/victoria-nwosu-146b45248/"
  },
  {
    name: "Olawale Ogunbanwo",
    role: "Parliamentarian",
    year: "Senior",
    major: "Computer Science",
    image: "/img/wale.jpg",
    linkedin: "http://www.linkedin.com/in/olawale-ogunbanwo-4426b9225"
  },
  {
    name: "Caidin Albury",
    role: "Membership Chair",
    year: "Sophomore",
    major: "Software Engineering",
    image: "/img/caidin.jpg",
    linkedin: "https://www.linkedin.com/in/caidin-albury-7b5318332/"
  },
  {
    name: "Tolulope Allen-Taylor",
    role: "Co-Finance Chair",
    year: "Junior",
    major: "Computer Information Systems and Technology",
    image: "/img/Professional_headshot_tolu.jpg",
    linkedin: "https://www.linkedin.com/in/tolulopeat/"
  },
  {
  name: "Emeka Ohumaegbulem",
  role: "Pre-College Initiative Chair",
  year: "Junior",            // update when you know it
  major: "Biomedical Engineering",           // update when you know it
  image: "/img/emeka.jpg", // replace with the actual headshot path
  linkedin: "https://www.linkedin.com/in/emeka-ohumaegbulem-a86195264/"
},
  {
    name: "Noha Markose",
    role: "Historian",
    year: "Junior",
    major: "Computer Science",
    image: "/img/noha.jpg", // replace with correct headshot
    linkedin: "https://www.linkedin.com/in/nohamarkose/"
  },
  {
    name: "Sami Yusuf",
    role: "Academic Chair",
    year: "Senior",
    major: "Information Technology and Systems",
    image: "/img/sami.jpg",
    linkedin: "https://www.linkedin.com/in/samihyusuf/"
  },
  ,
  {
    name: "Nykaela Burks",
    role: "Technology Chair",
    year: "Senior",
    major: "Computer Science",
    image: "/img/Nykaela Burks.jpg",
    linkedin: "https://www.linkedin.com/in/nykaela-burks/"
  },
  {
    name: "Laura Mullings",
    role: "Telecommunications Chair",
    year: "Senior",
    major: "Computer Science",
    image: "/img/laura.jpg",
    linkedin: "https://www.linkedin.com/in/laura-mullings/"
  },
  {
    name: "Hajar Abdulkadir",
    role: "Publications Chair",
    year: "Junior",
    major: "Software Engineering",
    image: "/img/hajar.jpg", // replace with correct headshot
    linkedin: "https://www.linkedin.com/in/hajarabdulkadir/"
  },
  {
    name: "Tamilore Oni",
    role: "Finance Chair - Fundraising",
    year: "Junior",
    major: "Computer Science",
    image: "/img/tami.jpg", // replace with correct headshot
    linkedin: "https://www.linkedin.com/in/oluwatamilore-oni-459375257/"
  },
  {
    name: "Izu Appio-Riley",
    role: "Finance Chair - Corporate",
    year: "Junior",
    major: "Computer Science",
    image: "/img/izu.jpg", // replace with correct headshot
    linkedin: "http://www.linkedin.com/in/izuappioriley"
  },
  {
    name: "Sowanate Amachree",
    role: "Mentorship Chair",
    year: "Senior",
    major: "Mechanical Engineering",
    image: "/img/sowanate.jpeg", // replace with correct headshot
    linkedin: "http://linkedin.com/in/sowanate-amachree"
  },
  {
    name: "Abioye Inioluwa",
    role: "Senator",
    year: "Sophomore",
    major: "Mechanical Engineering",
    image: "/img/ini.jpg", // replace with correct headshot
    linkedin: "https://www.linkedin.com/in/inioluwa-abioye-8132ba2aa/"
  },
  {
    name: "Chioma Ukaegbu",
    role: "Content Chair",
    year: "Sophomore",
    major: "Biomedical Engineering",
    image: "/img/chioma.jpg", // replace with correct headshot
    linkedin: "https://www.linkedin.com/in/chioma-ukagbu-31b511367/"
  },
  {
    name: "Nicole Urum Eke",
    role: "Conference Planning Chair",
    year: "Senior",
    major: "Computer Science",
    image: "/img/Nicole Eke.jpeg", // replace with correct headshot
    linkedin: "http://linkedin.com/in/nicoleurumeke"
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
      {/* Hero header */}
<div className="relative w-full h-[70vh] md:h-[80vh]">
  {/* Background image */}
  <Image
    src="/img/OurTeam2.jpg"
    alt="UTD NSBE"
    fill
    className="object-cover"
    priority
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Text overlay */}
  <div className="absolute inset-0 flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Our <span className="text-yellow-400">Team</span>
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-white/90">
          Welcome to the UTD NSBE executive board! We are excited to meet you!
        </p>
      </div>
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