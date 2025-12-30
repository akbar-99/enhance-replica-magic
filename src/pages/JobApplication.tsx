import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { submitToHubSpot } from "@/lib/hubspot";
import {
    FileText,
    Loader2,
    CheckCircle2,
    User,
    Mail,
    Phone,
    MapPin,
    Briefcase,
    GraduationCap,
    Calendar,
    Upload,
    Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Turnstile } from "@marsidev/react-turnstile";

export default function JobApplication() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedinUrl: "",
        yearsOfExperience: "",
        visaStatus: "",
        expectedSalary: "",
        internshipArea: "",
        university: "",
        degree: "",
        major: "",
        currentYear: [] as string[],
        graduationYear: "",
        hearAboutUs: "",
        resume: null as File | null,
    });

    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    const handleCheckboxChange = (value: string) => {
        setFormData((prev) => {
            const currentYear = [...prev.currentYear];
            if (currentYear.includes(value)) {
                return { ...prev, currentYear: currentYear.filter((v) => v !== value) };
            } else {
                return { ...prev, currentYear: [...currentYear, value] };
            }
        });
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
                e.target.value = "";
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

            const hubspotData = {
                firstname: formData.fullName.split(" ")[0],
                lastname: formData.fullName.split(" ").slice(1).join(" ") || formData.fullName.split(" ")[0],
                email: formData.email,
                phone: formData.phone,
                city: formData.location,
                state: formData.location,
                hs_linkedin_url: formData.linkedinUrl,
                application_type: "Job", // Redesign is for Job position primarily
                seniority: formData.yearsOfExperience,
                visa_status: formData.visaStatus,
                salary_expectation: formData.expectedSalary,
                internship_area: formData.internshipArea,
                university: formData.university,
                degree: formData.degree,
                major: formData.major,
                current_year: formData.currentYear.join(", "),
                graduation_year: formData.graduationYear,
                referral_source: formData.hearAboutUs,
                resume_filename: formData.resume?.name || "",
            };

            const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
            const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_INTERNSHIP_FORM_ID || import.meta.env.VITE_HUBSPOT_JOB_APPLICATION_FORM_ID || import.meta.env.VITE_HUBSPOT_FORM_ID;

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
                location: "",
                linkedinUrl: "",
                yearsOfExperience: "",
                visaStatus: "",
                expectedSalary: "",
                internshipArea: "",
                university: "",
                degree: "",
                major: "",
                currentYear: [],
                graduationYear: "",
                hearAboutUs: "",
                resume: null,
            });
            setTurnstileToken(null);
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
                title="Job & Internship Application | Apply Now - Enhance Tech"
                description="Apply for job openings and internship positions at Enhance Tech. Submit your application with CV and let's start your career journey with us."
                keywords="Job Application, Internship Application, Apply Now, Career, Enhance Tech, Submit CV, Resume"
                canonicalUrl="https://itenhance.tech/apply"
            />

            <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">Internship Program</h1>
                        <p className="text-slate-600">
                            Complete the form below to submit your application. We're excited to learn more about you!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            {/* Row 1: Name & Email */}
                            <div>
                                <Label htmlFor="fullName" className="text-slate-700 font-medium mb-1.5 block">
                                    Full Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-slate-700 font-medium mb-1.5 block">
                                    Email <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                    required
                                />
                            </div>

                            {/* Row 2: Phone & Location */}
                            <div>
                                <Label htmlFor="phone" className="text-slate-700 font-medium mb-1.5 block">
                                    Phone Number <span className="text-red-500">*</span>
                                </Label>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 border border-slate-200 bg-slate-50 rounded-md px-3 h-11 shrink-0">
                                        <img src="https://flagcdn.com/w20/ae.png" alt="UAE Flag" className="w-5 h-auto rounded-sm" />
                                        <span className="text-slate-600 text-sm font-medium">+971</span>
                                    </div>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="bg-slate-50 border-slate-200 h-11"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="location" className="text-slate-700 font-medium mb-1.5 block">
                                    Current Location/City <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                    required
                                />
                            </div>

                            {/* Row 3: LinkedIn */}
                            <div className="md:col-span-2">
                                <Label htmlFor="linkedinUrl" className="text-slate-700 font-medium mb-1.5 block">
                                    LinkedIn Profile URL <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="linkedinUrl"
                                    name="linkedinUrl"
                                    value={formData.linkedinUrl}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                    required
                                />
                            </div>

                            {/* Row 4: Years of Experience */}
                            <div className="md:col-span-2">
                                <Label htmlFor="yearsOfExperience" className="text-slate-700 font-medium mb-1.5 block">
                                    Years of Experience <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="yearsOfExperience"
                                    name="yearsOfExperience"
                                    value={formData.yearsOfExperience}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                    required
                                />
                            </div>

                            {/* Row 5: Visa & Salary */}
                            <div>
                                <Label htmlFor="visaStatus" className="text-slate-700 font-medium mb-1.5 block">
                                    Visa Status
                                </Label>
                                <Select
                                    value={formData.visaStatus}
                                    onValueChange={(value) => handleSelectChange("visaStatus", value)}
                                >
                                    <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Residence Visa">Residence Visa</SelectItem>
                                        <SelectItem value="Visit Visa">Visit Visa</SelectItem>
                                        <SelectItem value="Student Visa">Student Visa</SelectItem>
                                        <SelectItem value="Employment Visa">Employment Visa</SelectItem>
                                        <SelectItem value="Golden Visa">Golden Visa</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="expectedSalary" className="text-slate-700 font-medium mb-1.5 block">
                                    Expected Salary (in AED)
                                </Label>
                                <Input
                                    id="expectedSalary"
                                    name="expectedSalary"
                                    type="number"
                                    value={formData.expectedSalary}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                />
                            </div>

                            {/* Row 6: Internship Area */}
                            <div className="md:col-span-2">
                                <Label htmlFor="internshipArea" className="text-slate-700 font-medium mb-1.5 block">
                                    Internship Area
                                </Label>
                                <Select
                                    value={formData.internshipArea}
                                    onValueChange={(value) => handleSelectChange("internshipArea", value)}
                                >
                                    <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                                        <SelectValue placeholder="Select Area" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="IT Infrastructure">IT Infrastructure</SelectItem>
                                        <SelectItem value="Software Development">Software Development</SelectItem>
                                        <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                                        <SelectItem value="Sales & Marketing">Sales & Marketing</SelectItem>
                                        <SelectItem value="Finance">Finance</SelectItem>
                                        <SelectItem value="HR">HR</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Row 7: University */}
                            <div className="md:col-span-2">
                                <Label htmlFor="university" className="text-slate-700 font-medium mb-1.5 block">
                                    University/College Name
                                </Label>
                                <Input
                                    id="university"
                                    name="university"
                                    value={formData.university}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                />
                            </div>

                            {/* Row 8: Degree & Major */}
                            <div>
                                <Label htmlFor="degree" className="text-slate-700 font-medium mb-1.5 block">
                                    Degree
                                </Label>
                                <Input
                                    id="degree"
                                    name="degree"
                                    value={formData.degree}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                />
                            </div>
                            <div>
                                <Label htmlFor="major" className="text-slate-700 font-medium mb-1.5 block">
                                    Field of Study/Major
                                </Label>
                                <Input
                                    id="major"
                                    name="major"
                                    value={formData.major}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                />
                            </div>

                            {/* Row 9: Level & Grad Year */}
                            <div>
                                <Label className="text-slate-700 font-medium mb-3 block">
                                    Current Year/Level
                                </Label>
                                <div className="space-y-2">
                                    {[
                                        "1st Year",
                                        "2nd Year",
                                        "3rd Year",
                                        "4th Year",
                                        "Graduate",
                                        "Post Graduate"
                                    ].map((level) => (
                                        <div key={level} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`level-${level}`}
                                                checked={formData.currentYear.includes(level)}
                                                onCheckedChange={() => handleCheckboxChange(level)}
                                                className="border-slate-300"
                                            />
                                            <label
                                                htmlFor={`level-${level}`}
                                                className="text-sm text-slate-600 cursor-pointer"
                                            >
                                                {level}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="graduationYear" className="text-slate-700 font-medium mb-1.5 block">
                                    Expected Graduation Year
                                </Label>
                                <Input
                                    id="graduationYear"
                                    name="graduationYear"
                                    value={formData.graduationYear}
                                    onChange={handleInputChange}
                                    className="bg-slate-50 border-slate-200 h-11"
                                />
                            </div>

                            {/* Row 10: Referrer */}
                            <div className="md:col-span-2">
                                <Label htmlFor="hearAboutUs" className="text-slate-700 font-medium mb-1.5 block">
                                    How did you hear about us?
                                </Label>
                                <Select
                                    value={formData.hearAboutUs}
                                    onValueChange={(value) => handleSelectChange("hearAboutUs", value)}
                                >
                                    <SelectTrigger className="bg-slate-50 border-slate-200 h-11">
                                        <SelectValue placeholder="Select an option" />
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

                            {/* Row 11: Resume Upload */}
                            <div className="md:col-span-2">
                                <Label htmlFor="resume" className="text-slate-700 font-medium mb-1.5 block">
                                    Upload your Resume <span className="text-red-500">*</span>
                                </Label>
                                <div className="mt-2">
                                    <label
                                        htmlFor="resume"
                                        className="flex flex-col items-center justify-center w-full min-h-[120px] border-2 border-dashed border-slate-200 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors px-4 py-6"
                                    >
                                        <Upload className="w-8 h-8 text-slate-400 mb-2" />
                                        <p className="text-sm text-slate-600 text-center">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">
                                            PDF, DOC, DOCX (Max 2MB)
                                        </p>
                                        {formData.resume && (
                                            <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-sm font-medium">
                                                <FileText className="w-4 h-4" />
                                                {formData.resume.name}
                                            </div>
                                        )}
                                        <input
                                            id="resume"
                                            name="resume"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Row 12: Turnstile Captcha */}
                        <div className="flex justify-center py-6">
                            <Turnstile
                                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                                onSuccess={(token) => setTurnstileToken(token)}
                                onExpire={() => setTurnstileToken(null)}
                                onError={() => setTurnstileToken(null)}
                            />
                        </div>

                        <div className="flex pt-4">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-12 h-12 bg-[#0F172A] hover:bg-slate-800 text-white rounded-md font-semibold text-base shadow-sm"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}
