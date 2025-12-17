import { useEffect, useRef, useState } from "react";
import microsoftLogo from "@/assets/partners/microsoft-logo.png";
import dellLogo from "@/assets/partners/dell-logo.png";
import fortinetLogo from "@/assets/partners/fortinet-logo.png";
import sonicwallLogo from "@/assets/partners/sonicwall-logo.png";
import sangforLogo from "@/assets/partners/sangfor-logo.png";
import bitdefenderLogo from "@/assets/partners/bitdefender-logo.png";
import acronisLogo from "@/assets/partners/acronis-logo.png";
import coreviewLogo from "@/assets/partners/coreview-logo.png";
import avepointLogo from "@/assets/partners/avepoint-logo.png";
import haloitsmLogo from "@/assets/partners/haloitsm-logo.png";
import hikvisionLogo from "@/assets/partners/hikvision-logo.png";
import dahuaLogo from "@/assets/partners/dahua-logo.png";
import zktecoLogo from "@/assets/partners/zkteco-logo.png";
import lenovoLogo from "@/assets/partners/lenovo-logo.png";
import hpLogo from "@/assets/partners/hp-logo.png";
import hpeLogo from "@/assets/partners/hpe-logo.png";
import qnapLogo from "@/assets/partners/qnap-logo.png";
import vertivLogo from "@/assets/partners/vertiv-logo.png";
import logitechLogo from "@/assets/partners/logitech-logo.png";
import yealinkLogo from "@/assets/partners/yealink-logo.png";
import vircomLogo from "@/assets/partners/vircom-logo.png";
import dropsuiteLogo from "@/assets/partners/dropsuite-logo.png";
import veriatoLogo from "@/assets/partners/veriato-logo.png";
import sorbsecurityLogo from "@/assets/partners/sorbsecurity-logo.png";
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
  return <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated border container - only around text */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="group relative rounded-2xl p-[2px] overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-400 via-purple-500 via-pink-500 to-primary bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] rounded-2xl" />
            
            {/* Inner content with white background */}
            <div className="relative bg-white rounded-2xl py-8 px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:text-4xl">
                <span className="text-slate-900">Partnered with the best</span>{" "}
                <span className="text-primary">to deliver the best.</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                We maintain strategic alliances and hold certifications from premier industry organizations.
              </p>
            </div>
          </div>
        </div>
        
        {/* Logo carousel - no border */}
        <div className="overflow-hidden">
          <div ref={scrollRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{
            scrollBehavior: "auto"
          }} className="flex items-center gap-12 md:gap-16 overflow-hidden bg-white lg:gap-[26px] py-6">
            {[...partners, ...partners].map((partner, index) => <div key={`${partner.name}-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="p-4 rounded-xl hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" decoding="async" className="h-28 md:h-32 lg:h-36 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}