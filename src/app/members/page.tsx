import React from 'react';
import { Shirt, Clock, Calendar } from 'lucide-react';
import Image from 'next/image';

interface BenefitCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="p-3 bg-yellow-100 rounded-full">
        <Icon className="w-6 h-6 text-yellow-600" />
      </div>
      <h3 className="ml-4 text-xl font-semibold text-black">{title}</h3>
    </div>
    <p className="text-black">{description}</p>
  </div>
);

const MembershipPage = () => {
  const benefits = [
    {
      icon: Shirt,
      title: "T-Shirt",
      description: "Members will get an exclusive UTD NSBE T-shirt when they pay their dues!"
    },
    {
      icon: Clock,
      title: "Priority Registration",
      description: "Events such as the NSBE Regional Conference V, you will have priority to go there with the rest of NSBE!"
    },
    {
      icon: Calendar,
      title: "Member Exclusive Events",
      description: "Some exciting events will be hosted for members only throughout the school year!"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            How to become a <span className="text-yellow-500">Member</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-black">Membership Instructions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Step 1: Pay Dues ($35)</h3>
                  <p className="text-black mb-4">Choose your preferred payment method:</p>
                  <div className="flex gap-6 mb-4">
                    <a 
                      href="https://account.venmo.com/u/nsbeutd" 
                      className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Image src="/img/App_Icon.png" alt="Venmo" width={24} height={24} className="mr-2" />
                      Venmo
                    </a>
                    <a 
                      href="https://cash.app/$nsbeutd" 
                      className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <Image src="/img/CashApp.png" alt="Cash App" width={24} height={24} className="mr-2" />
                      Cash App
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Step 2: Confirm Payment</h3>
                  <p className="text-black">
                    After payment, please send a screenshot to utdnsbe@outlook.com
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Alternative Payment</h3>
                  <p className="text-black">
                    Cash payments are also accepted during any NSBE meeting
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-black">Member Benefits</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MembershipPage;