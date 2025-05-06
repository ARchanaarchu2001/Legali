// src/pages/ContactUs.jsx
import { useState } from "react";
import Footer from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "document-clearance",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
  
    // Simulate form submission with a delay
    setTimeout(() => {
      try {
        // Simulate successful submission
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
      } catch (error) {
        setErrorMessage(
          "There was an error submitting your form. Please try again."
        );
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f3]">
      <NavbarComponent />

      {/* Hero Section */}
      <div className="bg-[#b8985a] text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">
              Our team of document clearance specialists is ready to assist you
              with any questions or requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Information Panel */}
            <div className="bg-gradient-to-br from-[#302c20] to-black text-white p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-6 text-[#fff]">Get in Touch</h2>
              <p className="text-white mb-8">
                Whether you need document clearance services or have questions
                about our process, our team is ready to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b8985a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#b8985a]">Phone</h3>
                    <p className="text-white">+971 55 921 7176</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b8985a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#b8985a]">Email</h3>
                    <p className="text-white">usmanali@legliprofile.ae</p>
                    <p className="text-white">mianasim@legliprofile.ae</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b8985a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#b8985a]">Location</h3>
                    <p className="text-white">
                      Office Number 207, Arzoo Building,<br />
                      Al Qusais 2, Near Al Tawar Center <br />
                      Dubai
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#b8985a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#b8985a]">Business Hours</h3>
                    <p className="text-white">
                      Monday - Friday: 9AM - 6PM
                      <br />
                      Saturday: 10AM - 2PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61573570981441"
                    className="bg-[#b8985a] hover:bg-opacity-80 p-2 rounded-full transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                      href="https://www.instagram.com/legliprofile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#b8985a] hover:bg-opacity-80 p-2 rounded-full transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </a>


                  
                  <a
                      href="https://www.tiktok.com/@legliprofile?_t=ZS-8w6PLaJxm30&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="bg-[#b8985a] hover:bg-opacity-80 p-2 rounded-full transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="w-5 h-5 text-white hover:text-white transition-colors duration-300"
                      >
                        <path d="M232,80a8,8,0,0,1-8,8A72.1,72.1,0,0,1,160,61.3V160a56,56,0,1,1-56-56,8,8,0,0,1,0,16,40,40,0,1,0,40,40V32a8,8,0,0,1,8-8h24a8,8,0,0,1,8,8,48.1,48.1,0,0,0,48,48A8,8,0,0,1,232,80Z"/>
                      </svg>
                    </a>

                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="p-8 lg:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-[#b8985a] bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#b8985a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#302c20] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your message has been successfully sent. We will contact you
                    very soon!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-[#b8985a] text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#b8985a] focus:ring-offset-2 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#302c20] mb-6">
                    Send Us a Message
                  </h2>
                  {errorMessage && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                      <p>{errorMessage}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#302c20] mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b8985a] focus:border-[#b8985a]"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#302c20] mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b8985a] focus:border-[#b8985a]"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#302c20] mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b8985a] focus:border-[#b8985a]"
                          placeholder="john.doe@example.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#302c20] mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b8985a] focus:border-[#b8985a]"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-[#302c20] mb-1"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b8985a] focus:border-[#b8985a]"
                        required
                      >
                        <option value="document-clearance">
                          Document Clearance
                        </option>
                        <option value="legal-consultation">
                          Legal Consultation
                        </option>
                        <option value="document-verification">
                          Document Verification
                        </option>
                        <option value="compliance-services">
                          Compliance Services
                        </option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#302c20] mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#b8985a] focus:border-[#b8985a]"
                        placeholder="Please describe how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="privacy-policy"
                        name="privacy-policy"
                        type="checkbox"
                        className="h-4 w-4 text-[#b8985a] focus:ring-[#b8985a] border-gray-300 rounded"
                        required
                      />
                      <label
                        htmlFor="privacy-policy"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-[#b8985a] hover:text-opacity-80"
                        >
                          Privacy Policy
                        </a>{" "}
                        and consent to being contacted regarding my inquiry.
                      </label>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#b8985a] text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#b8985a] focus:ring-offset-2 transition-colors ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#302c20] mb-6">
            Our Location
          </h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden h-96 relative shadow-lg border-3 border-[#b8985a]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.187998276406!2d55.38271527623522!3d25.264260528979502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5daf372d33c9%3A0x56ffe8b35b0dfd98!2sARZOO%20BUILDING!5e0!3m2!1sen!2sin!4v1744366109442!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[#b8985a] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#b8985a] shadow-md">
              <h3 className="text-lg font-medium text-[#b8985a]  mb-2">
                What is document clearance?
              </h3>
              <p className="text-gray-600">
                Document clearance is the process of verifying, authenticating,
                and obtaining necessary approvals for legal and official
                documents to ensure they meet all regulatory requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#b8985a] shadow-md">
              <h3 className="text-lg font-medium text-[#b8985a] mb-2">
                How long does the document clearance process take?
              </h3>
              <p className="text-gray-600">
                The timeframe varies depending on document type and
                jurisdictions involved. Standard clearance typically takes 3-5
                business days, while expedited services can be completed within
                24-48 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#b8985a] shadow-md">
              <h3 className="text-lg font-medium text-[#b8985a] mb-2">
                What documents do you handle?
              </h3>
              <p className="text-gray-600">
                We handle a wide range of documents including corporate filings,
                contracts, powers of attorney, educational credentials,
                immigration documents, and many other legal and official
                documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#b8985a] shadow-md">
              <h3 className="text-lg font-medium text-[#b8985a] mb-2">
                Do you offer international document services?
              </h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive international document services
                including apostille, authentication, legalization, and
                translation services for documents that need to be used abroad.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default ContactUs;