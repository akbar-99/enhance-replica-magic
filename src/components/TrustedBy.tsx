import { useEffect, useRef, useState } from 'react';
import zohoLogo from '@/assets/partners/zoho-logo.png';
import zktecoLogo from '@/assets/partners/zkteco-logo.png';
import vertivLogo from '@/assets/partners/vertiv-logo.png';
import sorbSecurityLogo from '@/assets/partners/sorb-security-logo.png';
import veriatoLogo from '@/assets/partners/veriato-logo.webp';
import proofpointLogo from '@/assets/partners/proofpoint-logo.png';
import microsoftLogo from '@/assets/partners/microsoft-logo.png';
import haloitsmLogo from '@/assets/partners/haloitsm-logo.avif';
import dahuaLogo from '@/assets/partners/dahua-logo.png';
import avepointLogo from '@/assets/partners/avepoint-logo.png';
const partners = [{
  name: 'Zoho',
  logo: zohoLogo
}, {
  name: 'ZKTeco',
  logo: zktecoLogo
}, {
  name: 'Vertiv',
  logo: vertivLogo
}, {
  name: 'SorbSecurity',
  logo: sorbSecurityLogo
}, {
  name: 'Veriato',
  logo: veriatoLogo
}, {
  name: 'Proofpoint',
  logo: proofpointLogo
}, {
  name: 'Microsoft',
  logo: microsoftLogo
}, {
  name: 'HaloITSM',
  logo: haloitsmLogo
}, {
  name: 'Dahua',
  logo: dahuaLogo
}, {
  name: 'AvePoint',
  logo: avepointLogo
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
  return <section className="overflow-hidden py-[16px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={scrollRef} className="flex items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={{
        scrollBehavior: 'auto'
      }}>
          {/* Duplicate partners for seamless infinite scroll */}
          {[...partners, ...partners].map((partner, index) => <div key={`${partner.name}-${index}`} className="flex-shrink-0 hover:scale-110 transition-all duration-300 cursor-pointer">
              <img src={partner.logo} alt={`${partner.name} logo`} className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
            </div>)}
        </div>
      </div>
    </section>;
}