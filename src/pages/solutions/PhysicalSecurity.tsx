import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEO from '../../components/SEO';

const PhysicalSecurity = () => {
    return (
        <>
            <SEO
                title="Physical Security & Surveillance | Enhance Tech"
                description="Protect your premises with Enhance Tech. Advanced CCTV, Access Control, and Gate Barriers. Integrated physical security solutions for UAE offices and warehouses."
                keywords="physical security, CCTV Dubai, access control, biometric systems, gate barriers, SIRA compliance, surveillance UAE"
                canonicalUrl="https://enhancetech.ae/solutions/physical-security"
            />

            {/* Placeholder - Content to be added */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-background">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                            <Shield className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Physical Security & Surveillance
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Content coming soon...
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default PhysicalSecurity;
