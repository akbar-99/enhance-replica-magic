const companies = [
  { name: 'Delta', logo: 'DELTA' },
  { name: 'Citi', logo: 'citi' },
  { name: 'Kyndryl', logo: 'kyndryl' },
  { name: 'British Airways', logo: 'BRITISH AIRWAYS' },
  { name: 'Supermicro', logo: 'SUPERMICRO' },
  { name: 'CVS', logo: 'CVS' },
  { name: 'Sysco', logo: 'sysco' },
  { name: 'Coca-Cola', logo: 'Coca-Cola' },
  { name: 'Visa', logo: 'VISA' },
];

export default function TrustedBy() {
  return (
    <section className="py-12 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors text-lg md:text-xl font-bold tracking-wider"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
