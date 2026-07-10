import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What is the primary revenue model for the platform?",
    answer: "We operate on a B2B SaaS (Software-as-a-Service) model targeting hospitals, clinical networks, and enterprise healthcare providers. Revenue is driven by tiered subscriptions based on the volume of active providers and optional premium modules like AI clinical synthesis.",
  },
  {
    question: "How does the software differentiate itself from existing telemedicine solutions?",
    answer: "Our core differentiator is the integration of AI-assisted care workflows directly into the consultation experience. Unlike generic video tools, we offer a specialized clinical environment that reduces physician burnout through automated documentation and intelligent patient queue management.",
  },
  {
    question: "Is the underlying architecture built for rapid, global scaling?",
    answer: "Yes. The platform utilizes a cloud-native, microservices architecture designed for high availability (99.9% uptime). It supports multi-tenant enterprise deployments, allowing us to rapidly onboard new health systems without architectural bottlenecks.",
  },
  {
    question: "How does the platform handle regulatory compliance across different regions?",
    answer: "Security and compliance are foundational. The software features a zero-trust, compliance-first architecture that natively supports HIPAA (US), GDPR (Europe), and localized data sovereignty requirements through customizable data residency controls.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#CADCF2] py-16 lg:py-24">
      <div className="w-[97%] max-w-[1480px] mx-auto">
        <div
          className="bg-white px-8 lg:px-12 pt-14 pb-16 border border-[#DCE6F5] shadow-[0_4px_32px_rgba(14,42,92,0.07)]"
          style={{ borderRadius: "40px" }}
        >
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-3">
              Support & Inquiries
            </p>
            <h2 className="text-[32px] lg:text-[36px] font-bold text-text-dark">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className={`border border-[#DCE6F5] rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-[#F8FAFD] shadow-sm"
                      : "bg-white hover:border-[#2F6FE0]"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-[16px] font-bold text-[#0B1B33]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#2F6FE0] transition-transform duration-300 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[14.5px] text-[#5B6B82] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
