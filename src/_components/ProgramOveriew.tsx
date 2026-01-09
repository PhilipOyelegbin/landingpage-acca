import { BookOpen, Users, Award, Clock } from "lucide-react";

export default function ProgramOverview() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Complete coverage of all 13 ACCA papers with updated study materials and resources.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Learn from experienced ACCA-qualified instructors with proven teaching methodologies.",
    },
    {
      icon: Award,
      title: "Certified Program",
      description:
        "ACCA-approved learning partner providing quality education and official certifications.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description:
        "Study at your own pace with online and offline classes designed for working professionals.",
    },
  ];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Program Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our ACCA program is designed to provide you with the knowledge,
            skills, and confidence to excel in your professional accounting
            career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-[#CDDC39] rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-gray-900" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-[#CDDC39] to-[#AFB42B] rounded-2xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Complete ACCA Journey
              </h3>
              <p className="text-gray-800 mb-6">
                From Applied Knowledge to Strategic Professional, we guide you
                through every level of your ACCA qualification.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-900">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#CDDC39] text-sm">✓</span>
                  </div>
                  Applied Knowledge (3 papers)
                </li>
                <li className="flex items-center gap-3 text-gray-900">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#CDDC39] text-sm">✓</span>
                  </div>
                  Applied Skills (6 papers)
                </li>
                <li className="flex items-center gap-3 text-gray-900">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-[#CDDC39] text-sm">✓</span>
                  </div>
                  Strategic Professional (4 papers)
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="ACCA study materials"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
