import {
  TrendingUp,
  Globe,
  Briefcase,
  GraduationCap,
  Shield,
  Target,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description:
        "Open doors to senior roles in finance, audit, and management accounting worldwide.",
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description:
        "ACCA qualification is recognized in over 180 countries, giving you international mobility.",
    },
    {
      icon: Briefcase,
      title: "Higher Earning Potential",
      description:
        "ACCA members earn significantly more than non-qualified accountants on average.",
    },
    {
      icon: GraduationCap,
      title: "Practical Skills",
      description:
        "Gain real-world skills that employers value, from financial reporting to strategic thinking.",
    },
    {
      icon: Shield,
      title: "Professional Credibility",
      description:
        "Join a prestigious community of over 233,000 members and 536,000 students globally.",
    },
    {
      icon: Target,
      title: "Career Flexibility",
      description:
        "Work across industries including banking, consulting, technology, and public sector.",
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose ACCA?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              ACCA is one of the most prestigious accounting qualifications in
              the world, offering unparalleled opportunities for career growth
              and professional development.
            </p>
            <div className="flex items-center gap-4 p-6 bg-[#CDDC39]/10 rounded-xl border-l-4 border-[#CDDC39]">
              <div className="text-4xl">💼</div>
              <div>
                <div className="font-bold text-gray-900 mb-1">
                  Industry-Leading Qualification
                </div>
                <div className="text-sm text-gray-600">
                  Trusted by employers worldwide for excellence in accounting
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=700&fit=crop"
              alt="Professional working"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-[#CDDC39] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#CDDC39]/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="text-[#CDDC39]" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
