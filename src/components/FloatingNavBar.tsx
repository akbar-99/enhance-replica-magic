import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Phone, Users, MapPin } from "lucide-react";

// WhatsApp SVG icon component
const WhatsAppIcon = ({
  className
}: {
  className?: string;
}) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>;
const navItems = [{
  icon: Home,
  label: "Home",
  path: "/"
}, {
  icon: Phone,
  label: "Call Us",
  path: "tel:+97143296840",
  isExternal: true
}, {
  icon: Users,
  label: "About",
  path: "/company"
}, {
  icon: MapPin,
  label: "Location",
  path: "/contact"
}, {
  icon: WhatsAppIcon,
  label: "WhatsApp",
  path: "https://wa.me/97143296840",
  isExternal: true
}];
const FloatingNavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  return <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Glass container */}
      <div className="relative flex items-center gap-3 sm:gap-6 rounded-full backdrop-blur-xl border border-white/10 shadow-2xl py-[5px] px-6 sm:px-[52px] bg-primary-foreground opacity-90">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-50" />

        {/* Inner glass effect */}
        <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/5 to-transparent" />

        {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        const isHovered = hoveredIndex === index;
        const buttonContent = <div className="relative group" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              {/* Tooltip */}
              <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm border border-white/10 text-xs font-medium text-foreground whitespace-nowrap transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                {item.label}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background/90" />
              </div>

              {/* Icon button */}
              <div className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 cursor-pointer bg-primary/20 ${isHovered ? "bg-primary/30 scale-110" : ""}`}>
                {/* Glow effect - always visible with pulse */}
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-100 scale-110 animate-pulse" />

                {/* Icon - always glowing */}
                <Icon className={`relative z-10 w-5 h-5 transition-all duration-300 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))] ${isHovered ? "scale-110" : ""}`} />
              </div>
            </div>;
        if (item.isExternal) {
          return <a key={index} href={item.path} target={item.path.startsWith("https") ? "_blank" : undefined} rel={item.path.startsWith("https") ? "noopener noreferrer" : undefined}>
                {buttonContent}
              </a>;
        }
        return <Link key={index} to={item.path}>
              {buttonContent}
            </Link>;
      })}
      </div>
    </div>;
};
export default FloatingNavBar;