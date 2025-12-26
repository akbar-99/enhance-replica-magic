import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// New Logo Assets
import microsoftLogo from "@/assets/partners/microsoft-logo-new.png";
import dellLogo from "@/assets/partners/dell-logo-new.png";
import fortinetLogo from "@/assets/partners/fortinet-logo-new.png";
import sonicwallLogo from "@/assets/partners/sonicwall-logo-new.png";
import sangforLogo from "@/assets/partners/sangfor-logo-new.png";
import bitdefenderLogo from "@/assets/partners/bitdefender-logo-new.png";
import acronisLogo from "@/assets/partners/acronis-logo-new.png";
import coreviewLogo from "@/assets/partners/coreview-logo-new.png";
import avepointLogo from "@/assets/partners/avepoint-logo-new.png";
import haloitsmLogo from "@/assets/partners/haloitsm-logo-new.png";
import hikvisionLogo from "@/assets/partners/hikvision-logo-new.png";
import zktecoLogo from "@/assets/partners/zkteco-logo-new.png";
import lenovoLogo from "@/assets/partners/lenovo-logo-new.png";
import qnapLogo from "@/assets/partners/qnap-logo-new.png";
import vertivLogo from "@/assets/partners/vertiv-logo-new.png";
import hpHpeLogo from "@/assets/partners/hp-hpe-logo-new.png";
import logitechLogo from "@/assets/partners/logitech-logo-new.png";
import yealinkLogo from "@/assets/partners/yealink-logo-new.png";
import freshworksLogo from "@/assets/partners/freshworks-logo-new.png";
import dropsuiteLogo from "@/assets/partners/dropsuite-logo-new.png";
import vircomLogo from "@/assets/partners/vircom-logo-new.png";
import veriatoLogo from "@/assets/partners/veriato-logo-new.png";
import sorbsecurityLogo from "@/assets/partners/sorbsecurity-logo.png"; // Kept original as no new one provided for this exact name

const partners = [
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Dell", logo: dellLogo },
  { name: "Fortinet", logo: fortinetLogo },
  { name: "SonicWall", logo: sonicwallLogo },
  { name: "Sangfor", logo: sangforLogo },
  { name: "Bitdefender", logo: bitdefenderLogo },
  { name: "Acronis", logo: acronisLogo },
  { name: "CoreView", logo: coreviewLogo },
  { name: "AvePoint", logo: avepointLogo },
  { name: "HaloITSM", logo: haloitsmLogo },
  { name: "Hikvision", logo: hikvisionLogo },
  { name: "ZKTeco", logo: zktecoLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "QNAP", logo: qnapLogo },
  { name: "Vertiv", logo: vertivLogo },
  { name: "HP HPE", logo: hpHpeLogo },
  { name: "Logitech", logo: logitechLogo },
  { name: "Yealink", logo: yealinkLogo },
  { name: "Freshworks", logo: freshworksLogo },
  { name: "Dropsuite", logo: dropsuiteLogo },
  { name: "Vircom", logo: vircomLogo },
  { name: "Veriato", logo: veriatoLogo },
];

export default function TrustedBy() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Partnered with the best to deliver the best.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We maintain strategic alliances and hold certifications from premier industry organizations to ensure excellence at every level.
          </p>
        </motion.div>
      </div>

      {/* Modern Infinite Marquee */}
      <div className="relative flex overflow-hidden py-10 select-none">
        <div className="flex animate-marquee gap-8 sm:gap-12 whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex-shrink-0 group"
            >
              <div className="relative h-28 w-56 sm:h-32 sm:w-64 flex items-center justify-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Duplicate for seamless infinite loop if CSS marquee is used, 
            or use framer-motion variants for more control. 
            I'll stick to a clean CSS marquee with Tailwind for performance. */}
        <div className="flex animate-marquee gap-8 sm:gap-12 whitespace-nowrap absolute top-10 left-full">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`${partner.name}-dup-${index}`}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex-shrink-0 group"
            >
              <div className="relative h-28 w-56 sm:h-32 sm:w-64 flex items-center justify-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom styles for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
