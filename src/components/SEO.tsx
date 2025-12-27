import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  keywords = "IT solutions, cybersecurity, cloud services, managed IT, Dubai, UAE, enterprise security",
  canonicalUrl,
  ogImage = "/og-image.webp",
  structuredData
}: SEOProps) => {
  const siteUrl = 'https://itenhance.tech';
  const fullCanonicalUrl = canonicalUrl?.startsWith('http')
    ? canonicalUrl
    : canonicalUrl
      ? `${siteUrl}${canonicalUrl}`
      : siteUrl;

  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="ENHANCE TECH" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="ENHANCE TECH" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Base organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ENHANCE TECH",
  "url": "https://itenhance.tech",
  "logo": "https://itenhance.tech/logo.webp",
  "description": "Leading IT solutions provider in Dubai, UAE offering managed IT services, cybersecurity, cloud solutions, and enterprise technology.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Addiyar Building - Ground Floor - Sheikh Zayed Rd - Al Wasl",
    "addressLocality": "Dubai",
    "addressCountry": "UAE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+97143296840",
    "contactType": "customer service",
    "email": "connect@itenhance.tech"
  },
  "sameAs": [
    "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106953139&keywords=enhance%20tech&origin=RICH_QUERY_SUGGESTION&position=0&sid=nN~",
    "https://twitter.com/enhancetech"
  ]
};

// Service structured data generator
export const createServiceSchema = (serviceName: string, serviceDescription: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": organizationSchema,
  "description": serviceDescription,
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  }
});

// FAQ structured data generator
export const createFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Breadcrumb structured data generator
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export default SEO;
