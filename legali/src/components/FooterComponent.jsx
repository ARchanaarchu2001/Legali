import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#302c20] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legli Profile</h3>
            <p className="text-white hover:text-gray-400">
              Professional document clearance and legal services for individuals
              and businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white hover:text-gray-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="/aboutUs" className="text-white hover:text-gray-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contactUs" className="text-white hover:text-gray-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/document-delivery" className="text-white hover:text-gray-400 transition-colors">Document Clearance</a>
              </li>
              <li>
                <a href="/services/side-agreement-investors" className="text-white hover:text-gray-400 transition-colors">Legal Consultation</a>
              </li>
              <li>
                <a href="/services/police-clearance" className="text-white hover:text-gray-400 transition-colors">Police Clearence</a>
              </li>
              <li>
                <a href="/services/ejari-registration" className="text-white hover:text-gray-400 transition-colors">Ejari Registration</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white ">
              <li><MapPin className="inline-block w-4 h-4 mr-2" /> Office Number 207, Arzoo Building, Al Qusais 2, </li>
              <li>Near AL Tawar Center, Dubai</li>
              <li><Mail className="inline-block w-4 h-4 mr-2" /> usmanali@legliprofile.ae</li>
              <li><Phone className="inline-block w-4 h-4 mr-2" /> +971 55 921 7176</li>
              <li><Clock className="inline-block w-4 h-4 mr-2" /> Monday to Saturday : 10am to 6pm</li>
              <li><Clock className="inline-block w-4 h-4 mr-2 opacity-0" /> Friday : 3pm to 7pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Legli Profile. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61573570981441" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook/>
            </a>
            
            <a href="https://www.instagram.com/legliprofile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a
                href="https://www.tiktok.com/@legliprofile?_t=ZS-8w6PLaJxm30&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M232,80a8,8,0,0,1-8,8A72.1,72.1,0,0,1,160,61.3V160a56,56,0,1,1-56-56,8,8,0,0,1,0,16,40,40,0,1,0,40,40V32a8,8,0,0,1,8-8h24a8,8,0,0,1,8,8,48.1,48.1,0,0,0,48,48A8,8,0,0,1,232,80Z"/>
                </svg>
              </a>



          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
