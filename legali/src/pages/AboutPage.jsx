// components/AboutUs.jsx
import React from "react";
import { Clock, Award, Users, FileText } from "lucide-react";
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/FooterComponent";
import { Link } from "react-router-dom"; // Required for routing
import About from '../assets/images/aboutUs.jpg'
import AboutHero from '../assets/images/aboutUsHero.jpg'

const AboutUs = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg-black">
        {/* Hero Section */}
        <section className="relative bg-[#b8985a]  py-2">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  About Our Company
                </h1>
                <p className="text-lg md:text-xl opacity-90">
                  Providing trusted document clearance and court services since 2023
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden border-2  border-[#b8985a]">
                <img
                  src= {AboutHero}
                  alt="Descriptive text"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <style jsx>{`
            .bg-navy-blue {
              background-color: #0a192f;
            }
          `}</style>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-[#ffffff]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-xl border-2 border-[#b8985a]">
                  <img
                    src={ About }
                    alt="Description of image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-black">Our Story</h2>
                <p className="text-black mb-4">
                  Founded in 2023, our document clearance company was established with a
                  mission to simplify the complex world of legal documentation and court
                  services. What began as a small team of dedicated professionals has
                  grown into a trusted partner for individuals and businesses throughout
                  the region.
                </p>
                <p className="text-[#ffffff]">
                  With expertise in court services and document processing, we've built
                  our reputation on efficiency, accuracy, and exceptional customer
                  service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 bg-[#9c8544]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold  mb-4">Our Expertise</h2>
              <p className=" max-w-2xl mx-auto">
                We specialize in court services and document processing, helping our
                clients navigate complex legal requirements with ease and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Expertise Cards */}
              {[{
                Icon: FileText, title: "Court Services", desc: "Expert assistance for legal proceedings and filings."
              }, {
                Icon: Clock, title: "Quick Processing", desc: "Fast and efficient document handling."
              }, {
                Icon: Award, title: "Expert Guidance", desc: "Navigate documentation with confidence."
              }].map(({ Icon, title, desc }, index) => (
                <div key={index} className="bg-[#ffffff] p-6 rounded-lg shadow-md border  border-[#b8985a]">
                  <div className="bg-[#b8985a] p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-black" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#b8985a]">{title}</h3>
                  <p className="text-black">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-[#ffffff]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h2 className="text-3xl font-bold mb-6 text-black ">Why Choose Us</h2>
                <ul className="space-y-4 bg-[#ffffff]">
                  {[
                    {
                      title: "Industry Expertise",
                      desc: "Specialized knowledge of court systems and document requirements.",
                    },
                    {
                      title: "Client-Centered Approach",
                      desc: "Personalized service and clear communication throughout.",
                    },
                    {
                      title: "Efficiency & Reliability",
                      desc: "Timely processing and accurate results, every time.",
                    }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-[#b8985a] p-2 rounded-full mr-3 mt-1">
                        <div className="w-4 h-4 bg-black rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-black ">{item.title}</h3>
                        <p className="text-black">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2">
                <div className="bg-[#302c20] p-8 rounded-lg shadow-lg border border-[#b8985a]">
                  <div className="text-center mb-6">
                    <Users size={48} className="text-[#b8985a]  mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#b8985a]">Our Commitment</h3>
                  </div>
                  <p className="mb-6 text-[#ffffff]">
                    We're committed to making document clearance and court services accessible,
                    understandable, and stress-free.
                  </p>
                  <div className="text-center">
                    <Link to="/contactUs">
                      <button className="text-black bg-[#b8985a] hover:bg-[#9c8544]  py-3 px-6 rounded-lg font-medium transition-colors">
                        Contact Our Team
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
