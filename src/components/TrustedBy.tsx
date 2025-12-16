import { useEffect, useRef, useState } from 'react';
import microsoftLogo from '@/assets/partners/microsoft-logo.png';
import dellLogo from '@/assets/partners/dell-logo.png';
import fortinetLogo from '@/assets/partners/fortinet-logo.png';
import sonicwallLogo from '@/assets/partners/sonicwall-logo.png';
import sangforLogo from '@/assets/partners/sangfor-logo.png';
import bitdefenderLogo from '@/assets/partners/bitdefender-logo.png';
import acronisLogo from '@/assets/partners/acronis-logo.png';
import coreviewLogo from '@/assets/partners/coreview-logo.png';
import avepointLogo from '@/assets/partners/avepoint-logo.png';
import haloitsmLogo from '@/assets/partners/haloitsm-logo.png';
import hikvisionLogo from '@/assets/partners/hikvision-logo.png';
import dahuaLogo from '@/assets/partners/dahua-logo.png';
import zktecoLogo from '@/assets/partners/zkteco-logo.png';
import lenovoLogo from '@/assets/partners/lenovo-logo.png';
import hpLogo from '@/assets/partners/hp-logo.png';
import hpeLogo from '@/assets/partners/hpe-logo.png';
import qnapLogo from '@/assets/partners/qnap-logo.png';
import vertivLogo from '@/assets/partners/vertiv-logo.png';
import logitechLogo from '@/assets/partners/logitech-logo.png';
import yealinkLogo from '@/assets/partners/yealink-logo.png';
import vircomLogo from '@/assets/partners/vircom-logo.png';
import dropsuiteLogo from '@/assets/partners/dropsuite-logo.png';
import veriatoLogo from '@/assets/partners/veriato-logo.png';
import sorbsecurityLogo from '@/assets/partners/sorbsecurity-logo.png';
const partners = [{
  name: 'Microsoft',
  logo: microsoftLogo
}, {
  name: 'Dell',
  logo: dellLogo
}, {
  name: 'Fortinet',
  logo: fortinetLogo
}, {
  name: 'SonicWall',
  logo: sonicwallLogo
}, {
  name: 'Sangfor',
  logo: sangforLogo
}, {
  name: 'Bitdefender',
  logo: bitdefenderLogo
}, {
  name: 'Acronis',
  logo: acronisLogo
}, {
  name: 'CoreView',
  logo: coreviewLogo
}, {
  name: 'AvePoint',
  logo: avepointLogo
}, {
  name: 'HaloITSM',
  logo: haloitsmLogo
}, {
  name: 'Hikvision',
  logo: hikvisionLogo
}, {
  name: 'Dahua',
  logo: dahuaLogo
}, {
  name: 'ZKTeco',
  logo: zktecoLogo
}, {
  name: 'Lenovo',
  logo: lenovoLogo
}, {
  name: 'HP',
  logo: hpLogo
}, {
  name: 'HPE',
  logo: hpeLogo
}, {
  name: 'QNAP',
  logo: qnapLogo
}, {
  name: 'Vertiv',
  logo: vertivLogo
}, {
  name: 'Logitech',
  logo: logitechLogo
}, {
  name: 'Yealink',
  logo: yealinkLogo
}, {
  name: 'Vircom',
  logo: vircomLogo
}, {
  name: 'Dropsuite',
  logo: dropsuiteLogo
}, {
  name: 'Veriato',
  logo: veriatoLogo
}, {
  name: 'SorbSecurity',
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
  return <section className="overflow-hidden px-[4px] py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div ref={scrollRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{
        scrollBehavior: 'auto'
      }} className="flex items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden py-[48px] bg-white">
          {/* Duplicate partners for seamless infinite scroll */}
          {[...partners, ...partners].map((partner, index) => <div key={`${partner.name}-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" decoding="async" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
            </div>)}
        </div>
      </div>
    </section>;
}