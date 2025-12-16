const stats = [{
  value: '99.9%',
  label: 'Uptime SLA'
}, {
  value: '14K+',
  label: 'Enterprise Customers'
}, {
  value: '150+',
  label: 'Countries Protected'
}, {
  value: '24/7',
  label: 'Global Support'
}];
export default function StatsSection() {
  return <section className="bg-gradient-to-b from-card to-background py-[25px] my-[2px] border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={stat.label} className="text-center" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}