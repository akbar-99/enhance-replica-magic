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
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function JobApplication() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedinUrl: "",
        position: "",
        university: "",
        degree: "",
        fieldOfStudy: "",
        graduationYear: "",
        currentYear: "",
        gpa: "",
        relevantCourses: "",
        technicalSkills: "",
        softSkills: "",
        projects: "",
        internshipExperience: "",
        extracurricular: "",
        availability: "",
        whyJoin: "",
        hearAboutUs: "",
        coverLetter: "",
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



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (
                !formData.fullName ||
                !formData.email ||
                !formData.phone ||

                !formData.position
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
                phone: formData.phone,
                city: formData.location,
                linkedin_url: formData.linkedinUrl,
                application_type: formData.position.toLowerCase().includes("intern") ? "Internship" : "Job",
                position_applied: formData.position,
                university: formData.university,
                degree: formData.degree,
                field_of_study: formData.fieldOfStudy,
                graduation_year: formData.graduationYear,
                current_year: formData.currentYear,
                gpa: formData.gpa,
                relevant_courses: formData.relevantCourses,
                technical_skills: formData.technicalSkills,
                soft_skills: formData.softSkills,
                projects: formData.projects,
                internship_experience: formData.internshipExperience,
                extracurricular: formData.extracurricular,
                availability: formData.availability,
                why_join_enhance_tech: formData.whyJoin,
                how_did_you_hear_about_us: formData.hearAboutUs,
                cover_letter: formData.coverLetter,
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
                location: "",
                linkedinUrl: "",
                position: "",
                university: "",
                degree: "",
                fieldOfStudy: "",
                graduationYear: "",
                currentYear: "",
                gpa: "",
                relevantCourses: "",
                technicalSkills: "",
                softSkills: "",
                projects: "",
                internshipExperience: "",
                extracurricular: "",
                availability: "",
                whyJoin: "",
                hearAboutUs: "",
                coverLetter: "",
            });
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

    const isInternship = formData.position.toLowerCase().includes("intern");

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <SEO
                title="Job & Internship Application | Apply Now - Enhance Tech"
                description="Apply for job openings and internship positions at Enhance Tech. Submit your application with CV and let's start your career journey with us."
                keywords="Job Application, Internship Application, Apply Now, Career, Enhance Tech, Submit CV, Resume"
                canonicalUrl="https://itenhance.tech/apply"
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
                            <FileText className="w-4 h-4" />
                            Application Form
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 mb-6"
                        >
                            Apply for Your{" "}
                            {isInternship ? "Internship" : "Dream Role"}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                        >
                            Complete the form below to submit your application. We're excited to learn more about you!
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
                            <div className="border-t border-slate-200 pt-10">
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
                                            LinkedIn Profile URL
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

                            {/* Position */}
                            <div className="border-t border-slate-200 pt-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <Briefcase className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">
                                            {isInternship ? "Internship" : "Position"} Details
                                        </h2>
                                        <p className="text-sm text-slate-600">Which role interests you?</p>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="position" className="text-slate-700 font-medium">
                                        {isInternship ? "Internship Area" : "Position Applied For"}{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={formData.position}
                                        onValueChange={(value) => handleSelectChange("position", value)}
                                        required
                                    >
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Select a position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Lead Generation Specialist">
                                                Lead Generation Specialist
                                            </SelectItem>
                                            <SelectItem value="Sales Coordinator">Sales Coordinator</SelectItem>
                                            <SelectItem value="IT Infrastructure Intern">
                                                IT Infrastructure Intern
                                            </SelectItem>
                                            <SelectItem value="Cybersecurity Intern">
                                                Cybersecurity Intern
                                            </SelectItem>
                                            <SelectItem value="Cloud Technologies Intern">
                                                Cloud Technologies Intern
                                            </SelectItem>
                                            <SelectItem value="Sales & Marketing Intern">
                                                Sales & Marketing Intern
                                            </SelectItem>
                                            <SelectItem value="General Intern">General Intern</SelectItem>
                                            <SelectItem value="Other">Other Position</SelectItem>
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
                                            Degree
                                        </Label>
                                        <Input
                                            id="degree"
                                            name="degree"
                                            value={formData.degree}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Bachelor's, Master's"
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
                                                <SelectValue placeholder="Select year" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1st Year">1st Year</SelectItem>
                                                <SelectItem value="2nd Year">2nd Year</SelectItem>
                                                <SelectItem value="3rd Year">3rd Year</SelectItem>
                                                <SelectItem value="4th Year">4th Year</SelectItem>
                                                <SelectItem value="Graduate">Graduate</SelectItem>
                                                <SelectItem value="Postgraduate">Postgraduate</SelectItem>
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
                                            placeholder="List relevant courses you've completed..."
                                            className="mt-2"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Skills & Experience */}
                            <div className="border-t border-slate-200 pt-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Skills & Experience</h2>

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
                                            placeholder="e.g., Programming languages, tools, software..."
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
                                            placeholder="e.g., Communication, teamwork, languages spoken..."
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
                                        <Label htmlFor="internshipExperience" className="text-slate-700 font-medium">
                                            Previous Internship/Work Experience (Optional)
                                        </Label>
                                        <Textarea
                                            id="internshipExperience"
                                            name="internshipExperience"
                                            value={formData.internshipExperience}
                                            onChange={handleInputChange}
                                            placeholder="Describe any previous internships or work experience..."
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
                                            placeholder="Clubs, volunteer work, leadership roles..."
                                            className="mt-2"
                                            rows={3}
                                        />
                                    </div>

                                    {isInternship && (
                                        <div>
                                            <Label htmlFor="availability" className="text-slate-700 font-medium">
                                                Availability
                                            </Label>
                                            <Select
                                                value={formData.availability}
                                                onValueChange={(value) => handleSelectChange("availability", value)}
                                            >
                                                <SelectTrigger className="mt-2">
                                                    <SelectValue placeholder="When can you start?" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Immediately">Immediately</SelectItem>
                                                    <SelectItem value="Within 2 weeks">Within 2 weeks</SelectItem>
                                                    <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                                                    <SelectItem value="After semester ends">After semester ends</SelectItem>
                                                    <SelectItem value="Summer break">Summer break only</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                </div>
                            </div>



                            {/* Additional Information */}
                            <div className="border-t border-slate-200 pt-10">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Information</h2>

                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="whyJoin" className="text-slate-700 font-medium">
                                            Why do you want to join Enhance Tech?
                                        </Label>
                                        <Textarea
                                            id="whyJoin"
                                            name="whyJoin"
                                            value={formData.whyJoin}
                                            onChange={handleInputChange}
                                            placeholder="Tell us what attracts you to this opportunity..."
                                            className="mt-2 min-h-[120px]"
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
                                                <SelectItem value="Job Board">Job Board</SelectItem>
                                                <SelectItem value="Company Website">Company Website</SelectItem>
                                                <SelectItem value="University/College">University/College</SelectItem>
                                                <SelectItem value="Referral">Referral</SelectItem>
                                                <SelectItem value="Social Media">Social Media</SelectItem>
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
                                        <p className="font-semibold text-slate-900 mb-1">Ready to submit?</p>
                                        <p className="text-sm text-slate-600">
                                            Make sure all required fields are filled before submitting
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
