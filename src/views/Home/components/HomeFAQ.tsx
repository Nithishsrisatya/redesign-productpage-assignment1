import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button
            onClick={onClick}
            className="w-full py-4 px-4 flex items-center justify-between text-left transition-colors hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-expanded={isOpen}
        >
            <h3 className="text-lg font-medium text-gray-900">{question}</h3>
            <div
                className={`flex-shrink-0 ml-2 transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                }`}
            >
                <BiChevronDown className="w-6 h-6 text-indigo-600" />
            </div>
        </button>

        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <div className="px-4 pb-4 text-gray-600">{answer}</div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        {
            que: 'What is gogetwell.ai?',
            ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
        },
        {
            que: 'What is the AI Front Office for Healthcare Agents?',
            ans: 'The AI Front Office is a powerful platform that helps manage healthcare services more efficiently. It handles patient leads, books appointments, and builds a professional website—all using AI.',
        },
        {
            que: 'How does the AI Agent assist me in my healthcare business?',
            ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It automates everyday tasks, saving time and boosting productivity.',
        },
        {
            que: 'Can I customize the website for my healthcare services?',
            ans: 'Yes, you can fully customize the website to showcase your services. Choose the design, features, and content that best represent your brand, making it easy to attract and engage with patients.',
        },
        {
            que: 'How does this platform support independent healthcare facilitators?',
            ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate front-office tasks, manage patient leads, and process payments, making it ideal for gig economy professionals.',
        },
        {
            que: 'Is the platform secure and compliant with healthcare regulations?',
            ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, ensuring that your patients' data is always protected.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Find answers to the most common questions about our platform.
                    </p>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-4" />
                </div>

                {/* FAQ Items */}
                <div className="space-y-4 bg-white rounded-2xl shadow-lg p-6">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
