import { ArrowRight, Monitor, ShieldCheck, Server, Network, Code, Cloud, Headphones, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import managedServicesImg from "@/assets/features/managed-services.png";

const features = [
  {
    icon: Monitor,
    image: managedServicesImg,
    title: "Managed Services",
    description:
      "Boost efficiency with reliable Managed IT Services. Proactive monitoring, 24/7 support & tailored solutions for your business growth.",
    link: "/products/managed-it",
    iconBg: "bg-primary",
    iconColor: "text-white",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure & Hardware",
    description:
      "Our security solutions help improve collaboration, enhance user experience, and increase productivity with comprehensive protection.",
    link: "/products/security",
    iconBg: "bg-purple-500",
    iconColor: "text-white",
  },
  {
    icon: Server,
    title: "Modern Workplace & Projects",
    description:
      "Reduce costs and complexity by investing in systems that handle your infrastructure needs efficiently.",
    link: "/products/server-storage",
    iconBg: "bg-emerald-500",
    iconColor: "text-white",
  },
  {
    icon: Network,
    title: "Web & App Development",
    description:
      "Intelligently integrated network solutions that secure connectivity and enhance your business operations.",
    link: "/products/network",
    iconBg: "bg-cyan-500",
    iconColor: "text-white",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-[35px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-slate-900">Scalable Solutions for the</span>{" "}
            <span className="text-primary">Modern Enterprise</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Protect your organization with our comprehensive suite of security solutions designed for the modern
            enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon/Image container */}
              <div
                className={`w-full ${feature.image ? 'h-52' : 'h-40'} rounded-2xl ${feature.image ? 'bg-gradient-to-br from-primary/10 via-cyan-50 to-blue-100' : feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform duration-300 ${feature.image ? 'shadow-md shadow-primary/10' : 'shadow-lg'} overflow-hidden`}
              >
                {feature.image ? (
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover scale-110" />
                ) : (
                  <feature.icon className={`w-16 h-16 ${feature.iconColor}`} strokeWidth={1.5} />
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 mb-6 leading-relaxed text-sm">{feature.description}</p>

              {/* Learn More link */}
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
