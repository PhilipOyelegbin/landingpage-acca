import { ArrowRight, Calendar, Phone, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="bg-linear-to-r from-[#CDDC39] to-[#AFB42B] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Your ACCA Journey?
              </h2>
              <p className="text-lg text-gray-800 mb-8">
                Join our next batch and take the first step towards becoming a
                globally recognized accounting professional.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="/"
                  className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                >
                  Enroll Now
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </a>
                <a
                  href="/"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  Book a Free Session
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-900">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-sm">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-sm">Money-back guarantee</span>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-100 lg:min-h-125">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="Students celebrating success"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#CDDC39] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-gray-900" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-3">Speak with our team</p>
            <a
              href="tel:+1234567890"
              className="text-[rgb(94,102,8)] hover:text-[#AFB42B] font-medium"
            >
              +1 (234) 567-890
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#CDDC39] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-gray-900" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-3">
              Get information via email
            </p>
            <a
              href="mailto:info@accaexcellence.com"
              className="text-[rgb(94,102,8)] hover:text-[#AFB42B] font-medium"
            >
              info@accaexcellence.com
            </a>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#CDDC39] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-gray-900" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm mb-3">Schedule a session</p>
            <a
              href="/"
              className="text-[rgb(94,102,8)] hover:text-[#AFB42B] font-medium"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
