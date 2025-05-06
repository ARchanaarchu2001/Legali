import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import  { services }  from '../data/Service'; // Adjust import based on your file structure
import { useParams } from 'react-router-dom';

const ServiceIdPage = () => {
  const { serviceId } = useParams(); // Get the serviceId from URL params
  const service = services.find((service) => service.slug === serviceId);

  if (!service) return <div>Service not found</div>;

  return (
    <>
      <NavbarComponent />
      <main className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#302c20]">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  leading-tight text-black">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <p className=" mb-10 max-w-2xl text-black">
                  {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  
                  
                  <a
                    href="/contactUs"
                    className="bg-[#b8985a] hover:bg-[#9c8544] text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
>
                     Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    </a>
                 
                  
                  <a
                    href="/contactUs"
                    className="bg-white text-black border border-[#9c8544] hover:border-[#b8985a]  py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-md">
                
                        Schedule Consultation</a>
                  
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3 relative rounded-xl overflow-hidden shadow-2xl bg-[#302c20]">
                  {/* Replace this div with the actual image when available */}
                  <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-6">
                  <img
                   src={service.image} // Assuming 'service.image' is the image source or URL
                   alt={service.title} // Alt text for the image
                   className="w-full h-full" // Ensures image covers the space properly
            />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="hidden md:block absolute -bottom-8 -left-8 w-24 h-24 bg-[#b8985a] rounded-full z-0"></div>
                <div className="hidden md:block absolute -top-8 -right-8 w-32 h-32 bg-[#9c8544] rounded-full z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-black text-3xl md:text-4xl font-bold mb-6 ">
                Key Features
              </h2>
              <p className="text-xl text-black">
                Our {service.title.toLowerCase()} services are designed to
                deliver exceptional results that drive your business forward.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="text-black hover:bg-[#9c8544] rounded-xl p-6 transition-all duration-300 border border-[#b8985a] hover:border-[#b8985a] hover:shadow-md group"
                >
                  <div className="w-14 h-14 bg-[#b8985a] rounded-lg flex items-center justify-center mb-6  group-hover:bg-[#9c8544]  group-hover:text-white transition-all duration-300">
                    {/* Feature icon - replace with appropriate icons */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl text-black font-semibold mb-3  group-hover:text-white transition-all duration-300">
                    {feature}
                  </h3>
                  <p className="text-black  group-hover:text-white transition-all duration-300">
                    Our experts ensure this feature is implemented to the
                    highest standards for maximum effectiveness.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-[#fff]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl text-black md:text-4xl font-bold mb-4 ">
                Our Process
              </h2>
              <p className="text-lg text-black">
                A thoughtful approach for exceptional results
              </p>
            </div>

            <div className="relative mt-16">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#9c8544] transform -translate-x-1/2"></div>

              <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-20 relative">
                {[{ title: 'Discovery & Analysis', description: 'Understanding your goals and requirements to create a strategic foundation.' },
                  { title: 'Strategy & Planning', description: 'Developing a clear roadmap with defined milestones and deliverables.' },
                  { title: 'Design & Development', description: 'Creating solutions with modern best practices and technologies.' },
                  { title: 'Testing & Launch', description: 'Thorough quality assurance before a seamless deployment.' }]
                  .map((step, index) => (
                    <div key={index} className={`relative ${index % 2 === 1 ? "md:mt-24" : ""}`}>
                      <div
                        className={`hidden md:flex absolute top-6 -translate-y-1/2 ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} w-10 h-10 rounded-full bg-[#b8985a] shadow-sm items-center justify-center z-10 border-2 border-white`}>
                        <div className="w-4 h-4 rounded-full bg-[#9c8544]"></div>
                      </div>

                      <div
                        className={`bg-[#9c8544] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative ${index % 2 === 0 ? "md:mr-6 md:text-right" : "md:ml-6"}`}>
                        <span className="inline-block mb-2 px-3 py-1 text-xs font-medium rounded-full bg-black text-[#fff]">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold mb-3 text-[#fff]">
                          {step.title}
                        </h3>
                        <p className="text-[#fff]">{step.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-[#ffffff]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-black text-3xl md:text-4xl font-bold mb-6 ">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-black">
                Find answers to common questions about our {service.title.toLowerCase()} services.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'How do I get started?',
                  answer: 'Getting started is easy! Just contact us to schedule a consultation and discuss your project needs.',
                },
                {
                  question: 'What makes your service different?',
                  answer: 'We focus on providing personalized and innovative solutions, with a strong emphasis on results and customer satisfaction.',
                },
                {
                  question: 'What is the pricing model?',
                  answer: 'Our pricing is flexible and depends on the scope and complexity of the project. Contact us for a detailed quote.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-[#302c20] shadow-md rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#fff]">{item.question}</h3>
                    <button
                      className="text-[#9c8544] focus:outline-none"
                      onClick={() => document.getElementById(`answer-${index}`).classList.toggle('hidden')}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id={`answer-${index}`}
                    className="mt-4 text-[#fff] hidden"
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceIdPage ;
