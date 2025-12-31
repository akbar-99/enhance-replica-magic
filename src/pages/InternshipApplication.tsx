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
import { submitToHubSpot, submitToPowerAutomate } from "@/lib/hubspot";
import {
    FileText,
    Upload,
    CheckCircle2,
    Loader2,
    User,
    Mail,
    Phone,
    MapPin,
    GraduationCap,
    FileCheck,
    Calendar,
    BookOpen,
    Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function InternshipApplication() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedinUrl: "",
        internshipArea: "",
        university: "",
        degree: "",
        fieldOfStudy: "",
        currentYear: "",
        graduationYear: "",
        gpa: "",
        relevantCourses: "",
        technicalSkills: "",
        softSkills: "",
        projects: "",
        previousInternships: "",
        extracurricular: "",
        availability: "",
        whyJoin: "",
        careerGoals: "",
        hearAboutUs: "",
    });

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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const allowedTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];
            if (!allowedTypes.includes(file.type)) {
                toast({
                    title: "Invalid file type",
                    description: "Please upload a PDF or DOC/DOCX file",
                    variant: "destructive",
                });
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                toast({
                    title: "File too large",
                    description: "Please upload a file smaller than 5MB",
                    variant: "destructive",
                });
                return;
            }
            setUploadedFile(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            const event = {
                target: { files: [file] },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            handleFileChange(event);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (
                !formData.fullName ||
                !formData.email ||
                !formData.phone ||
                !formData.internshipArea ||
                !uploadedFile
            ) {
                toast({
                    title: "Required fields missing",
                    description: "Please fill in all required fields and upload your CV/Resume",
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
                hs_linkedin_url: formData.linkedinUrl,
                application_type: "Internship",
                internship_area: formData.internshipArea,
                university: formData.university,
                degree: formData.degree,
                major: formData.fieldOfStudy,
                current_year: formData.currentYear,
                graduation_year: formData.graduationYear,
                gpa: formData.gpa,
                relevant_courses: formData.relevantCourses,
                technical_skills: formData.technicalSkills,
                soft_skills: formData.softSkills,
                projects: formData.projects,
                previous_internships: formData.previousInternships,
                extracurricular: formData.extracurricular,
                availability: formData.availability,
                why_join_enhance_tech: formData.whyJoin,
                career_goals: formData.careerGoals,
                referral_source: formData.hearAboutUs,
                resume_filename: uploadedFile.name,
            };

            const HUBSPOT_PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
            const HUBSPOT_FORM_ID = import.meta.env.VITE_HUBSPOT_INTERNSHIP_FORM_ID || import.meta.env.VITE_HUBSPOT_FORM_ID;

            await submitToHubSpot(HUBSPOT_PORTAL_ID, HUBSPOT_FORM_ID, hubspotData);

            // Optional: Send to Power Automate if configured (for file handling)
            const POWER_AUTOMATE_URL = import.meta.env.VITE_POWER_AUTOMATE_URL;
            if (POWER_AUTOMATE_URL && POWER_AUTOMATE_URL !== "your_power_automate_webhook_url_here") {
                await submitToPowerAutomate(POWER_AUTOMATE_URL, hubspotData, uploadedFile);
            }

            toast({
                title: "Internship application submitted successfully!",
                description: "We'll review your application and get back to you soon.",
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                location: "",
                linkedinUrl: "",
                internshipArea: "",
                university: "",
                degree: "",
                fieldOfStudy: "",
                currentYear: "",
                graduationYear: "",
                gpa: "",
                relevantCourses: "",
                technicalSkills: "",
                softSkills: "",
                projects: "",
                previousInternships: "",
                extracurricular: "",
                availability: "",
                whyJoin: "",
                careerGoals: "",
                hearAboutUs: "",
            });
            setUploadedFile(null);
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
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <SEO
                title="Internship Application | Apply Now - Enhance Tech"
                description="Apply for our internship program at Enhance Tech. Gain hands-on experience in IT, cybersecurity, and cloud technologies."
                keywords="Internship Application, Student Internship, Tech Internship, IT Internship, Enhance Tech, Apply"
                canonicalUrl="https://itenhance.tech/apply-internship"
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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-300/50 rounded-full text-cyan-700 text-sm font-medium mb-6"
                        >
                            <GraduationCap className="w-4 h-4" />
                            Internship Application
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mb-6"
                        >
                            Apply for Internship Program
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                        >
                            Start your career in IT & Cybersecurity. Complete the form below to join our 6-month internship program!
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
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
                                        <p className="text-sm text-slate-600">Tell us about yourself</p>
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
                                            Email Address <span className="text-red-500">*</span>
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
                                            Current Location/City
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
                                            />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="linkedinUrl" className="text-slate-700 font-medium">
                                            LinkedIn Profile URL (Optional)
                                        </Label>
                                        <Input
                                            id="linkedinUrl"
                                            name="linkedinUrl"
                                            value={formData.linkedinUrl}
                                            onChange={handleInputChange}
                                            placeholder="https://linkedin.com/in/yourprofile"
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Internship Area */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <BookOpen className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Internship Area</h2>
                                        <p className="text-sm text-slate-600">Which area interests you?</p>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="internshipArea" className="text-slate-700 font-medium">
                                        Select Internship Area <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={formData.internshipArea}
                                        onValueChange={(value) => handleSelectChange("internshipArea", value)}
                                        required
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select an internship area" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="IT Infrastructure">IT Infrastructure</SelectItem>
                                            <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                                            <SelectItem value="Cloud Technologies">Cloud Technologies</SelectItem>
                                            <SelectItem value="Sales & Marketing">Sales & Marketing</SelectItem>
                                            <SelectItem value="General Technology">General Technology</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                                        <p className="text-sm text-slate-600">Your academic background</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <Label htmlFor="university" className="text-slate-700 font-medium">
                                            University/College Name
                                        </Label>
                                        <Input
                                            id="university"
                                            name="university"
                                            value={formData.university}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Dubai University"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="degree" className="text-slate-700 font-medium">
                                            Degree Program
                                        </Label>
                                        <Input
                                            id="degree"
                                            name="degree"
                                            value={formData.degree}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Bachelor's, Diploma"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="fieldOfStudy" className="text-slate-700 font-medium">
                                            Field of Study/Major
                                        </Label>
                                        <Input
                                            id="fieldOfStudy"
                                            name="fieldOfStudy"
                                            value={formData.fieldOfStudy}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Computer Science, IT"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="currentYear" className="text-slate-700 font-medium">
                                            Current Year/Level
                                        </Label>
                                        <Select
                                            value={formData.currentYear}
                                            onValueChange={(value) => handleSelectChange("currentYear", value)}
                                        >
                                            <SelectTrigger className="mt-2">
                                                <SelectValue placeholder="Select your year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1st Year">1st Year</SelectItem>
                                                <SelectItem value="2nd Year">2nd Year</SelectItem>
                                                <SelectItem value="3rd Year">3rd Year</SelectItem>
                                                <SelectItem value="4th Year">4th Year</SelectItem>
                                                <SelectItem value="Graduate">Recently Graduated</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label htmlFor="graduationYear" className="text-slate-700 font-medium">
                                            Expected Graduation Year
                                        </Label>
                                        <div className="relative mt-2">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <Input
                                                id="graduationYear"
                                                name="graduationYear"
                                                value={formData.graduationYear}
                                                onChange={handleInputChange}
                                                placeholder="2025"
                                                className="pl-10"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="gpa" className="text-slate-700 font-medium">
                                            GPA/Grade (Optional)
                                        </Label>
                                        <Input
                                            id="gpa"
                                            name="gpa"
                                            value={formData.gpa}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 3.5/4.0 or 85%"
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="relevantCourses" className="text-slate-700 font-medium">
                                            Relevant Courses (Optional)
                                        </Label>
                                        <Textarea
                                            id="relevantCourses"
                                            name="relevantCourses"
                                            value={formData.relevantCourses}
                                            onChange={handleInputChange}
                                            placeholder="List relevant courses: Data Structures, Networking, Cybersecurity..."
                                            className="mt-2"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Skills & Experience */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                                        <Award className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Skills & Projects</h2>
                                        <p className="text-sm text-slate-600">Show us what you've learned</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="technicalSkills" className="text-slate-700 font-medium">
                                            Technical Skills
                                        </Label>
                                        <Textarea
                                            id="technicalSkills"
                                            name="technicalSkills"
                                            value={formData.technicalSkills}
                                            onChange={handleInputChange}
                                            placeholder="Programming languages, tools, software (e.g., Python, Java, Linux, AWS...)"
                                            className="mt-2 min-h-[100px]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="softSkills" className="text-slate-700 font-medium">
                                            Soft Skills & Languages
                                        </Label>
                                        <Textarea
                                            id="softSkills"
                                            name="softSkills"
                                            value={formData.softSkills}
                                            onChange={handleInputChange}
                                            placeholder="Communication, teamwork, problem-solving, languages spoken..."
                                            className="mt-2"
                                            rows={3}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="projects" className="text-slate-700 font-medium">
                                            Academic/Personal Projects (Optional)
                                        </Label>
                                        <Textarea
                                            id="projects"
                                            name="projects"
                                            value={formData.projects}
                                            onChange={handleInputChange}
                                            placeholder="Describe any relevant projects you've worked on..."
                                            className="mt-2 min-h-[100px]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="previousInternships" className="text-slate-700 font-medium">
                                            Previous Internships/Work Experience (Optional)
                                        </Label>
                                        <Textarea
                                            id="previousInternships"
                                            name="previousInternships"
                                            value={formData.previousInternships}
                                            onChange={handleInputChange}
                                            placeholder="List any previous internships, part-time jobs, or volunteer work..."
                                            className="mt-2 min-h-[100px]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="extracurricular" className="text-slate-700 font-medium">
                                            Extracurricular Activities (Optional)
                                        </Label>
                                        <Textarea
                                            id="extracurricular"
                                            name="extracurricular"
                                            value={formData.extracurricular}
                                            onChange={handleInputChange}
                                            placeholder="Clubs, societies, volunteer work, leadership roles..."
                                            className="mt-2"
                                            rows={3}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="availability" className="text-slate-700 font-medium">
                                            When can you start?
                                        </Label>
                                        <Select
                                            value={formData.availability}
                                            onValueChange={(value) => handleSelectChange("availability", value)}
                                        >
                                            <SelectTrigger className="mt-2">
                                                <SelectValue placeholder="Select your availability" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Immediately">Immediately</SelectItem>
                                                <SelectItem value="Within 2 weeks">Within 2 weeks</SelectItem>
                                                <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                                                <SelectItem value="After semester ends">After semester ends</SelectItem>
                                                <SelectItem value="Summer break">Summer break</SelectItem>
                                                <SelectItem value="Winter break">Winter break</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            {/* Documents */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-orange-600 rounded-xl flex items-center justify-center">
                                        <FileCheck className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">Resume/CV</h2>
                                        <p className="text-sm text-slate-600">Upload your resume or CV</p>
                                    </div>
                                </div>

                                <div>
                                    <Label className="text-slate-700 font-medium">
                                        Upload Resume/CV <span className="text-red-500">*</span>
                                    </Label>
                                    <div
                                        className="mt-2 border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-cyan-500 transition-colors cursor-pointer"
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            required
                                        />
                                        {uploadedFile ? (
                                            <div className="flex items-center justify-center gap-3 text-green-600">
                                                <CheckCircle2 className="w-6 h-6" />
                                                <div className="text-left">
                                                    <p className="font-medium">{uploadedFile.name}</p>
                                                    <p className="text-sm text-slate-600">
                                                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                                                <p className="text-slate-700 font-medium mb-2">
                                                    Click to upload or drag and drop
                                                </p>
                                                <p className="text-sm text-slate-500">PDF, DOC, or DOCX (Max 5MB)</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="border-t border-slate-200 pt-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Enhance Tech?</h2>

                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="whyJoin" className="text-slate-700 font-medium">
                                            Why do you want to join our internship program?
                                        </Label>
                                        <Textarea
                                            id="whyJoin"
                                            name="whyJoin"
                                            value={formData.whyJoin}
                                            onChange={handleInputChange}
                                            placeholder="Tell us what attracts you to this internship opportunity..."
                                            className="mt-2 min-h-[120px]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="careerGoals" className="text-slate-700 font-medium">
                                            What are your career goals?
                                        </Label>
                                        <Textarea
                                            id="careerGoals"
                                            name="careerGoals"
                                            value={formData.careerGoals}
                                            onChange={handleInputChange}
                                            placeholder="Where do you see yourself in the next few years?"
                                            className="mt-2 min-h-[100px]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="hearAboutUs" className="text-slate-700 font-medium">
                                            How did you hear about us?
                                        </Label>
                                        <Select
                                            value={formData.hearAboutUs}
                                            onValueChange={(value) => handleSelectChange("hearAboutUs", value)}
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
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                                    <div>
                                        <p className="font-semibold text-slate-900 mb-1">Ready to start your journey?</p>
                                        <p className="text-sm text-slate-600">
                                            Submit your application to join our internship program
                                        </p>
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg whitespace-nowrap min-w-[180px]"
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
        </main>
    );
}
