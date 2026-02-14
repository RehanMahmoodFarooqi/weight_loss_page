import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
    const faqs = [
        {
            question: "So how much does GLP-1 actually cost?",
            answer: "GLP-1 pricing can vary depending on the provider and dosage. Telehealth You offers a transparent $200 flat monthly fee, regardless of dose, so you always know what you’re paying."
        },
        {
            question: "But how do you know what you're getting? Is high quality.",
            answer: "Choosing a reputable provider is essential. Telehealth You is a trusted company with strong reviews, high medical standards, and licensed providers focused on safe, effective GLP-1 care."
        },
        {
            question: "So do I need to have a doctor to get on GLP-1?",
            answer: "Yes. You’ll meet with a licensed Telehealth You doctor through our secure telehealth platform to determine if GLP-1 treatment is appropriate for your health and goals."
        },
        {
            question: "Are there a ton of side effects?",
            answer: "Some side effects are possible with GLP-1 medications. Telehealth You doctors explain what to expect, how to manage symptoms, and monitor your progress throughout treatment."
        },
        {
            question: "Okay, I'm in, how can I get started?",
            answer: "Getting started is simple. Tap below to connect with the Telehealth You team and begin your online consultation and personalized treatment plan."
        },
        {
            question: "Is the program safe?",
            answer: "Yes. Safety is our top priority. All medications are prescribed by licensed providers, with ongoing monitoring to manage side effects and adjust dosing. Your plan is tailored to your health profile to ensure safe, effective weight loss."
        },
        {
            question: "Do I need to visit a clinic?",
            answer: "No. Our program is 100% online. You can meet with your provider, receive prescriptions, and follow up securely from home, making the process convenient and private."
        },
        {
            question: "How often will I follow up with my provider?",
            answer: "Follow-ups depend on your treatment plan and progress. Typically, patients have regular check-ins and secure messaging access to discuss results, side effects, or plan adjustments."
        },
        {
            question: "What is TeleHealth.com’s weight-loss program?",
            answer: "Our program is a fully online, medically guided weight-loss service. Licensed providers create a personalized plan for each patient, which may include prescription medications, lifestyle guidance, and ongoing support to help you achieve safe, sustainable weight loss."
        }
    ];

    return (
        <section className="bg-white pt-20 pb-20 px-4 md:px-8">
            <div className="w-[90%] mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-[#28436F] mb-16 font-lora">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-12 pb-8">
                    <button
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-[#28436F] hover:bg-[#1e3252] shadow-[0_8px_25px_rgba(40,67,111,0.2)] hover:shadow-[0_12px_35px_rgba(40,67,111,0.3)] transform hover:-translate-y-1 active:scale-95 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative flex items-center gap-2 text-xl tracking-wide">
                            More FAQs
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border border-[#28436F]/20 relative overflow-hidden transition-all duration-300"
            style={{
                backgroundColor: '#DEECF7DE'
            }}
        >
            <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 relative z-10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl md:text-2xl font-bold text-[#28436F]">
                    {faq.question}
                </span>
                <ChevronDown
                    className={`w-6 h-6 text-[#28436F] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 relative z-10">
                        <p className="text-[#28436F] leading-relaxed text-lg md:text-xl text-justify">
                            {faq.answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
