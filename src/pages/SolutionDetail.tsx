import Navbar from '@/components/Navbar';

import SEO, { createServiceSchema, createBreadcrumbSchema } from '@/components/SEO';
import { ArrowRight, CheckCircle, Sparkles, Shield, Server, Monitor, Lock, Cloud, ShieldAlert, HardDrive, Headphones, Network, Settings, LucideIcon } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';

interface SolutionData {
  id: string;
  icon: LucideIcon;
  title: string;
  headline: string;
  description: string;
  color: string;
  benefits: string[];
  features: string[];
  relatedServices: { title: string; link: string }[];
}

const solutionsData: SolutionData[] = [
  {
    id: 'secure-network',
    icon: Network,
    title: 'Secure Your Network',
    headline: 'Enterprise-Grade Network Security Solutions',
    description: 'Protect your business infrastructure with comprehensive network security solutions. Our advanced firewall systems, intrusion detection, and secure connectivity options ensure your network remains protected against evolving cyber threats while maintaining optimal performance.',
    color: 'bg-blue-500',
    benefits: [
      'Advanced threat detection and prevention',
      'Real-time network monitoring and alerts',
      'Secure VPN and remote access solutions',
      'Compliance with industry security standards',
      'Reduced risk of data breaches and downtime',
      '24/7 network security operations center support',
    ],
    features: [
      'Next-Generation Firewalls (NGFW)',
      'Intrusion Detection & Prevention Systems (IDS/IPS)',
      'Secure SD-WAN Solutions',
      'Network Access Control (NAC)',
      'DDoS Protection',
      'Network Segmentation',
    ],
    relatedServices: [
      { title: 'Stop Cyber Threats', link: '/solutions/cyber-threats' },
      { title: 'Strengthen Infrastructure', link: '/solutions/infrastructure' },
      { title: 'Streamline IT Support', link: '/solutions/it-support' },
    ],
  },
  {
    id: 'prevent-data-loss',
    icon: Shield,
    title: 'Prevent Data Loss',
    headline: 'Comprehensive Data Protection & Backup Solutions',
    description: 'Safeguard your critical business data with enterprise-grade protection and backup solutions. Our DLP strategies ensure sensitive information stays secure across endpoints, networks, and cloud environments while maintaining business continuity.',
    color: 'bg-purple-500',
    benefits: [
      'Protection against accidental and malicious data loss',
      'Automated backup and disaster recovery',
      'Compliance with data protection regulations',
      'Secure data encryption at rest and in transit',
      'Quick recovery from ransomware attacks',
      'Comprehensive audit trails and reporting',
    ],
    features: [
      'Data Loss Prevention (DLP) Solutions',
      'Automated Cloud Backup',
      'Disaster Recovery Planning',
      'Endpoint Data Protection',
      'Email Security & Archiving',
      'Data Encryption Services',
    ],
    relatedServices: [
      { title: 'Stop Cyber Threats', link: '/solutions/cyber-threats' },
      { title: 'Manage Microsoft 365', link: '/solutions/microsoft-365' },
      { title: 'Optimize Cloud Operations', link: '/solutions/cloud-operations' },
    ],
  },
  {
    id: 'meeting-spaces',
    icon: Monitor,
    title: 'Modernize Meeting Spaces',
    headline: 'Smart Collaboration & Unified Communications',
    description: 'Transform your conference rooms into modern collaboration hubs. Our unified communication solutions integrate video conferencing, wireless presentation, and smart room controls to create seamless meeting experiences for in-office and remote teams.',
    color: 'bg-emerald-500',
    benefits: [
      'Seamless video conferencing experiences',
      'One-touch meeting room controls',
      'Integration with Microsoft Teams & Zoom',
      'Improved team collaboration and productivity',
      'Professional presentation capabilities',
      'Reduced IT support tickets for AV issues',
    ],
    features: [
      'Video Conferencing Systems',
      'Wireless Presentation Solutions',
      'Smart Room Booking Systems',
      'Digital Signage Solutions',
      'Audio/Visual Integration',
      'Interactive Display Boards',
    ],
    relatedServices: [
      { title: 'Manage Microsoft 365', link: '/solutions/microsoft-365' },
      { title: 'Streamline IT Support', link: '/solutions/it-support' },
      { title: 'Upgrade Enterprise Hardware', link: '/solutions/enterprise-hardware' },
    ],
  },
  {
    id: 'physical-security',
    icon: Lock,
    title: 'Enhance Physical Security',
    headline: 'Integrated Access Control & Surveillance',
    description: 'Protect your premises with comprehensive physical security solutions. From biometric access control to AI-powered CCTV surveillance, we provide end-to-end security systems that integrate seamlessly with your IT infrastructure.',
    color: 'bg-amber-500',
    benefits: [
      'Centralized security management',
      'Real-time incident monitoring and alerts',
      'Integration with IT security systems',
      'Reduced unauthorized access incidents',
      'Comprehensive visitor management',
      'Detailed access logs and reporting',
    ],
    features: [
      'Biometric Access Control (ZKTeco)',
      'CCTV & Video Surveillance (Dahua)',
      'Visitor Management Systems',
      'Intercom & Door Entry Systems',
      'Time & Attendance Solutions',
      'Integrated Security Platforms',
    ],
    relatedServices: [
      { title: 'Secure Your Network', link: '/solutions/secure-network' },
      { title: 'Strengthen Infrastructure', link: '/solutions/infrastructure' },
      { title: 'Upgrade Enterprise Hardware', link: '/solutions/enterprise-hardware' },
    ],
  },
  {
    id: 'cloud-operations',
    icon: Cloud,
    title: 'Optimize Cloud Operations',
    headline: 'Optimize Cloud Operations: Azure & Microsoft 365',
    description: 'Maximize your Microsoft Cloud ROI with Enhance Tech. Optimize Azure infrastructure, streamline Microsoft 365 management, and control cloud costs.',
    color: 'bg-cyan-500',
    benefits: [
      'Reduced cloud infrastructure costs',
      'Improved application performance',
      'Enhanced security and compliance',
      'Automated scaling and optimization',
      'Expert cloud architecture guidance',
      '24/7 cloud monitoring and support',
    ],
    features: [
      'AWS Cloud Migration Services',
      'Cloud Cost Optimization',
      'Infrastructure as Code (IaC)',
      'Cloud Security & Compliance',
      'Serverless Architecture',
      'DevOps & CI/CD Pipelines',
    ],
    relatedServices: [
      { title: 'Strengthen Infrastructure', link: '/solutions/infrastructure' },
      { title: 'Prevent Data Loss', link: '/solutions/prevent-data-loss' },
      { title: 'Streamline IT Support', link: '/solutions/it-support' },
    ],
  },
  {
    id: 'cyber-threats',
    icon: ShieldAlert,
    title: 'Stop Cyber Threats',
    headline: 'Advanced Threat Detection & Response',
    description: 'Defend your organization against ransomware, phishing, and advanced persistent threats. Our proactive security solutions combine AI-powered threat detection with rapid incident response to keep your business protected around the clock.',
    color: 'bg-red-500',
    benefits: [
      'Proactive threat hunting and detection',
      'Rapid incident response and containment',
      'Protection against zero-day exploits',
      'Employee security awareness training',
      'Reduced breach risk and recovery time',
      'Compliance with cybersecurity frameworks',
    ],
    features: [
      'Endpoint Detection & Response (EDR)',
      'Security Information & Event Management (SIEM)',
      'Email Security & Anti-Phishing (Proofpoint)',
      'Vulnerability Assessment & Penetration Testing',
      'Security Awareness Training',
      'Incident Response Planning',
    ],
    relatedServices: [
      { title: 'Secure Your Network', link: '/solutions/secure-network' },
      { title: 'Prevent Data Loss', link: '/solutions/prevent-data-loss' },
      { title: 'Manage Microsoft 365', link: '/solutions/microsoft-365' },
    ],
  },
  {
    id: 'enterprise-hardware',
    icon: HardDrive,
    title: 'Upgrade Enterprise Hardware',
    headline: 'Premium IT Hardware Procurement',
    description: 'Source and deploy enterprise-grade hardware from the world\'s leading vendors. We provide servers, storage, networking equipment, and workstations with competitive pricing, expert configuration, and ongoing support.',
    color: 'bg-indigo-500',
    benefits: [
      'Access to top-tier global vendors',
      'Competitive pricing and licensing',
      'Expert hardware configuration',
      'Warranty and maintenance support',
      'Lifecycle management services',
      'Quick deployment and installation',
    ],
    features: [
      'Server Solutions (Dell, HP, Lenovo)',
      'Storage Systems (SAN, NAS)',
      'Networking Equipment (Cisco, Aruba)',
      'Power Solutions (Vertiv UPS)',
      'Workstations & Laptops',
      'Peripheral & Accessories',
    ],
    relatedServices: [
      { title: 'Strengthen Infrastructure', link: '/solutions/infrastructure' },
      { title: 'Streamline IT Support', link: '/solutions/it-support' },
      { title: 'Optimize Cloud Operations', link: '/solutions/cloud-operations' },
    ],
  },
  {
    id: 'it-support',
    icon: Headphones,
    title: 'Streamline IT Support',
    headline: 'Managed IT Services & Helpdesk Support',
    description: 'Reduce downtime and free your team with comprehensive managed IT services. Our 24/7 helpdesk, proactive monitoring, and expert technical support ensure your technology works for you, not against you.',
    color: 'bg-orange-500',
    benefits: [
      'Reduced IT operational costs',
      'Faster issue resolution times',
      'Proactive problem prevention',
      'Access to certified IT experts',
      'Predictable monthly IT spending',
      'Improved employee productivity',
    ],
    features: [
      '24/7 Helpdesk Support',
      'Remote Monitoring & Management',
      'IT Service Management (HaloITSM)',
      'Patch Management & Updates',
      'Asset Management & Tracking',
      'IT Documentation & Knowledge Base',
    ],
    relatedServices: [
      { title: 'Strengthen Infrastructure', link: '/solutions/infrastructure' },
      { title: 'Manage Microsoft 365', link: '/solutions/microsoft-365' },
      { title: 'Upgrade Enterprise Hardware', link: '/solutions/enterprise-hardware' },
    ],
  },
  {
    id: 'infrastructure',
    icon: Server,
    title: 'Strengthen Infrastructure',
    headline: 'Resilient IT Infrastructure Solutions',
    description: 'Build a robust and scalable IT foundation with our infrastructure solutions. From data center optimization to power management, we design and implement infrastructure that supports your business growth and ensures maximum uptime.',
    color: 'bg-slate-600',
    benefits: [
      'Improved system reliability and uptime',
      'Scalable infrastructure for growth',
      'Optimized data center operations',
      'Enhanced disaster recovery capabilities',
      'Reduced energy and operational costs',
      'Future-proof technology investments',
    ],
    features: [
      'Data Center Design & Implementation',
      'Server Virtualization (VMware, Hyper-V)',
      'Power & Cooling Solutions (Vertiv)',
      'Network Infrastructure Design',
      'High Availability & Clustering',
      'Infrastructure Monitoring & Management',
    ],
    relatedServices: [
      { title: 'Optimize Cloud Operations', link: '/solutions/cloud-operations' },
      { title: 'Upgrade Enterprise Hardware', link: '/solutions/enterprise-hardware' },
      { title: 'Secure Your Network', link: '/solutions/secure-network' },
    ],
  },
  {
    id: 'microsoft-365',
    icon: Settings,
    title: 'Manage Microsoft 365',
    headline: 'Microsoft 365 Deployment & Management',
    description: 'Get the most from your Microsoft 365 investment with expert deployment, migration, and ongoing management services. We help you leverage the full power of Microsoft\'s productivity suite while ensuring security and compliance.',
    color: 'bg-sky-500',
    benefits: [
      'Seamless cloud migration experience',
      'Optimized licensing and cost management',
      'Enhanced security and compliance',
      'Improved collaboration and productivity',
      'Expert technical support and training',
      'Integration with existing systems',
    ],
    features: [
      'Microsoft 365 Migration & Deployment',
      'SharePoint & OneDrive Management',
      'Exchange Online Administration',
      'Teams Deployment & Optimization',
      'Microsoft 365 Security & Compliance',
      'AvePoint Backup & Management',
    ],
    relatedServices: [
      { title: 'Prevent Data Loss', link: '/solutions/prevent-data-loss' },
      { title: 'Streamline IT Support', link: '/solutions/it-support' },
      { title: 'Modernize Meeting Spaces', link: '/solutions/meeting-spaces' },
    ],
  },
];

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();

  const solution = solutionsData.find((s) => s.id === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const IconComponent = solution.icon;

  const serviceSchema = createServiceSchema(solution.title, solution.description);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: 'https://itenhance.tech' },
    { name: 'Solutions', url: 'https://itenhance.tech/solutions' },
    { name: solution.title, url: `https://itenhance.tech/solutions/${solution.id}` },
  ]);

  return (
    <main className="min-h-screen page-bg-light">
      <SEO
        title={`${solution.title} | ENHANCE TECH Solutions`}
        description={solution.description}
        keywords={`${solution.title}, IT solutions Dubai, ${solution.features.slice(0, 3).join(', ')}, enterprise security UAE`}
        canonicalUrl={`https://itenhance.tech/solutions/${solution.id}`}
        structuredData={{ "@graph": [serviceSchema, breadcrumbSchema] }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 page-section-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(var(--glow-cyan))]/5" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[hsl(var(--glow-cyan))]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Solution</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6 animate-fade-up leading-tight" style={{ animationDelay: '0.1s' }}>
                {solution.headline}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed animate-fade-up mb-8" style={{ animationDelay: '0.2s' }}>
                {solution.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Link to="/demo" className="btn-primary">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary border-slate-300 text-slate-900 hover:bg-slate-100">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className={`w-40 h-40 lg:w-56 lg:h-56 rounded-3xl ${solution.color} flex items-center justify-center shadow-2xl animate-fade-up`} style={{ animationDelay: '0.2s' }}>
                <IconComponent className="w-20 h-20 lg:w-28 lg:h-28 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Key Benefits</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover how {solution.title.toLowerCase()} can transform your business operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
              >
                <div className={`w-10 h-10 rounded-xl ${solution.color} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 mb-4">
              What's Included
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive features designed to address your specific needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-transparent hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[hsl(var(--glow-cyan))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10">
                  <div className={`w-3 h-3 rounded-full ${solution.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 page-section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Related Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore other solutions that complement {solution.title.toLowerCase()}.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {solution.relatedServices.map((service, index) => {
              const relatedSolution = solutionsData.find((s) => s.id === service.link.split('/').pop());
              const RelatedIcon = relatedSolution?.icon || Shield;
              const relatedColor = relatedSolution?.color || 'bg-primary';

              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group relative bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[hsl(var(--glow-cyan))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${relatedColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <RelatedIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-white to-[hsl(var(--glow-cyan))]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Talk to our experts to discover how we can help you {solution.title.toLowerCase()}.
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


    </main>
  );
}