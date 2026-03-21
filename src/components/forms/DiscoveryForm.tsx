"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Building2, User, Mail, Phone, ChevronRight, Sparkles, TrendingUp, AlertCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const steps = [
    {
        title: "Your Identity",
        icon: User,
        description: "Connect your profile."
    },
    {
        title: "Business Audit",
        icon: Building2,
        description: "Identify your target assets."
    },
    {
        title: "Revenue Gaps",
        icon: TrendingUp,
        description: "Calculate your leakages."
    }
];

import { sendAuditEmail } from "@/app/contact/actions";

export function DiscoveryForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const [formData, setFormData] = useState({
        businessName: "",
        websiteUrl: "",
        industry: "",
        challenges: [] as string[],
        fullName: "",
        email: "",
        phone: "",
        specificNotes: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (issue: string) => {
        setFormData(prev => ({
            ...prev,
            challenges: prev.challenges.includes(issue) 
                ? prev.challenges.filter(i => i !== issue)
                : [...prev.challenges, issue]
        }));
    };

    const nextStep = async () => {
        // If finishing Step 1 (Contact Info), push to GHL immediately
        if (currentStep === 0) {
            if (!formData.email || !formData.fullName) return;
            // Fire and forget GHL push
            try {
                sendAuditEmail({ ...formData, _partial: true });
            } catch (e) {}
        }
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // If they press Enter on a Step that isn't the last one, move to Next Step
        if (currentStep < steps.length - 1) {
            nextStep();
            return;
        }

        setIsSubmitting(true);
        
        try {
            const result = await sendAuditEmail(formData);
            if (result.success) {
                setIsSubmitted(true);
            } else {
                alert(result.error || "Something went wrong.");
            }
        } catch (error) {
            alert("Failed to send request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border rounded-3xl p-12 text-center space-y-6 shadow-2xl"
            >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Audit Request Received!</h2>
                <p className="text-muted-foreground text-lg">
                    We&apos;re analyzing your visibility now. You&apos;ll receive your custom Loom video audit within 24-48 hours.
                </p>
                <Button onClick={() => { setIsSubmitted(false); setCurrentStep(0); }} variant="outline" className="rounded-full">
                    Close
                </Button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="flex justify-between mb-8 relative px-2">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />
                {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            i <= currentStep ? "bg-primary border-primary text-primary-foreground" : "bg-background border-muted text-muted-foreground"
                        }`}>
                            <step.icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] mt-2 font-bold uppercase tracking-wider text-muted-foreground hidden sm:block">
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            <Card className="bg-card border shadow-2xl rounded-3xl overflow-hidden">
                <form onSubmit={handleSubmit}>
                    <div className="p-8 md:p-10 space-y-8">
                        <AnimatePresence mode="wait">
                            {currentStep === 0 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold italic underline decoration-primary/30">Phase 1: Identity & Delivery</h3>
                                        <p className="text-muted-foreground">Where should we deliver your custom Revenue Growth Audit?</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Input 
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Full Name" 
                                                className="h-12 rounded-xl" 
                                                required 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Work Email" 
                                                className="h-12 rounded-xl" 
                                                required 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input 
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="WhatsApp Number" 
                                                className="h-12 rounded-xl" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 1 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold italic">Phase 2: Revenue Asset Analysis</h3>
                                        <p className="text-muted-foreground">We need your digital footprint to calculate your total addressable revenue in Kuwait.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Input 
                                                name="businessName"
                                                value={formData.businessName}
                                                onChange={handleInputChange}
                                                placeholder="Business Name" 
                                                className="h-12 rounded-xl" 
                                                required 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Input 
                                                name="websiteUrl"
                                                value={formData.websiteUrl}
                                                onChange={handleInputChange}
                                                placeholder="Website URL (e.g. clinic-kuwait.com)" 
                                                className="h-12 rounded-xl" 
                                                required 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <select 
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleInputChange}
                                                className="w-full h-12 rounded-xl border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                                required
                                            >
                                                <option value="">Select Industry</option>
                                                <option value="medical">Medical/Clinic</option>
                                                <option value="beauty">Beauty/Salon</option>
                                                <option value="education">Education</option>
                                                <option value="realestate">Real Estate</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold italic text-primary">Phase 3: Leakage Identification</h3>
                                        <p className="text-muted-foreground">Where is your business losing the most revenue right now?</p>
                                    </div>
                                    <div className="grid gap-3 mb-4">
                                        {[
                                            "Slow response to WhatsApp/Web leads",
                                            "Low Google rating/No reviews",
                                            "Staff too busy to answer calls",
                                            "No-shows for appointments",
                                            "Old leads sitting in a database"
                                        ].map((issue, i) => (
                                            <label key={i} className="flex items-center gap-3 p-4 border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    className="w-5 h-5 accent-primary" 
                                                    checked={formData.challenges.includes(issue)}
                                                    onChange={() => handleCheckboxChange(issue)}
                                                />
                                                <span className="text-sm font-medium">{issue}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <Textarea 
                                        name="specificNotes"
                                        value={formData.specificNotes}
                                        onChange={handleInputChange}
                                        placeholder="Any specific challenges or goals we should know about?" 
                                        className="min-h-[100px] rounded-xl" 
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="p-8 bg-muted/30 border-t flex justify-between items-center">
                        <Button 
                            type="button" 
                            variant="ghost" 
                            onClick={prevStep}
                            disabled={currentStep === 0 || isSubmitting}
                            className="rounded-full"
                        >
                            Back
                        </Button>
                        <div className="flex gap-3">
                            {currentStep < steps.length - 1 ? (
                                <Button type="button" onClick={nextStep} className="rounded-full px-8">
                                    Next Step
                                    <ChevronRight className="ml-2 w-4 h-4" />
                                </Button>
                            ) : (
                                <Button 
                                    type="submit" 
                                    className="rounded-full px-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Verifying Application..." : "Submit My Revenue Application"}
                                    {!isSubmitting && <Sparkles className="ml-2 w-4 h-4" />}
                                </Button>
                            )}
                        </div>
                    </div>
                </form>
            </Card>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 justify-center">
                    <AlertCircle className="w-3 h-3" />
                    <span>No obligation.</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>100% Privacy.</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                    <Globe className="w-3 h-3 text-primary" />
                    <span>Kuwait Based.</span>
                </div>
                <div className="flex items-center gap-1 justify-center">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Free Video Audit.</span>
                </div>
            </div>
        </div>
    );
}

function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`bg-card rounded-xl border shadow-sm ${className}`}>{children}</div>;
}
