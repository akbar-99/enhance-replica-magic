import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import managedServicesImg from "@/assets/features/managed-services.webp";
import infrastructureHardwareImg from "@/assets/features/infrastructure-hardware.webp";
import modernWorkplaceImg from "@/assets/features/modern-workplace.webp";
import webDevelopmentImg from "@/assets/features/web-development.webp";
const features = [
  {
    image: managedServicesImg,
    title: "Managed Services",
    description:
      "Ensure business continuity with proactive IT support, 24/7 system and threat monitoring, and rapid maintenance for your entire network.",
    link: "/managed-it-services",
  },
  {
    image: infrastructureHardwareImg,
    title: "Infrastructure Deployment",
    description:
      "Design, install, or upgrade your complete physical IT foundation—from robust cabling and networking to enterprise-grade data centers.",
    link: "/services/infrastructure-deployment",
  },
  {
    image: modernWorkplaceImg,
    title: "Workplace Modernization",
    description:
      "Transform your daily operations with secure cloud migration, Microsoft 365 integration, and seamless remote collaboration tools.",
    link: "/services/workplace-modernization",
  },
  {
    image: webDevelopmentImg,
    title: "Software & Web Development",
    description:
      "Build custom websites and high-performance web and mobile applications tailored specifically to your business goals and branding.",
    link: "/services/software-web-development",
  },
];
const cardColors = [
  {
    border: "from-blue-400 via-cyan-400 to-primary",
    bg: "from-blue-50 via-cyan-50 to-primary/5",
    glow: "shadow-blue-200/50",
  },
  {
    border: "from-blue-400 via-cyan-400 to-primary",
    bg: "from-blue-50 via-cyan-50 to-primary/5",
    glow: "shadow-blue-200/50",
  },
  {
    border: "from-blue-400 via-cyan-400 to-primary",
    bg: "from-blue-50 via-cyan-50 to-primary/5",
    glow: "shadow-blue-200/50",
  },
  {
    border: "from-blue-400 via-cyan-400 to-primary",
    bg: "from-blue-50 via-cyan-50 to-primary/5",
    glow: "shadow-blue-200/50",
  },
];
export default function FeaturesSection() {
  return (
    <section className="bg-white py-[35px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
            What We Do
          </h2>
          <p className="text-lg text-slate-500 max-w-1xl mx-auto leading-relaxed">
            Enhance your organization with our comprehensive suite of technology services tailored for both SMEs and
            large enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient border wrapper */}
              <div
                className={`absolute -inset-[2px] bg-gradient-to-br ${cardColors[index].border} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              />
              <div
                className={`absolute -inset-[1px] bg-gradient-to-br ${cardColors[index].border} rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card content */}
              <div
                className={`relative bg-white rounded-3xl p-6 h-full transition-all duration-300 group-hover:shadow-2xl ${cardColors[index].glow}`}
              >
                {/* 3D Isometric Image container */}
                <div
                  className={`w-full h-48 rounded-2xl bg-gradient-to-br ${cardColors[index].bg} flex items-center justify-center mb-5 group-hover:scale-[1.03] transition-all duration-500 overflow-hidden border-2 border-transparent group-hover:border-primary/20`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain p-3 animate-float group-hover:scale-110 transition-transform duration-500"
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 mb-5 leading-relaxed text-sm">{feature.description}</p>

                {/* Learn More link */}
                <span
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${cardColors[index].border} bg-clip-text text-transparent font-semibold text-sm tracking-wide group-hover:gap-3 transition-all duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
