import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Financial Analyst at Deloitte",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content:
        "The comprehensive study materials and expert guidance helped me pass all my ACCA exams on the first attempt. The faculty's teaching methodology is exceptional!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Audit Manager at PwC",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content:
        "I was working full-time while studying, and the flexible learning options made it possible for me to complete my ACCA. Best investment in my career!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Senior Accountant at KPMG",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content:
        "The mock exams and practice questions were incredibly helpful. I felt fully prepared going into my exams. Highly recommend this program to anyone pursuing ACCA.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-linear-to-br from-[#CDDC39]/5 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have successfully completed their ACCA
            qualification and advanced their careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote
                className="absolute top-6 right-6 text-[#CDDC39]/20"
                size={48}
              />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#CDDC39] text-[#CDDC39]"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center md:gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.9/5</div>
              <div className="flex items-center gap-1 justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#CDDC39] text-[#CDDC39]"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>

            <div className="w-px h-12 bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600 mt-2">5-Star Reviews</div>
            </div>

            <div className="w-px h-12 bg-gray-200"></div>

            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600 mt-2">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
