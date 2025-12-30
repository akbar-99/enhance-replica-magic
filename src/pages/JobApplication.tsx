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
import { submitToHubSpot } from "@/lib/hubspot";
import { Loader2, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function JobApplication() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "+971",
        location: "",
        linkedinUrl: "",
        yearsOfExperience: "",
        visaStatus: "",
        expectedSalary: "",
        hearAboutUs: "",
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
            setFormData((prev) => ({
                ...prev,
                resume: e.target.files![0],
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
                !formData.yearsOfExperience
            ) {
                toast({
                    title: "Required fields missing",
                    description: "Please fill in all required fields",
                    variant: "destructive",
                });
                setIsSubmitting(false);
                return;
            }

            const hubspotData = {
                firstname: formData.fullName.split(" ")[0],
                lastname: formData.fullName.split(" ").slice(1).join(" ") || formData.fullName.split(" ")[0],
                email: formData.email,
                phone: `${formData.countryCode}${formData.phone}`,
                city: formData.location,
                linkedin_url: formData.linkedinUrl,
                years_of_experience: formData.yearsOfExperience,
                visa_status: formData.visaStatus,
                expected_salary: formData.expectedSalary,
                how_did_you_hear_about_us: formData.hearAboutUs,
                application_type: "Job",
            };

            const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
            const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_JOB_APPLICATION_FORM_ID || import.meta.env.VITE_HUBSPOT_FORM_ID;

            await submitToHubSpot(HUBSPOT_PORTAL_ID, HUBSPOT_FORM_ID, hubspotData);

            toast({
                title: "Application submitted successfully!",
                description: "We'll review your application and get back to you soon.",
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                countryCode: "+971",
                location: "",
                linkedinUrl: "",
                yearsOfExperience: "",
                visaStatus: "",
                expectedSalary: "",
                hearAboutUs: "",
                resume: null,
            });
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            console.error("Form submission error:", error);
            toast({
                title: "Submission failed",
                description: "There was an error submitting your application. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <SEO
                title="Job Application | Apply Now - Enhance Tech"
                description="Apply for job openings at Enhance Tech. Submit your application with CV and let's start your career journey with us."
                keywords="Job Application, Apply Now, Career, Enhance Tech, Submit CV, Resume"
                canonicalUrl="https://itenhance.tech/apply-job"
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
                            <h1 className="text-4xl font-bold text-slate-800 mb-4">Careers: Job Position</h1>
                            <p className="text-slate-600">
                                Complete the form below to submit your application. We're excited to learn more about you!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name and Email */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="fullName" className="text-slate-700 font-normal text-base">
                                        Full Name<span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="mt-1 bg-gray-50 border-gray-300"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-slate-700 font-normal text-base">
                                        Email<span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 bg-gray-50 border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number and Location */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="phone" className="text-slate-700 font-normal text-base">
                                        Phone Number<span className="text-red-500">*</span>
                                    </Label>
                                    <div className="flex gap-2 mt-1">
                                        <Select
                                            value={formData.countryCode}
                                            onValueChange={(value) => handleSelectChange("countryCode", value)}
                                        >
                                            <SelectTrigger className="w-24 bg-gray-50 border-gray-300">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="+971">🇦🇪 +971</SelectItem>
                                                <SelectItem value="+1">🇺🇸 +1</SelectItem>
                                                <SelectItem value="+44">🇬🇧 +44</SelectItem>
                                                <SelectItem value="+91">🇮🇳 +91</SelectItem>
                                                <SelectItem value="+92">🇵🇰 +92</SelectItem>
                                                <SelectItem value="+20">🇪🇬 +20</SelectItem>
                                                <SelectItem value="+966">🇸🇦 +966</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="flex-1 bg-gray-50 border-gray-300"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="location" className="text-slate-700 font-normal text-base">
                                        Current Location/City<span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        className="mt-1 bg-gray-50 border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* LinkedIn Profile URL */}
                            <div>
                                <Label htmlFor="linkedinUrl" className="text-slate-700 font-normal text-base">
                                    LinkedIn Profile URL<span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="linkedinUrl"
                                    name="linkedinUrl"
                                    value={formData.linkedinUrl}
                                    onChange={handleInputChange}
                                    className="mt-1 bg-gray-50 border-gray-300"
                                    required
                                />
                            </div>

                            {/* Years of Experience */}
                            <div>
                                <Label htmlFor="yearsOfExperience" className="text-slate-700 font-normal text-base">
                                    Years of Experience<span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleInputChange}
                                    className="mt-1 bg-gray-50 border-gray-300"
                                    required
                                />
                            </div>

                            {/* Visa Status and Expected Salary */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label htmlFor="visaStatus" className="text-slate-700 font-normal text-base">
                                        Visa Status
                                    </Label>
                                    <Select
                                        value={formData.visaStatus}
                                        onValueChange={(value) => handleSelectChange("visaStatus", value)}
                                    >
                                        <SelectTrigger className="mt-1 bg-gray-50 border-gray-300">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Resident Visa">Resident Visa</SelectItem>
                                            <SelectItem value="Work Visa">Work Visa</SelectItem>
                                            <SelectItem value="Visit Visa">Visit Visa</SelectItem>
                                            <SelectItem value="Citizen">Citizen</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="expectedSalary" className="text-slate-700 font-normal text-base">
                                        Expected Salary (in AED)
                                    </Label>
                                    <Input
                                        id="expectedSalary"
                                        name="expectedSalary"
                                        value={formData.expectedSalary}
                                        onChange={handleInputChange}
                                        className="mt-1 bg-gray-50 border-gray-300"
                                    />
                                </div>
                            </div>

                            {/* How did you hear about us */}
                            <div>
                                <Label htmlFor="hearAboutUs" className="text-slate-700 font-normal text-base">
                                    How did you hear about us?
                                </Label>
                                <Select
                                    value={formData.hearAboutUs}
                                    onValueChange={(value) => handleSelectChange("hearAboutUs", value)}
                                >
                                    <SelectTrigger className="mt-1 bg-gray-50 border-gray-300">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                        <SelectItem value="Job Board">Job Board</SelectItem>
                                        <SelectItem value="Company Website">Company Website</SelectItem>
                                        <SelectItem value="Referral">Referral</SelectItem>
                                        <SelectItem value="Social Media">Social Media</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Upload Resume */}
                            <div>
                                <Label htmlFor="resume" className="text-slate-700 font-normal text-base">
                                    Upload your Resume
                                </Label>
                                <div className="mt-1">
                                    <input
                                        ref={fileInputRef}
                                        id="resume"
                                        name="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>
                            </div>

                            {/* reCAPTCHA Placeholder */}
                            <div className="flex items-center gap-2 p-4 bg-gray-100 border border-gray-300 rounded w-fit">
                                <input type="checkbox" className="w-6 h-6" />
                                <div>
                                    <p className="text-sm font-medium text-slate-700">protected by reCAPTCHA</p>
                                    <p className="text-xs text-slate-500">Privacy - Terms</p>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="bg-coral-500 hover:bg-coral-600 text-white px-12 py-6 text-base rounded shadow-lg"
                                    style={{ backgroundColor: "#FF6B56" }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
