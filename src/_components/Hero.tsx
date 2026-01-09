import { useState } from "react";
import logo from "../assets/iot-logo.png";
import { ArrowRight, Menu } from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuContent = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative bg-linear-to-br from-[#CDDC39] to-[#AFB42B] overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#programs"
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              Programs
            </a>
            <a
              href="#benefits"
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-gray-700 transition-colors"
            >
              Contact
            </a>
            <a
              href="/"
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Enroll Now
            </a>
          </div>

          <button
            className="md:hidden text-gray-900 cursor-pointer"
            onClick={handleMenuContent}
          >
            <Menu size={36} />
          </button>

          {isMenuOpen && (
            <div className="z-10 absolute top-16 right-4 bg-white rounded-lg shadow-lg p-6 space-y-4 md:hidden">
              <a
                href="#programs"
                className=" block"
                onClick={handleMenuContent}
              >
                Programs
              </a>
              <a href="#benefits" className="block" onClick={handleMenuContent}>
                Benefits
              </a>
              <a
                href="#testimonials"
                className="block"
                onClick={handleMenuContent}
              >
                Testimonials
              </a>
              <a href="#contact" className="block" onClick={handleMenuContent}>
                Contact
              </a>
              <a
                href="/"
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors block"
                onClick={handleMenuContent}
              >
                Enroll Now
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-gray-900 font-medium">
                🎓 Professional Accounting Qualification
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master ACCA with
              <span className="block text-white">Expert Guidance</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-xl">
              Transform your career with our comprehensive ACCA preparation
              program. Join thousands of successful students who achieved their
              dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/"
                className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
              >
                Start Your Journey
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
              <a
                href="/"
                className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors"
              >
                Download Brochure
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-800">Pass Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-800">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-800">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Students studying together"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-8 -right-8 w-72 h-72 bg-white/20 backdrop-blur-sm rounded-2xl z-0"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="-z-10 absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="-z-10 absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </header>
  );
}
