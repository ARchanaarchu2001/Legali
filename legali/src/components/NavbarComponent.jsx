import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Img } from 'react-image';
import LegliLogo from '../assets/icons/LegliLogo.png';
import { X } from 'lucide-react';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close services dropdown when toggling the main menu
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const toggleMobileServices = (e) => {
    e.stopPropagation();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true 
    },
    // { name: "Portfolio", href: "/portfolio" },
    { name: "Contact Us", href: "/contactUs" },
  ];

  const servicesList = [
    { title: "PRO Service", slug: "pro-service" },
    { title: "RTA License and Vehicle Renewal", slug: "rta-license" },
    { title: "Translation Services", slug: "translation-services" },
    { title: "Police Clearance Certificate", slug: "police-clearance" },
    { title: "Ejari Registration", slug: "ejari-registration" },
    { title: "Document Delivery Service", slug: "document-delivery" },
    { title: "LLC Agreement / MOA", slug: "llc-agreement" },
    { title: "Local Service Agent Contract", slug: "local-service-agent" },
    { title: "Business Partnership Contract & Supplement Agreements", slug: "business-partnership-contract" },
    { title: "Legal protection for investor interests", slug: "side-agreement-investors" },
    { title: "Online Medical Booking", slug: "online-medical-booking" },
    { title: "Online Health Card Renewal", slug: "online-health-card-renewal" },
    { title: "Power of Attorney", slug: "power-of-attorney" },
    { title: "Memorandum of Understanding (MoU)", slug: "memorandum-of-understanding" },
    { title: "Business Sales Agreement", slug: "business-sales-agreement" },
    { title: "Labour & Immigration Services", slug: "labour-immigration-services" },
    { title: "Bank Guarantee", slug: "bank-guarantee-service" }
  ];

  return (
    <>
      <nav  className="bg-white sticky top-0 z-50 bg- shadow-md ">
        <div  className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <Img
                  src={LegliLogo}
                  alt="Legali Profile Logo"
                  width={40}
                  height={40}
                  className="h-20 w-16 object-contain"
                />
                <span  style={{ color: '#B8985A' }} className="text-2xl font-bold text-slate-800 uppercase">
                  Legli Profile
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div  className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div 
                    key={item.name}
                    ref={servicesRef}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link
                      to={item.href}
                      // style={{ color: '#010101' }}
                      className="hover:text-[#b8985a] transition-colors font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </Link>
                    
                    {isServicesDropdownOpen && (
                      <div className="absolute left-0 top-[calc(100%_-_8px)] mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 max-h-96 overflow-y-auto">
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#b8985a] hover:text-[#ffffff]"
                            onClick={() => setIsServicesDropdownOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    
                    className=" text-bold hover:text-[#b8985a] transition-colors font-medium flex items-center"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Language + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="tel:+971 559217176"
                
                className=" bg-transparent hover:bg-[#302c20] text-[#b8985a] py-2 px-4 rounded-md flex items-center transition-colors border border-[#b8985a]"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>+971 55 921 7176</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#b8985a]"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Completely separate mobile menu */}
      {isMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 bg-white z-50 md:hidden"
          style={{ top: '88px' }} // Adjust based on your navbar height
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="flex flex-col">
                  <button 
                    className="text-gray-700 hover:text-[#b8985a] transition-colors font-medium text-lg flex items-center justify-between py-2 border-b border-gray-100"
                    onClick={toggleMobileServices}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileServicesOpen && (
                    <div className="pl-4 mt-2 border-l-2 border-[#b8985a] flex flex-col space-y-3 py-2">
                      {servicesList.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="text-base text-gray-600 hover:text-[#b8985a] py-1"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-[#b8985a] transition-colors font-medium text-lg py-2 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="tel:+971559217176"
              className="bg-transparent hover:bg-[#302c20] text-[#b8985a] border py-3 px-4 rounded-md flex items-center justify-center transition-colors mt-4 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-5 h-5 mr-2 " />
              <span>Call Us: +971 559217176</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;