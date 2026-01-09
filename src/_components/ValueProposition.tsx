import { Check } from "lucide-react";

export default function ValueProposition() {
  const features = [
    "Live interactive classes with Q&A sessions",
    "Recorded lectures for revision and flexibility",
    "Practice questions and mock exams",
    "Performance tracking and progress reports",
    "Dedicated student support team",
    "Career guidance and placement assistance",
    "Study materials and digital resources",
    "Peer learning community and forums",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#CDDC39] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#CDDC39] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#CDDC39] text-gray-900 px-4 py-2 rounded-full mb-6 font-medium">
              Our Value Proposition
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to Succeed
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              We provide a complete learning ecosystem designed to help you pass
              your ACCA exams with confidence and achieve your professional
              goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#CDDC39] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-gray-900" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-[#CDDC39] text-gray-900 px-8 py-4 rounded-full hover:bg-[#C0CA33] transition-colors font-medium">
              Explore Our Features
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📚</div>
              <div className="text-2xl font-bold text-[#CDDC39] mb-2">200+</div>
              <div className="text-gray-300">Hours of Content</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mt-8">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-2xl font-bold text-[#CDDC39] mb-2">
                1000+
              </div>
              <div className="text-gray-300">Practice Questions</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 -mt-8">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <div className="text-2xl font-bold text-[#CDDC39] mb-2">50+</div>
              <div className="text-gray-300">Expert Tutors</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-4xl mb-4">⭐</div>
              <div className="text-2xl font-bold text-[#CDDC39] mb-2">
                4.9/5
              </div>
              <div className="text-gray-300">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
