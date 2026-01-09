import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";
import logo from "../assets/iot-logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering future finance professionals with world-class ACCA
              education and training.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CDDC39] rounded-full flex items-center justify-center transition-colors group"
              >
                <Facebook size={18} className="group-hover:text-gray-900" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CDDC39] rounded-full flex items-center justify-center transition-colors group"
              >
                <Twitter size={18} className="group-hover:text-gray-900" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CDDC39] rounded-full flex items-center justify-center transition-colors group"
              >
                <Linkedin size={18} className="group-hover:text-gray-900" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CDDC39] rounded-full flex items-center justify-center transition-colors group"
              >
                <Instagram size={18} className="group-hover:text-gray-900" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#CDDC39] rounded-full flex items-center justify-center transition-colors group"
              >
                <Youtube size={18} className="group-hover:text-gray-900" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4">ACCA Levels</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Applied Knowledge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Applied Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Strategic Professional
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Ethics & Professional Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#CDDC39] transition-colors"
                >
                  Practical Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>123 Business Avenue</li>
              <li>Financial District</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#CDDC39] transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@accaexcellence.com"
                  className="hover:text-[#CDDC39] transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@accaexcellence.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Join the IOT family today to be the first to learn about our juicy
              offers and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#CDDC39] text-white"
              />
              <button className="bg-[#CDDC39] text-gray-900 px-8 py-3 rounded-full hover:bg-[#C0CA33] transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {year} ACCA Excellence. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#CDDC39] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#CDDC39] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#CDDC39] transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
