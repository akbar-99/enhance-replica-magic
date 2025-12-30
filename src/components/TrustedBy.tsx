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

// Row 1
const partnersRow1 = [{
  name: "Silver Partner",
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
}, {
  name: "Microsoft",
  logo: microsoftLogo
}];

// Row 2
const partnersRow2 = [{
  name: "Bitdefender",
  logo: bitdefenderLogo
}, {
  name: "Lenovo",
  logo: lenovoLogo
}, {
  name: "Silver Partner 2",
  logo: silverPartnerLogo
}, {
  name: "AvePoint 2",
  logo: avepointLogo
}, {
  name: "Fortinet 2",
  logo: fortinetLogo
}];
export default function TrustedBy() {
  const {
    t
  } = useTranslation();
  return <section className="relative bg-[#020617] py-24 overflow-hidden sm:py-[54px]">
    {/* Premium Background Effects */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Deep mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_100%,rgba(124,58,237,0.05)_0%,transparent_50%)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.5]" />

      {/* Animated Spotlight Blobs */}
      <motion.div animate={{
        x: [0, 80, 0],
        y: [0, -30, 0],
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute top-0 -left-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />

      <motion.div animate={{
        x: [0, -60, 0],
        y: [0, 40, 0],
        scale: [1, 1.15, 1]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute bottom-0 -right-24 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
      <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em]">Our Global Ecosystem</span>
        </div>
        {/* Updated heading gradient to match FAQ section */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 leading-tight">
          Trusted by global industry leaders.
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
          Strategic alliances with top-tier technology partners to deliver enterprise-grade performance and security.
        </p>
      </motion.div>
    </div>

    {/* Dark background container for cards */}
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-[11px]">
      {/* Subtle glass container for the grid */}
      <div className="max-w-7xl mx-auto p-8 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-[2px] shadow-2xl">
        <div className="max-w-7xl mx-auto space-y-6" style={{ perspective: "1000px" }}>
          {/* Row 1 - 5 cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {partnersRow1.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: -15
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -12,
                  rotateY: 8,
                  rotateX: -5,
                  scale: 1.05,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-8 h-44 md:h-52 flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_0_15px_rgba(59,130,246,0.5)] transition-all duration-500 overflow-hidden hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_0_30px_rgba(59,130,246,0.6)]">
                  {/* Persistent gradient border */}
                  <div className="absolute inset-0 rounded-2xl opacity-100 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[2px]">
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>

                  {/* Shine effect - kept on hover for interactivity */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                  </div>

                  {/* Persistent Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-20" />

                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="relative z-10 max-h-28 md:max-h-36 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
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
                initial={{
                  opacity: 0,
                  y: 40,
                  rotateX: -15
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1 + 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -8,
                  rotateY: -8,
                  rotateX: 5,
                  scale: 1.05,
                  z: 50
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-4 h-22 md:h-26 flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_0_15px_rgba(168,85,247,0.4)] transition-all duration-500 overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4),0_0_25px_rgba(168,85,247,0.5)]">
                  {/* Persistent gradient border */}
                  <div className="absolute inset-0 rounded-2xl opacity-100 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 p-[2px]">
                    <div className="w-full h-full bg-white rounded-2xl" />
                  </div>

                  {/* Shine effect - kept on hover for interactivity */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shine_1.5s_ease-in-out]" />
                  </div>

                  {/* Persistent Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-20" />

                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="relative z-10 max-h-14 md:max-h-18 w-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>;
}