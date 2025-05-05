import React from 'react';
import { Link } from 'react-router-dom'; // Use react-router-dom for routing
import Service1 from '../assets/images/Services1.jpg'
import Service2 from '../assets/images/documentproces.jpg'
import Logo1 from '../assets/images/Logo1.webp'
import Logo2 from '../assets/images/Logo2.png'
import Logo3 from '../assets/images/Logo3.png'
import Logo4 from '../assets/images/Logo4.png'
import Logo5 from '../assets/images/Logo5.png'
import Logo6 from '../assets/images/Logo6.png'

import Marquee from "react-fast-marquee"

// Importing Components
import NavbarComponent from '../components/NavbarComponent';  // Adjust the path based on your file structure
import Footer from '../components/FooterComponent';  // Adjust the path based on your file structure

// Icon Components
const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);


const images = [
  {src: Logo1, alt : "Logo"} ,
  {src: Logo2, alt : "Logo"} ,
  {src: Logo3, alt : "Logo"} ,
  {src: Logo4, alt : "Logo"} ,
  {src: Logo5, alt : "Logo"} ,
  {src: Logo6, alt : "Logo"} ,

]



const ServicesPage = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg-[#ffffff] min-h-screen">
        {/* Hero Section */}
        <div className="bg-[#] text-[#010101]">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-8">
                Welcome to Amazon Attestation and Documents Clearing, your trusted partner for a
                comprehensive range of document-related services in the UAE. We specialize in providing
                efficient, hassle-free solutions to meet your specific needs. With a commitment to excellence
                and a deep understanding of the intricacies of document processing, we ensure that your
                requirements are met promptly and professionally.
              </p>
              <a href="/contactUs">
                <button className="bg-[#b8985a] hover:bg-[#9c8544] text-[#010101]  font-medium py-3 px-8 rounded-md transition duration-300">
                  Call Us Now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Workspace Solutions */}
            <div className="service-card bg-[#302c20] rounded-lg overflow-hidden shadow-lg border border-[#b8985a]">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-[#b8985a] mr-3">
                    <BuildingIcon />
                  </div>
                  <h2 className="text-2xl font-bold text-[#b8985a]">Workspace Solutions</h2>
                </div>
                <p className="text-[#ffffff] mb-6">
                  Welcome to Amazon Attestation and Documents Clearing, where we offer tailored workspace solutions to meet the unique needs of individuals and businesses in the UAE. Our commitment to providing flexible and customizable workspace solutions sets us apart, allowing you to work with ease and efficiency.
                </p>
                <Link to="/workspace-solutions" className="inline-flex items-center text-[#b8985a] font-medium hover:text-[#9c8544]">
                  Learn more
                  <span className="ml-2">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
              <div className="h-64 bg-gray-200">
                <img 
                  src={Service1}
                  alt="Workspace Solutions" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Document Processing */}
            <div className="service-card bg-[#302c20] rounded-lg overflow-hidden shadow-lg border border-[#b8985a]">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-[#b8985a] mr-3">
                    <DocumentIcon />
                  </div>
                  <h2 className="text-2xl font-bold text-[#b8985a]">Document Processing</h2>
                </div>
                <p className="text-[#ffffff] mb-6">
                  At Amazon Attestation and Documents Clearing, we take pride in offering a comprehensive suite of document processing services designed to meet your unique needs. With a deep understanding of the intricacies of document requirements and government procedures in the UAE, we are your trusted partner for efficient, reliable, and hassle-free document processing.
                </p>
                <Link to="/document-processing" className="inline-flex items-center text-[#b8985a] font-medium hover:text-[#9c8544]">
                  View our services
                  <span className="ml-2">
                    <ArrowRightIcon />
                  </span>
                </Link>
              </div>
              <div className="h-64 bg-gray-200">
                <img 
                  src={Service2}
                  alt="Document Processing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-[#ffffff] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#010101]">Our Specialized Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-[#302c20] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-[#b8985a]">
                <div className="bg-[#010101] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <div className="text-[#ffffff]">
                    <DocumentIcon />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-[#b8985a]">Document Attestation</h3>

                <p className="text-[#ffffff] text-center">
                  Professional attestation services for all types of documents required for UAE official processes.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-[#302c20] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-[#b8985a]">
                <div className="bg-[#010101] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffffff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-[#b8985a]">Visa Processing</h3>
                <p className="text-[#ffffff] text-center">
                  Streamlined visa application and processing for individuals and businesses in the UAE.
                </p>
              </div>
                        {/* Service 3 */}
          <div className="bg-[#302c20] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border border-[#b8985a]">
            <div className="bg-[#010101] rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <span className="text-[#ffffff]">
                      <CalendarIcon />
                    </span>
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-[#b8985a]">PRO Services</h3>
            <p className="text-[#ffffff] text-center">
              Expert Public Relations Officer (PRO) support to handle government paperwork and business setup.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="logo-container flex w-full overflow-hidden  bg-white">
            <Marquee pauseOnHover>
            {images.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-24 w-auto sm:h-32  px-4 py-4 mx-5"
              />
              
            ))}
             {images.map(({ src, alt }, index) => (
              <img
                key={index}
                src={src}
                alt={alt}
                className="flex-none h-24 w-auto sm:h-32 px-4  py-4 mx-5"
              />
              
            ))}
          </Marquee>
          </div>

    {/* CTA Section */}
    <div className="bg-[#302c20] py-12">
      <div className="container mx-auto px-4 text-center text-[#ffffff]">
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
          <ChatIcon />
          <p className="text-lg font-medium">Have Questions? Our experts are here to help!</p>
        </div>
        <a href="tel:++971 55 921 7176">
          <button className="bg-[#b8985a] hover:bg-[#9c8544] text-[#010101] font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  </div>
  <Footer />
</>
  )}
  export default ServicesPage;
