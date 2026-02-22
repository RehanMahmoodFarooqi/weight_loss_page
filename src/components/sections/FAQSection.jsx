import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FAQSection() {
    const faqs = [
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
        },
        {
            question: "What is the difference between GLP-1s and Microdose GLP-1?",
            answer: "Microdose GLP-1 uses a much lower dose than standard treatments. This gentler approach may be associated with supporting cognitive function, inflammation response, energy levels, as well as healthy aging. Lower doses may also help reduce the likelihood and intensity of side effects."
        },
        {
            question: "What is the best method for weight management?",
            answer: "The most effective approach to weight management focuses on long-term, sustainable lifestyle changes. While medications can support weight loss, they are most effective when used alongside a balanced diet and regular physical activity. Medical weight loss programs bring these elements together under the guidance of a board-certified physician, helping ensure that the plan is realistic, safe, and maintainable over time."
        }
    ];

    return (
        <section className="bg-white pt-5 pb-20 px-4 md:px-8">
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
                    <Link
                        to="/faqs"
                        className="group relative inline-flex items-center justify-center px-8 py-3.5 font-bold text-white transition-all duration-300 bg-[#28436F] hover:bg-[#1e3252] shadow-[0_8px_25px_rgba(40,67,111,0.2)] hover:shadow-[0_12px_35px_rgba(40,67,111,0.3)] transform hover:-translate-y-1 active:scale-95 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-white/10 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        <span className="relative flex items-center gap-2 text-xl tracking-wide">
                            More FAQs
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border border-[#d0e8ec] relative overflow-hidden transition-all duration-300"
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
