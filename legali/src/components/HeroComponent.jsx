import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import heroImage from '../assets/images/heroSection.jpg'

const HeroComponent = () => {
  const services = [
    'Business Setup & License Renewal',
    'Document Attestation',
    'Visa Processing',
    'Emirates ID & Medical Typing',
    'PRO Services',
    'Tas-heel Services',
  ];

  const [imageSrc] = useState(heroImage);

  return (
    <div className="bg-[#ffffff]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1
            className="text-4xl md:text-5xl font-bold  leading-tight text-[#010101">
              Streamlined Document Solutions in the UAE
            </h1>
            <p className="text-xl text-[#010101]">
              Your trusted partner for attestation and document clearing services
              across all seven emirates.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#010101]">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-[#ffffff] bg-[#9c8544] rounded-xl" />
                    <span className="text-[#010101]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/services"
                className="bg-[#b8985a] hover:bg-[#9c8544] text-[#010101]  py-3 px-6 rounded-md font-medium text-center transition-colors border border-[#b8985a]"
              >
                Explore Our Services
              </a>
              <a
                href="/contactUs"
                className="bg-transparent hover:bg-[#302c20]  hover:text-[#ffffff] text-[#010101] border border-1-[#b8985a] py-3 px-6 rounded-md font-medium text-center transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border-2 border-[#b8985a]">
            <img
              src={imageSrc}
              alt="Business professionals meeting"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#302c20]/90 to-transparent p-6">
              <p className="text-[#ffffff]  text-lg font-medium">
                We serve individual investors, startups, and enterprises across UAE
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div 
      className=" bg-[#302c20] text-[#ffffff] py-8 border-t-2 border-[#b8985a]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl">
            Comprehensive business setup services across all 7 emirates - documentation, licensing, 
            visa services, and bank account opening.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
