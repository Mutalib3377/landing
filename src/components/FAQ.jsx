import { useState } from "react";
import { ChevronDown, Info, Calendar, Banknote, Lock, Headphones, PlusSquare } from "lucide-react";

const LEFT_CATEGORIES = [
  {
    title: "ABOUT QAREVO HEALTH",
    icon: Info,
    items: [
      { question: "What is Qarevo Health?", answer: "Qarevo Health is a digital health platform designed to connect you with top medical professionals from the comfort of your home." },
      { question: "How does the Qarevo platform work?", answer: "Simply sign up, browse our network of doctors, and book an appointment. You can consult via video, audio, or chat." },
      { question: "What medical conditions can be treated?", answer: "We cover a wide range of non-emergency conditions, including allergies, cold & flu symptoms, skin issues, and mental health consultations." },
      { question: "Is it a replacement for the ER?", answer: "No. If you are experiencing a medical emergency, please call your local emergency services immediately." },
    ]
  },
  {
    title: "APPOINTMENTS & CONSULTATIONS",
    icon: Calendar,
    items: [
      { question: "How do I book a virtual appointment?", answer: "Log into your account, select 'Book Appointment', choose your preferred doctor and time slot, and confirm." },
      { question: "What devices can I use?", answer: "Our platform is accessible via any web browser on your computer, smartphone, or tablet. We also have dedicated iOS and Android apps." },
      { question: "Can I choose my own doctor?", answer: "Yes! You can browse doctor profiles, read reviews, and select the provider that best fits your needs." },
    ]
  },
  {
    title: "FEES, INSURANCE & PAYMENTS",
    icon: Banknote,
    items: [
      { question: "How much does a consultation cost?", answer: "Prices vary depending on the specialist. You will see the full cost upfront before booking your appointment." },
      { question: "Does Qarevo accept insurance?", answer: "Yes, we accept many major insurance plans. You can verify your coverage during the signup process." },
    ]
  }
];

const RIGHT_CATEGORIES = [
  {
    title: "PRESCRIPTIONS & DIAGNOSTICS",
    icon: PlusSquare,
    items: [
      { question: "Can doctors prescribe medications online?", answer: "Yes, our licensed doctors can prescribe non-narcotic medications and send them directly to your local pharmacy." },
      { question: "What about lab tests or imaging?", answer: "If needed, our doctors can order lab tests and imaging. We partner with local diagnostic centers for your convenience." },
    ]
  },
  {
    title: "DATA SECURITY & PRIVACY",
    icon: Lock,
    items: [
      { question: "How is my medical data protected?", answer: "We use state-of-the-art encryption and bank-level security measures to ensure your personal health information is safe." },
      { question: "Is the platform fully compliant?", answer: "Absolutely. Qarevo Health is 100% HIPAA compliant and adheres to all national data privacy regulations." },
    ]
  },
  {
    title: "TECHNICAL SUPPORT",
    icon: Headphones,
    items: [
      { question: "Connection issues during a call?", answer: "If you experience lag or disconnections, try switching to a different network or restarting the app. Our support team is also available 24/7." },
      { question: "Who do I contact for tech issues?", answer: "You can reach our technical support team via the 'Help' section in the app, or by emailing support@qarevo.com." },
    ]
  }
];

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState("Can doctors prescribe medications online?");

  const toggle = (question) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const renderCategory = (category, index) => {
    const Icon = category.icon;
    return (
      <div key={index} className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Icon size={16} className="text-[#0F3D81]" />
          <h3 className="text-[#0F3D81] text-[13px] font-bold uppercase tracking-wider">
            {category.title}
          </h3>
        </div>
        <div className="space-y-3">
          {category.items.map((item, i) => {
            const isOpen = openQuestion === item.question;
            return (
              <div
                key={i}
                className={`rounded-xl transition-all duration-300 backdrop-blur-md border ${
                  isOpen
                    ? "bg-white/60 shadow-sm border-2 border-dashed border-[#2F6FE0]" 
                    : "bg-white/40 border-white/60 hover:bg-white/50"
                }`}
              >
                <button
                  onClick={() => toggle(item.question)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[15px] font-bold text-[#0B1B33]">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#0B1B33] transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[14px] text-[#5B6B82] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="bg-[#D1E0F3] py-16 lg:py-24 relative overflow-hidden">
      <div className="w-[95%] max-w-[1100px] mx-auto relative z-10">
        
        {/* Main Glass Container */}
        <div className="bg-white/30 backdrop-blur-xl border border-white/50 rounded-[40px] px-6 md:px-12 py-16 shadow-[0_8px_32px_rgba(14,42,92,0.05)]">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[38px] font-bold text-[#0B1B33]">
              Frequently <span className="relative inline-block">
                Asked
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#0F3D81] rounded-full"></span>
              </span> Questions
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Left Column */}
            <div>
              {LEFT_CATEGORIES.map((category, index) => renderCategory(category, index))}
            </div>

            {/* Right Column */}
            <div>
              {RIGHT_CATEGORIES.map((category, index) => renderCategory(category, index))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
