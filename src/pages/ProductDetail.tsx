import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO, { createBreadcrumbSchema, organizationSchema } from '@/components/SEO';
import { ArrowRight, Shield, Cloud, Lock, Database, Zap, Eye, Server, Globe, Check, ChevronRight } from 'lucide-react';

const productsData = {
  'data-security': {
    icon: Shield,
    title: 'Data Security Platform',
    subtitle: 'Comprehensive Data Protection',
    description: 'Comprehensive data protection across all environments with AI-powered classification and policy enforcement.',
    longDescription: 'Our Data Security Platform provides enterprise-grade protection for your sensitive data across cloud, on-premises, and hybrid environments. Using advanced AI and machine learning, we automatically classify and protect your most valuable assets.',
    features: ['AI Data Classification', 'Policy Management', 'Incident Response', 'Compliance Reporting'],
    benefits: [
      'Automatically discover and classify sensitive data across all environments',
      'Enforce consistent security policies across cloud and on-premises',
      'Reduce data breach risk with real-time threat detection',
      'Maintain compliance with GDPR, HIPAA, PCI-DSS and more',
      'Streamline incident response with automated workflows',
      'Get comprehensive visibility into data flows and access patterns'
    ],
    gradient: 'from-blue-500/10 to-cyan-500/10',
  },
  'cloud-security': {
    icon: Cloud,
    title: 'Cloud Security',
    subtitle: 'Secure Your Cloud Infrastructure',
    description: 'Protect cloud workloads and SaaS applications with advanced threat detection and automated remediation.',
    longDescription: 'Secure your entire cloud ecosystem with our comprehensive Cloud Security solution. From IaaS to SaaS, we provide visibility, threat detection, and automated remediation to keep your cloud infrastructure protected.',
    features: ['CASB', 'CSPM', 'CWPP', 'SaaS Security'],
    benefits: [
      'Gain visibility into all cloud resources and configurations',
      'Detect and remediate misconfigurations automatically',
      'Protect workloads across AWS, Azure, and Google Cloud',
      'Secure SaaS applications with advanced access controls',
      'Monitor cloud-native threats in real-time',
      'Enforce compliance policies across multi-cloud environments'
    ],
    gradient: 'from-cyan-500/10 to-teal-500/10',
  },
  'network-security': {
    icon: Lock,
    title: 'Network Security',
    subtitle: 'Protect Your Network Perimeter',
    description: 'Secure your network perimeter with next-generation firewall and intrusion prevention capabilities.',
    longDescription: 'Defend your network with our advanced Network Security solutions featuring next-generation firewalls, intrusion prevention systems, and comprehensive traffic analysis to stop threats before they reach your critical assets.',
    features: ['NGFW', 'IPS/IDS', 'VPN', 'Traffic Analysis'],
    benefits: [
      'Block advanced threats with next-generation firewall capabilities',
      'Detect and prevent intrusions in real-time',
      'Secure remote access with enterprise-grade VPN solutions',
      'Analyze network traffic for anomalies and threats',
      'Segment networks to contain potential breaches',
      'Get complete visibility into network activity'
    ],
    gradient: 'from-indigo-500/10 to-blue-500/10',
  },
  'data-discovery': {
    icon: Database,
    title: 'Data Discovery',
    subtitle: 'Find and Classify Your Data',
    description: 'Find and classify sensitive data automatically using AI-powered scanning across structured and unstructured data.',
    longDescription: 'Discover where your sensitive data resides with our AI-powered Data Discovery solution. Automatically scan, classify, and map data across your entire organization to understand your risk exposure and maintain compliance.',
    features: ['Auto-Discovery', 'Classification', 'Data Mapping', 'Risk Assessment'],
    benefits: [
      'Automatically discover sensitive data across all repositories',
      'Classify data using AI and machine learning',
      'Map data flows and access patterns',
      'Assess risk exposure and prioritize remediation',
      'Support compliance with data inventory requirements',
      'Reduce shadow data and unknown data stores'
    ],
    gradient: 'from-purple-500/10 to-indigo-500/10',
  },
  'threat-prevention': {
    icon: Zap,
    title: 'Threat Prevention',
    subtitle: 'Stop Threats Before They Strike',
    description: 'Stop threats before they impact your business with real-time protection and advanced malware analysis.',
    longDescription: 'Proactively defend against cyber threats with our comprehensive Threat Prevention solution. Using advanced analytics, threat intelligence, and automated response, we stop malware, ransomware, and zero-day attacks before they can cause damage.',
    features: ['Malware Protection', 'Ransomware Defense', 'Zero-Day Protection', 'Threat Intelligence'],
    benefits: [
      'Block known and unknown malware in real-time',
      'Prevent ransomware attacks with behavioral analysis',
      'Detect zero-day threats using AI and sandboxing',
      'Leverage global threat intelligence for proactive defense',
      'Automate threat response to minimize impact',
      'Reduce false positives with advanced analytics'
    ],
    gradient: 'from-orange-500/10 to-red-500/10',
  },
  'analytics': {
    icon: Eye,
    title: 'Visibility & Analytics',
    subtitle: 'Complete Security Visibility',
    description: 'Get complete visibility into data flows and user behavior with advanced analytics and reporting.',
    longDescription: 'Gain unprecedented visibility into your security posture with our Analytics platform. Monitor user behavior, track data flows, and generate comprehensive reports to understand risks and demonstrate compliance.',
    features: ['UEBA', 'Data Flow Mapping', 'Risk Scoring', 'Dashboard & Reports'],
    benefits: [
      'Detect insider threats with user behavior analytics',
      'Visualize data flows across your organization',
      'Prioritize risks with intelligent scoring',
      'Generate executive and compliance reports',
      'Integrate with existing security tools',
      'Make data-driven security decisions'
    ],
    gradient: 'from-emerald-500/10 to-cyan-500/10',
  },
  'endpoint-security': {
    icon: Server,
    title: 'Endpoint Security',
    subtitle: 'Protect Every Endpoint',
    description: 'Protect endpoints with advanced threat protection and data loss prevention capabilities.',
    longDescription: 'Secure every endpoint in your organization with our comprehensive Endpoint Security solution. From laptops to servers, we provide advanced threat detection, data loss prevention, and device control to protect your most vulnerable attack surface.',
    features: ['EDR', 'DLP', 'Device Control', 'Encryption'],
    benefits: [
      'Detect and respond to endpoint threats in real-time',
      'Prevent data loss with advanced DLP policies',
      'Control USB and removable media access',
      'Encrypt sensitive data at rest and in transit',
      'Manage endpoints from a single console',
      'Investigate incidents with detailed forensics'
    ],
    gradient: 'from-slate-500/10 to-blue-500/10',
  },
  'web-security': {
    icon: Globe,
    title: 'Web Security',
    subtitle: 'Secure Web Access',
    description: 'Secure web access with advanced URL filtering, SSL inspection, and threat protection.',
    longDescription: 'Protect your organization from web-based threats with our comprehensive Web Security solution. Advanced URL filtering, SSL inspection, and malware scanning keep users safe while enabling productive web access.',
    features: ['Web Filtering', 'SSL Inspection', 'Malware Scanning', 'Content Control'],
    benefits: [
      'Block malicious websites and phishing attempts',
      'Inspect SSL/TLS traffic for hidden threats',
      'Prevent malware downloads in real-time',
      'Control access to inappropriate content',
      'Enforce acceptable use policies',
      'Protect remote and mobile users'
    ],
    gradient: 'from-sky-500/10 to-blue-500/10',
  },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productsData[slug as keyof typeof productsData] : null;

  if (!product) {
    return (
      <main className="min-h-screen page-bg-light">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Product Not Found</h1>
          <p className="text-slate-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-primary">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const Icon = product.icon;

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://itenhance.tech' },
    { name: 'Products', url: 'https://itenhance.tech/products' },
    { name: product.title, url: `https://itenhance.tech/products/${slug}` },
  ]);

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema,
      {
        "@type": "Product",
        "name": product.title,
        "description": product.longDescription,
        "brand": organizationSchema,
        "category": "IT Security Software"
      }
    ]
  };

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title={`${product.title} | ENHANCE TECH - Enterprise IT Solutions`}
        description={product.longDescription}
        keywords={`${product.title}, ${product.features.join(', ')}, enterprise security Dubai`}
        canonicalUrl={`https://itenhance.tech/products/${slug}`}
        structuredData={productSchema}
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <Link 
                to="/products" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to Products
              </Link>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg shadow-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold">{product.subtitle}</p>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                {product.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                {product.longDescription}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 text-sm rounded-full font-medium border border-slate-200/50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/demo" className="btn-primary">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary border-slate-300 text-slate-900 hover:bg-slate-100">
                  Contact Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Key <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover how {product.title} can transform your security posture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-slate-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Explore Other <span className="text-primary">Products</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(productsData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, prod]) => {
                const ProdIcon = prod.icon;
                return (
                  <Link
                    key={key}
                    to={`/products/${key}`}
                    className="p-6 bg-white rounded-xl border border-slate-200/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <ProdIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors duration-300">
                      {prod.title}
                    </h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-white to-[hsl(var(--glow-cyan))]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started with {product.title}?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how {product.title} can protect your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/demo" className="btn-primary">
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-secondary border-slate-300 text-slate-900 hover:bg-slate-100">
              Contact Sales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}