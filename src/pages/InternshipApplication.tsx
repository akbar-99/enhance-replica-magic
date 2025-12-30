import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function InternshipApplication() {
    useEffect(() => {
        // Load HubSpot form embed script
        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Initialize the form once script is loaded
        script.onload = () => {
            if (window.hbspt) {
                const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
                const formId = import.meta.env.VITE_HUBSPOT_INTERNSHIP_FORM_ID;

                if (portalId && formId) {
                    window.hbspt.forms.create({
                        region: "eu1",
                        portalId: portalId,
                        formId: formId,
                        target: "#hubspot-form-container"
                    });
                }
            }
        };

        return () => {
            // Cleanup script on unmount
            document.body.removeChild(script);
        };
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <SEO
                title="Internship Application | Apply Now - Enhance Tech"
                description="Apply for internship opportunities at Enhance Tech. Submit your application and start your career journey with us."
                keywords="Internship Application, Apply Now, Career, Enhance Tech, Student Internship"
                canonicalUrl="https://itenhance.tech/apply"
            />

            {/* Application Form */}
            <section className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white"
                    >
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-slate-800 mb-4">Internship Application</h1>
                            <p className="text-slate-600">
                                Complete the form below to submit your application. We're excited to learn more about you!
                            </p>
                        </div>

                        {/* HubSpot Form Container */}
                        <div
                            id="hubspot-form-container"
                            style={{
                                // Hide HubSpot branding
                                ['--hs-branding' as any]: 'none'
                            }}
                            className="hubspot-form-wrapper"
                        ></div>
                    </motion.div>
                </div>
            </section>

            {/* Custom CSS to hide HubSpot branding and overlapping elements */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hubspot-form-wrapper .hs-form-iframe,
                .hubspot-form-wrapper iframe {
                    border: none !important;
                }
                
                /* Hide the HubSpot branding footer */
                .hubspot-form-wrapper .hs_recaptcha,
                .legal-consent-container,
                a[href*="hubspot.com/products/forms"],
                a[href*="Create your own free forms"],
                .hs-form > div:last-child a[href*="hubspot"],
                div[class*="branding"],
                div[class*="legal-consent"],
                .hs-form .hs-submit + div,
                iframe[title*="HubSpot"] ~ div,
                .hs-richtext:has(a[href*="hubspot.com/products/forms"]) {
                    display: none !important;
                    visibility: hidden !important;
                    height: 0 !important;
                    overflow: hidden !important;
                }
            `}} />
        </main>
    );
}

// TypeScript declaration for HubSpot
declare global {
    interface Window {
        hbspt: any;
    }
}
