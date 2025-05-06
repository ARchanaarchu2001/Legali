import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Ctohero from '../assets/images/CtoHero.jpg'

const CTAHero = () => {
  return (
    <section className="w-full bg-[#ffffff]">
      {/* Top Banner */}
      <div className="py-12 px-4 bg-[#ffffff]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            One-Stop Solution for All Your Document Processing Needs in the UAE
          </h2>
          <Link
            to="/contactUs"
            className="inline-block bg-[#b8985a] hover:bg-[#9c8544]  py-3 px-8 rounded-md font-medium transition-colors"
          >
            Call for Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Section - Split Content */}
      <div className="w-full">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative h-72 md:h-auto overflow-hidden border-r-2 border-[#b8985a]">
            <img
              src={Ctohero}
              alt="Document processing services"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="bg-[#fff]  p-8 md:p-12 flex flex-col justify-center border-t-2 md:border-t-0 border-[#b8985a]">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
              Your One-Stop Solution for Seamless Document Processing in the UAE
            </h3>

            <div className="space-y-4 text-black">
              <p>
                Whether you need document attestation, visa processing, business setup assistance, 
                or any other document-related service, Amazon Attestation and Documents Clearing is 
                your trusted partner.
              </p>
              <p>
                Experience a hassle-free and efficient approach to document processing in the UAE. 
                Contact us today to discover how we can simplify your journey. Your satisfaction is 
                our priority.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/contactUs"
                className="inline-flex text-black items-center bg-transparent bg-gradient-to-r from-[#b8985a] to-[#9c8544] hover:from-[#9c8544] hover:to-[#8B7500]  px-6 py-3 rounded-md font-medium transition-colors border border-[#b8985a]"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHero;
