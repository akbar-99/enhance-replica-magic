import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import microsoftLogo from "@/assets/partners/microsoft-logo.webp";
import dellLogo from "@/assets/partners/dell-logo.webp";
import fortinetLogo from "@/assets/partners/fortinet-logo.webp";
import sonicwallLogo from "@/assets/partners/sonicwall-logo.webp";
import sangforLogo from "@/assets/partners/sangfor-logo.webp";
import bitdefenderLogo from "@/assets/partners/bitdefender-logo.webp";
import acronisLogo from "@/assets/partners/acronis-logo.webp";
import coreviewLogo from "@/assets/partners/coreview-logo.webp";
import avepointLogo from "@/assets/partners/avepoint-logo.webp";
import haloitsmLogo from "@/assets/partners/haloitsm-logo.webp";
import hikvisionLogo from "@/assets/partners/hikvision-logo.webp";
import dahuaLogo from "@/assets/partners/dahua-logo.webp";
import zktecoLogo from "@/assets/partners/zkteco-logo.webp";
import lenovoLogo from "@/assets/partners/lenovo-logo.webp";
import hpLogo from "@/assets/partners/hp-logo.webp";
import hpeLogo from "@/assets/partners/hpe-logo.webp";
import qnapLogo from "@/assets/partners/qnap-logo.webp";
import vertivLogo from "@/assets/partners/vertiv-logo.webp";
import logitechLogo from "@/assets/partners/logitech-logo.webp";
import yealinkLogo from "@/assets/partners/yealink-logo.webp";
import vircomLogo from "@/assets/partners/vircom-logo.webp";
import dropsuiteLogo from "@/assets/partners/dropsuite-logo.webp";
import veriatoLogo from "@/assets/partners/veriato-logo.webp";
import sorbsecurityLogo from "@/assets/partners/sorbsecurity-logo.webp";
const partners = [{
  name: "Microsoft",
  logo: microsoftLogo
}, {
  name: "Dell",
  logo: dellLogo
}, {
  name: "Fortinet",
  logo: fortinetLogo
}, {
  name: "SonicWall",
  logo: sonicwallLogo
}, {
  name: "Sangfor",
  logo: sangforLogo
}, {
  name: "Bitdefender",
  logo: bitdefenderLogo
}, {
  name: "Acronis",
  logo: acronisLogo
}, {
  name: "CoreView",
  logo: coreviewLogo
}, {
  name: "AvePoint",
  logo: avepointLogo
}, {
  name: "HaloITSM",
  logo: haloitsmLogo
}, {
  name: "Hikvision",
  logo: hikvisionLogo
}, {
  name: "Dahua",
  logo: dahuaLogo
}, {
  name: "ZKTeco",
  logo: zktecoLogo
}, {
  name: "Lenovo",
  logo: lenovoLogo
}, {
  name: "HP",
  logo: hpLogo
}, {
  name: "HPE",
  logo: hpeLogo
}, {
  name: "QNAP",
  logo: qnapLogo
}, {
  name: "Vertiv",
  logo: vertivLogo
}, {
  name: "Logitech",
  logo: logitechLogo
}, {
  name: "Yealink",
  logo: yealinkLogo
}, {
  name: "Vircom",
  logo: vircomLogo
}, {
  name: "Dropsuite",
  logo: dropsuiteLogo
}, {
  name: "Veriato",
  logo: veriatoLogo
}, {
  name: "SorbSecurity",
  logo: sorbsecurityLogo
}];
export default function TrustedBy() {
  const {
    t
  } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += speed;
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);
  return <section className="bg-white py-[3px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold py-6 my-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">
        Partnered with the best to deliver the best.
      </h2>
      <p className="text-muted-foreground text-base md:text-lg max-w-1xl mx-auto my-[2px]">
        We maintain strategic alliances and hold certifications from premier industry organizations.
      </p>
    </div>
    <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-0 overflow-hidden">
      <div ref={scrollRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{
        scrollBehavior: "auto"
      }} className="flex items-center gap-12 md:gap-16 overflow-hidden bg-white lg:gap-[26px] py-[31px]">
        {/* Duplicate partners for seamless infinite scroll */}
        {[...partners, ...partners].map((partner, index) => <div key={`${partner.name}-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-200 cursor-pointer">
          <img src={partner.logo} alt={`${partner.name} logo`} loading="eager"
            decoding="async" className="h-32 md:h-36 lg:h-40 w-auto object-scale-down border-double border border-glow-cyan" />
        </div>)}
      </div>
    </div>
  </section>;
}