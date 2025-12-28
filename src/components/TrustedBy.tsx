import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Partner certification logos
import avepointLogo from "@/assets/partners/avepoint-partner.png";
import bitdefenderLogo from "@/assets/partners/bitdefender-reseller.png";
import fortinetLogo from "@/assets/partners/fortinet-partner.png";
import lenovoLogo from "@/assets/partners/lenovo-authorized.jpg";
import logitechLogo from "@/assets/partners/logitech-partner.png";
import silverPartnerLogo from "@/assets/partners/silver-partner.png";
import microsoftLogo from "@/assets/partners/microsoft-partner.png";

const partners = [
  { name: "AvePoint", logo: avepointLogo },
  { name: "Bitdefender", logo: bitdefenderLogo },
  { name: "Fortinet", logo: fortinetLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "Logitech", logo: logitechLogo },
  { name: "Silver Partner", logo: silverPartnerLogo },
  { name: "Microsoft", logo: microsoftLogo },
];

export default function TrustedBy() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-slate-50/30 py-24 sm:py-32 overflow-hidden border-y border-slate-100/50">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.3]" />

        {/* Animated Spotlight Blobs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100/50 shadow-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em]">Our Global Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 leading-tight">
            Trusted by global industry leaders.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            Strategic alliances with top-tier technology partners to deliver enterprise-grade performance and security.
          </p>
        </motion.div>
      </div>

      {/* Unified Single Scrolling Row */}
      <div className="relative flex overflow-hidden py-10 select-none">
        <div className="flex animate-marquee-slow gap-8 sm:gap-12 whitespace-nowrap px-4">
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              initial={{ y: 0 }}
              // Removed the random float to keep it cleaner and aligned like the reference
              className="flex-shrink-0 group flex items-center justify-center"
            >
              <div className="relative h-20 w-auto flex items-center justify-center transition-all duration-500">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-full w-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 5s linear infinite;
        }
        .animate-marquee-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
