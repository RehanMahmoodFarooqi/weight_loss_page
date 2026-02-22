import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: "How does TeleHealthYou help with weight loss?",
        answer: "TeleHealthYou offers a medically supervised weight-management program delivered entirely online. Care plans may include lifestyle guidance and prescription medication when a licensed provider determines it’s appropriate."
    },
    {
        question: "Can weight loss be managed fully through telehealth?",
        answer: "Yes. All consultations, follow-ups, and care coordination are handled virtually, allowing patients to receive professional support without in-person visits."
    },
    {
        question: "What kind of results can I expect?",
        answer: "Weight-loss outcomes vary by individual, but many people experience gradual and sustainable progress over time when treatment is combined with healthy habits."
    },
    {
        question: "How quickly will I start seeing changes?",
        answer: "Some individuals notice early changes within weeks, while others see steady progress over several months. Providers tailor expectations based on personal health factors."
    },
    {
        question: "Are weight-loss medications part of the program?",
        answer: "Medication may be prescribed when clinically appropriate. Providers evaluate medical history, goals, and safety before recommending any treatment."
    },
    {
        question: "What side effects should I be aware of?",
        answer: "Side effects depend on the specific medication and individual response. Common effects may include mild digestive discomfort, fatigue, or headaches, especially early in treatment."
    },
    {
        question: "Does insurance cover treatment or medication?",
        answer: "Insurance coverage varies by plan. In some cases, assistance may be provided for prior authorization or documentation, but coverage is not guaranteed."
    },
    {
        question: "How much does TeleHealthYou cost?",
        answer: "An initial consultation fee typically applies. Medication, labs, and ongoing care may be billed separately depending on the treatment plan."
    },
    {
        question: "How are appointments conducted?",
        answer: "Appointments are held through secure video visits, with scheduling details shared digitally. Messaging support may also be available between visits."
    },
    {
        question: "Can I cancel or stop treatment at any time?",
        answer: "Yes. Patients may discontinue treatment, though billing or subscription policies may apply depending on timing."
    },
    {
        question: "How personalized is the care plan?",
        answer: "Each treatment plan is customized based on health history, goals, and how the patient responds to care over time."
    },
    {
        question: "Is ongoing support available?",
        answer: "Yes. Patients have continued access to medical providers and support teams throughout their weight-loss journey."
    }
];

export function FAQsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="bg-white pt-10 pb-20 px-4 md:px-8 min-h-[60vh]">
            <div className="w-[90%] mx-auto">
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#28436F] hover:text-[#1e3252] font-bold transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Back to Weight Loss
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#28436F] font-lora mb-6">
                        FAQs
                    </h1>
                    {/* <p className="text-xl text-[#28436F] opacity-80 max-w-2xl">
                        Everything you need to know about our medical weight loss program, medications, and support.
                    </p> */}
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
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
