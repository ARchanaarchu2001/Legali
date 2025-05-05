import { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom'; // react-router-dom for routing
import BusinessSetup from '../assets/icons/BusinessSetup.png'
import Embassymofa from '../assets/icons/embassyMofa.png'
import Progovernment from '../assets/icons/ProGovernment.png'
import Visawork from '../assets/icons/VisaWork.png'

const ServicesSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const serviceCategories = [
    {
      title: "Business Setup",
      icon: BusinessSetup, // Adjust path if necessary
      description: "We offer a range of services to assist all types of companies in setting up their operations in the UAE.",
      services: [
        "Company formation Services",
        "Licensing processing services",
        "Industrial license in Dubai",
        "Commercial license in Dubai",
        "Professional & Civil license",
        "Branch of a Local Company",
        "Representative Office",
        "Trade license renewal",
        "LLC Agreement / Memorandum of Association",
        "LLC Amendment and Share Sale Agreement",
        "Business Partnership Contract & Supplement Agreements",
        "Side agreement protecting investors",
        "Business Sales Agreement"
      ]
    },
    {
      title: "Embassy & MOFA Attestation",
      icon: Embassymofa, // Adjust path if necessary
      description: "We specialize in attesting a variety of documents, including:",
      services: [
        "Degree Certificate Attestation",
        "Birth Certificate Attestation",
        "Marriage Certificate Attestation",
        "Commercial Documents Attestation",
        "Police Clearance Attestation",
        "Medical Report Attestation",
        "Power of Attorney Attestation",
        "Translation Services",
        "Document Delivery Service"
      ]
    },
    {
      title: "Visa & Work Permit in UAE",
      icon: Visawork, // Adjust path if necessary
      description: "We assist with various visa and work permit services, including:",
      services: [
        "Business visa, renewal & cancellation",
        "Visit Visa 30,60,90 Days",
        "Tourist Visa 30,60 days",
        "Family and Dependent Visa",
        "Visa renewal & cancellation",
        "Residence visa and work permit",
        "Maid visa, renewal & cancellation",
        "Labour & Immigration services",
        "Bank Guarantee/E-guarantee deposit service for employment visa"
      ]
    },
    {
      title: "PRO & Government Services",
      icon: Progovernment, // Adjust path if necessary
      description: "Professional services to handle your government-related procedures:",
      services: [
        "PRO Service",
        "RTA License and Vehicle Renewal online services",
        "Police Clearance Certificate Online Application",
        "Ejari (Tenancy Contract online Registration)",
        "Local Service Agent Contract",
        "Online medical booking",
        "Online health card renewal",
        "Power of Attorney",
        "Memorandum of Understanding (MoU)"
      ]
    }
  ];


 
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#010101] mb-4">Our Services</h2>
          <p className="text-lg text-[#010101] max-w-3xl mx-auto">
            We offer a range of services to assist all types of companies and individuals with their operations in the UAE.
            Our services include:
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#010101] rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[#b8985a]/30"
            >
              {/* Card Header */}
              <div className="p-6 text-center border-b border-[#b8985a]/30">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-[#010101]">
                  <img 
                    src={category.icon} 
                    alt={category.title} 
                    width={60} 
                    height={60} 
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#b8985a]">{category.title}</h3>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <p className="text-[#ffffff] mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.slice(0, 5).map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#b8985a] mt-0.5 mr-2 shrink-0" />
                      <span className="text-[#ffffff]">{service}</span>
                    </li>
                  ))}
                  {category.services.length > 5 && (
                    <li className="text-[#b8985a] font-medium text-sm mt-2">
                      +{category.services.length - 5} more services
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion Layout */}
        <div className="md:hidden space-y-4">
          {serviceCategories.map((category, index) => (
            <div 
              key={index} 
              className="border border-[#b8985a]/30 rounded-lg overflow-hidden shadow-sm"
            >
              {/* Accordion Header */}
              <button 
                className="w-full flex items-center justify-between p-4 bg-[#302c20] text-left"
                onClick={() => toggleCategory(index)}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#010101] flex items-center justify-center mr-3 shrink-0">
                    <img 
                      src={category.icon} 
                      alt={category.title} 
                      width={30} 
                      height={30} 
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-semibold text-[#b8985a]">{category.title}</h3>
                </div>
                {expandedCategory === index ? (
                  <ChevronUp className="w-5 h-5 text-[#b8985a]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#b8985a]" />
                )}
              </button>
              
              {/* Accordion Content */}
              {expandedCategory === index && (
                <div className="p-4 bg-[#010101] border-t border-[#b8985a]/30">
                  <p className="text-[#ffffff] mb-4 text-sm">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-[#b8985a] mt-0.5 mr-2 shrink-0" />
                        <span className="text-[#ffffff]">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#404040] to-[#010101] rounded-xl p-8 mx-auto max-w-4xl shadow-xl border border-[#b8985a]">
            <h3 className="text-2xl font-bold text-[#b8985a] mb-4">Need assistance with any of our services?</h3>
            <p className="text-[#ffffff] mb-6 max-w-xl mx-auto">
              Contact our team of professionals for personalized guidance tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contactUs">
                <button className="bg-[#b8985a] hover:bg-[#9c8544] text-[#010101]  px-6 py-3 rounded-md font-medium transition-colors border border-[#b8985a]">
                  Contact Us
                </button>
              </Link>
              {/* <button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors">
                Request a Quote
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
