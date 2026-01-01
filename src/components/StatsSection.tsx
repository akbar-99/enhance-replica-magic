import statsBackground from "@/assets/stats-background.webp";
import { Users, Globe, Clock, Shield } from "lucide-react";

const stats = [{
  value: '14K+',
  label: 'Managed',
  sublabel: 'ENDPOINTS',
  icon: Users
}, {
  value: '150+',
  label: 'Locations',
  sublabel: 'COUNTRIES PROTECTED',
  icon: Globe
}, {
  value: '99.9%',
  label: 'Guaranteed',
  sublabel: 'UPTIME SLA',
  icon: Shield
}, {
  value: '24/7',
  label: 'Available',
  sublabel: 'GLOBAL SUPPORT',
  icon: Clock
}];
export default function StatsSection() {
  return <section style={{
    backgroundImage: "url(\"/lovable-uploads/3b8ba20a-8b8c-4a2c-bdad-bc96de88f2f2.webp\")"
  }} className="my-[2px] bg-cover bg-center bg-no-repeat py-[72px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.label} className="text-center flex flex-col items-center" style={{
              animationDelay: `${index * 150}ms`
            }}>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {stat.sublabel}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold glow-text mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>;
}