import React from 'react';
import { MapPin, Users, Award, Phone, MessageSquare } from 'lucide-react';
import WhyChoose from '../assets/images/whyChooseUs.jpg'

const WhyChooseUsComponent = () => {
  const reasons = [
    {
      icon: <Award  className="w-12 h-12 text-[#ffffff]" />,
      title: 'Exceptional Service',
      description:
        'Our dedicated team provides exceptional customer service with a commitment to excellence.',
    },
    {
      icon: <Users  className="w-12 h-12 text-[#ffffff]" />,
      title: 'Trusted Experience',
      description:
        "We've built a reputation earning the trust of our valued clients through years of service.",
    },
    {
      icon: <MapPin className="w-12 h-12 text-[#ffffff]" />,
      title: 'UAE-Wide Coverage',
      description:
        'Serving clients across all seven emirates with accessible service no matter where you are.',
    },
  ];

  return (
    <section className="py-20 bg-white text-[#010101]">
      <div className="container mx-auto px-4">
        {/* Our Presence Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 
               className="text-4xl font-bold mb-6 text-[#b8985a]">
                Our Presence
              </h2>
              <p className="text-lg text-[#010101] mb-6">
                We proudly serve clients across the UAE, including Abu Dhabi,
                Dubai, Sharjah, Umm al-Quwain, Fujairah, Ajman, and Ras
                al-Khaimah. No matter where you are, our services are just a
                call away.
              </p>

              <div className="bg-[#302c20] rounded-lg p-6 border border-[#b8985a]/30 hover:border-[#b8985a] transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 flex items-center text-[#b8985a]">
                  <Phone 
                  className="w-5 h-5 mr-2 " />
                  Contact Us:
                </h3>
                <p className="mb-2 text-[#ffffff]">
                  For inquiries and assistance, please reach out to us at:
                </p>
                <p  className="font-medium text-[#b8985a]">
                  Call: +971 55 921 7176
                </p>
              </div>
            </div>

            {/* Simple Document Clearance Image */}
            <div className="relative h-96 rounded-2xl border border-[#b8985a]/30 overflow-hidden ">
              <img
                src= { WhyChoose }
                alt="Document Clearance Services"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold mb-6 text-[#010101]">
            Why Choose
            <span  
             className="text-[#b8985a] uppercase pl-2 pr-2">
              Legli Profile
            </span>
            Documents Clearing Services LLC
          </h2>
          <div  className="w-24 h-1 bg-[#b8985a] mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-lg text-[#010101]">
            Our dedicated team at{' '}
            <span 
            className=" font-semibold text-[#b8985a]">Legli Profile</span>{' '}
            specializes in providing exceptional customer service. Over the
            years, we have built a reputation for commitment to excellence,
            earning the trust of our valued clients. With a relentless attitude
            towards problem-solving, we offer innovative solutions to even the
            most complex challenges.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#302c20] rounded-xl p-8 border border-[#b8985a]/30 hover:border-[#b8985a] transition-all duration-300 hover:shadow-lg hover:shadow-[#b8985a]/10 flex flex-col items-center text-center group"
            >
              <div className="mb-5 bg-[#010101] p-4 rounded-full border  border-[#b8985a]/30 group-hover:border-[#b8985a] transition-all duration-300 ">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#b8985a]">
                {reason.title}
              </h3>
              <p className="text-[#ffffff]">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/971559217176" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gradient-to-r from-[#b8985a] to-[#9c8544] hover:from-[#9c8544] hover:to-[#b8985a] text-[#010101] px-2 py- 1 rounded-full shadow-lg shadow-[#b8985a]/20 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
  >
        <button className="bg-gradient-to-r from-[#b8985a] to-[#9c8544] hover:from-[#9c8544] hover:to-[#b8985a] text-[#010101] px-5 py-3 rounded-full shadow-lg shadow-[#b8985a]/20 flex items-center justify-center transition-all duration-300 transform hover:scale-105">
          <MessageSquare className="w-5 h-5 mr-2" />
          <span className="font-medium">Let's Chat!</span>
        </button>
        </a>
      </div>
    </section>
  );
};

export default WhyChooseUsComponent;
