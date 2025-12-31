import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot, submitToPowerAutomate } from "@/lib/hubspot";
import {
    FileText,
    Loader2,
    CheckCircle2,
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    Globe,
    Upload,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export default function JobOpeningApplication() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedinUrl: "",
        yearsOfExperience: "",
        visaStatus: "",
        expectedSalary: "",
        referralSource: "",
        resume: null as File | null,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 2 * 1024 * 1024) {
                toast({
                    title: "File too large",
                    description: "Please upload a resume smaller than 2MB",
                    variant: "destructive",
                });
                e.target.value = ""; // Clear the input
                return;
            }
            setFormData((prev) => ({
                ...prev,
                resume: file,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (
                !formData.fullName ||
                !formData.email ||
                !formData.phone ||
                !formData.location ||
                !formData.linkedinUrl ||
                !formData.yearsOfExperience ||
                !formData.resume ||
                !turnstileToken
            ) {
                toast({
                    title: "Required fields missing",
                    description: turnstileToken ? "Please upload your resume and fill in all required fields" : "Please complete the security check",
                    variant: "destructive",
                });
                setIsSubmitting(false);
                return;
            }

            // Map to HubSpot properties (custom properties might be needed in HubSpot)
            // For now mapping to standard contact properties where possible
            const hubspotData = {
                firstname: formData.fullName.split(" ")[0],
                lastname: formData.fullName.split(" ").slice(1).join(" ") || formData.fullName.split(" ")[0],
                email: formData.email,
                phone: formData.phone,
                city: formData.location,
                state: formData.location,
                hs_linkedin_url: formData.linkedinUrl,
                application_type: "Job",
                seniority: formData.yearsOfExperience,
                visa_status: formData.visaStatus,
                salary_expectation: formData.expectedSalary,
                referral_source: formData.referralSource,
                resume_filename: formData.resume?.name || "",
            };

            const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
            const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_JOB_APPLICATION_FORM_ID || import.meta.env.VITE_HUBSPOT_FORM_ID;

            await submitToHubSpot(HUBSPOT_PORTAL_ID, HUBSPOT_FORM_ID, hubspotData);

            // Optional: Send to Power Automate if configured (for file handling)
            const POWER_AUTOMATE_URL = import.meta.env.VITE_POWER_AUTOMATE_URL;
            if (POWER_AUTOMATE_URL && POWER_AUTOMATE_URL !== "your_power_automate_webhook_url_here") {
                await submitToPowerAutomate(POWER_AUTOMATE_URL, hubspotData, formData.resume);
            }

            toast({
                title: "Application submitted successfully!",
                description: "We'll review your application and get back to you soon.",
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                location: "",
                linkedinUrl: "",
                yearsOfExperience: "",
                visaStatus: "",
                expectedSalary: "",
                referralSource: "",
                resume: null,
            });
        } catch (error: any) {
            console.error("Form submission error:", error);
            toast({
                title: "Submission failed",
                description: error.message || "There was an error submitting your application. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <SEO
                title="Job Application | Apply Now - Enhance Tech"
                description="Apply for job openings at Enhance Tech. Join our team of experts."
                keywords="Job Application, Apply Now, Career, Enhance Tech, Jobs"
                canonicalUrl="https://itenhance.tech/apply-job"
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-300/50 rounded-full text-blue-700 text-sm font-medium mb-6"
                        >
                            <Briefcase className="w-4 h-4" />
                            Job Application
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6"
                        >
                            Join Our Team
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                        >
                            We are always looking for talented individuals to join our growing team.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">

                            {/* Personal Information */}
                            <div className="pt-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
                                        <p className="text-sm text-slate-600">Please provide your details below</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="fullName" className="text-slate-700 font-medium">
                                            Full Name <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="mt-2"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-slate-700 font-medium">
                                            Email <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative mt-2">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="phone" className="text-slate-700 font-medium">
                                            Phone Number <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative mt-2">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <Input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+971 XX XXX XXXX"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="location" className="text-slate-700 font-medium">
                                            Current Location/City <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative mt-2">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <Input
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                placeholder="Dubai, UAE"
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="linkedinUrl" className="text-slate-700 font-medium">
                                            LinkedIn Profile URL <span className="text-red-500">*</span>
                                        </Label>
                                        <Input
                                            id="linkedinUrl"
                                            name="linkedinUrl"
                                            value={formData.linkedinUrl}
                                            onChange={handleInputChange}
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            className="mt-2"
                                            required
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="yearsOfExperience" className="text-slate-700 font-medium">
                                            Years of Experience <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.yearsOfExperience}
                                            onValueChange={(value) => handleSelectChange("yearsOfExperience", value)}
                                            required
                                        >
                                            <SelectTrigger className="mt-2">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="0-1 years">0-1 years</SelectItem>
                                                <SelectItem value="1-3 years">1-3 years</SelectItem>
                                                <SelectItem value="3-5 years">3-5 years</SelectItem>
                                                <SelectItem value="5-10 years">5-10 years</SelectItem>
                                                <SelectItem value="10+ years">10+ years</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="visaStatus" className="text-slate-700 font-medium">
                                            Visa Status
                                        </Label>
                                        <div className="relative mt-2">
                                            <Select
                                                value={formData.visaStatus}
                                                onValueChange={(value) => handleSelectChange("visaStatus", value)}
                                            >
                                                <SelectTrigger className="w-full bg-white pl-10">
                                                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
                                                    <SelectValue placeholder="Select Visa Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Golden Visa">Golden Visa</SelectItem>
                                                    <SelectItem value="Employment Visa">Employment Visa</SelectItem>
                                                    <SelectItem value="Dependent Visa">Dependent Visa</SelectItem>
                                                    <SelectItem value="Visit Visa">Visit Visa</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="expectedSalary" className="text-slate-700 font-medium">
                                            Expected Salary (in AED)
                                        </Label>
                                        <div className="relative mt-2">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">AED</span>
                                            <Input
                                                id="expectedSalary"
                                                name="expectedSalary"
                                                type="number"
                                                value={formData.expectedSalary}
                                                onChange={handleInputChange}
                                                placeholder="e.g., 10000"
                                                className="pl-10"
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="referralSource" className="text-slate-700 font-medium">
                                            How did you hear about us? <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={formData.referralSource}
                                            onValueChange={(value) => handleSelectChange("referralSource", value)}
                                            required
                                        >
                                            <SelectTrigger className="mt-2">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                                <SelectItem value="Indeed">Indeed</SelectItem>
                                                <SelectItem value="SEO">SEO</SelectItem>
                                                <SelectItem value="Glassdoor">Glassdoor</SelectItem>
                                                <SelectItem value="Friend/Referral">Friend/Referral</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="resume" className="text-slate-700 font-medium">
                                            Upload your Resume <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="mt-2 flex items-center justify-center w-full">
                                            <label
                                                htmlFor="resume"
                                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                                            >
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <Upload className="w-8 h-8 text-slate-400 mb-2" />
                                                    <p className="text-sm text-slate-600">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-slate-500 mt-1">
                                                        PDF, DOC, DOCX (Max 2MB)
                                                    </p>
                                                    {formData.resume && (
                                                        <p className="text-sm text-blue-600 font-medium mt-2 flex items-center gap-1">
                                                            <FileText className="w-4 h-4" />
                                                            {formData.resume.name}
                                                        </p>
                                                    )}
                                                </div>
                                                <input
                                                    id="resume"
                                                    name="resume"
                                                    type="file"
                                                    className="hidden"
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx"
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-6 flex justify-center">
                                    <Turnstile
                                        siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                                        onSuccess={(token) => setTurnstileToken(token)}
                                        onExpire={() => setTurnstileToken(null)}
                                        onError={() => setTurnstileToken(null)}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                                    <div>
                                        <p className="font-semibold text-slate-900 mb-1">Ready to apply?</p>
                                        <p className="text-sm text-slate-600">
                                            Review your details before submitting
                                        </p>
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg whitespace-nowrap min-w-[180px]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                <CheckCircle2 className="mr-2 h-5 w-5" />
                                                Submit Application
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main >
    );
}
