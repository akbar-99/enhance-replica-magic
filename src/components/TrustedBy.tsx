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
import dellLogo from "@/assets/partners/dell-authorized-partner.jpg";

// Row 1
const partnersRow1 = [
  { name: "Silver Partner", logo: silverPartnerLogo },
  { name: "AvePoint", logo: avepointLogo },
  { name: "Fortinet", logo: fortinetLogo },
  { name: "Logitech", logo: logitechLogo },
  { name: "Dell", logo: dellLogo },
];

// Row 2
const partnersRow2 = [
  { name: "Bitdefender", logo: bitdefenderLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "AvePoint 2", logo: avepointLogo },
  { name: "Fortinet 2", logo: fortinetLogo },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 leading-tight">
            Trusted by global industry leaders.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            Strategic alliances with top-tier technology partners to deliver enterprise-grade performance and security.
          </p>
        </motion.div>
      </div>

      {/* Dark background container for cards */}
      <div className="bg-gradient-to-b from-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1 - 5 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {partnersRow1.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-44 md:h-52 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-28 md:max-h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Row 2 - 5 cards (half height) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {partnersRow2.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-4 h-22 md:h-26 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-14 md:max-h-18 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
