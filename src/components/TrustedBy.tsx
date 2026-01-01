import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// Partner certification logos
import avepointLogo from "@/assets/partners/avepoint-partner.png";
import bitdefenderLogo from "@/assets/partners/bitdefender-reseller.png";
import fortinetLogo from "@/assets/partners/fortinet-logo-new.png";
import lenovoLogo from "@/assets/partners/lenovo-authorized.jpg";
import logitechLogo from "@/assets/partners/logitech-partner.png";
import silverPartnerLogo from "@/assets/partners/vertiv-logo-new.png";
import dellLogo from "@/assets/partners/dell-logo-new.png";
import hpLogo from "@/assets/partners/hp-logo.png";

// Row 1
const partnersRow1 = [{
  name: "Vertiv",
  logo: silverPartnerLogo
}, {
  name: "AvePoint",
  logo: avepointLogo
}, {
  name: "Fortinet",
  logo: fortinetLogo
}, {
  name: "Logitech",
  logo: logitechLogo
}];

// Row 2
const partnersRow2 = [{
  name: "Bitdefender",
  logo: bitdefenderLogo
}, {
  name: "Lenovo",
  logo: lenovoLogo
}, {
  name: "Dell",
  logo: dellLogo
}, {
  name: "HP",
  logo: hpLogo
}];
export default function TrustedBy() {
  // Duplicate the list multiple times for seamless scrolling
  const partners = [...partnersRow1, ...partnersRow2, ...partnersRow1, ...partnersRow2, ...partnersRow1, ...partnersRow2];
  return <section className="relative py-12 border-b border-white/5 overflow-hidden bg-slate-800 rounded-3xl">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* Label */}
          <div className="font-bold text-2xl md:text-3xl whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-10 bg-[#0b0c15] pr-8">
            Trusted by:
          </div>

          {/* Marquee Container */}
          <div className="flex-1 overflow-hidden relative mask-linear-fade">
            <motion.div className="flex items-center gap-12 min-w-max" animate={{
            x: "-50%"
          }} transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity
          }}>
              {partners.map((partner, index) => <div key={`${partner.name}-${index}`} className="relative group shrink-0">
                  <img src={partner.logo} alt={`${partner.name} logo`} className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}