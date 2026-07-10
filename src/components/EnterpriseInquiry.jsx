import { useState } from "react";
import { Globe, Mail, ChevronDown, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID = "service_rc39ekm";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_a97mwfu";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "s9x0TucToH6GJgLjS";   // e.g. "aBcDeFgHiJkLmNoP"
// ─────────────────────────────────────────────────────────────────────────────

/* ── Shared label style ── */
function FieldLabel({ children }) {
  return (
    <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#5B6B82] mb-2">
      {children}
    </p>
  );
}

/* ── Input base classes ── */
const inputCls =
  "w-full h-[52px] px-0 bg-transparent border-0 border-b border-[#E2E8F0] text-[15px] text-[#0B1B33] placeholder-[#B0BEC8] focus:outline-none focus:border-[#2F6FE0] transition-colors duration-200";

/* ── Contact info row ── */
function ContactRow({ icon: Icon, title, value, href }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#0E2A5C] flex items-center justify-center shrink-0 mt-0.5">
        <Icon size={15} className="text-white" strokeWidth={1.8} />
      </div>
      <div>
        <p className="text-[15px] font-bold text-[#0B1B33] leading-tight">{title}</p>
        {href ? (
          <a href={href} className="text-[14px] text-[#5B6B82] hover:text-[#2F6FE0] transition-colors mt-0.5 block">
            {value}
          </a>
        ) : (
          <p className="text-[14px] text-[#5B6B82] mt-0.5">{value}</p>
        )}
      </div>
    </div>
  );
}

export default function EnterpriseInquiry() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    org: "",
    category: "Investor",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.fullName,
          client_email: form.email,
          reply_to:     form.email,
          org:          form.org,
          category:     form.category,
          message:      form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Show the real error text so we can diagnose it
      const detail = err?.text || err?.message || JSON.stringify(err);
      setError(`Failed to send: ${detail}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="enterprise" className="bg-[#CADCF2] pt-6 lg:pt-8 pb-16 lg:pb-24">
      <div className="w-[90%] max-w-[1480px] mx-auto">

        {/* ── Outer container card ── */}
        <div
          className="bg-[#F7F9FC] border border-white/60 shadow-[0_8px_48px_rgba(14,42,92,0.10)] px-5 py-8 md:px-10 lg:px-16 md:py-14 lg:py-20 rounded-[24px] md:rounded-[40px]"
        >
          <div className="grid lg:grid-cols-[42%_58%] gap-8 lg:gap-12 items-center">

            {/* ── LEFT: Heading + info ── */}
            <div className="space-y-8">

              {/* Heading */}
              <div className="space-y-5">
                <h2 className="text-[38px] lg:text-[44px] font-bold text-[#0B1B33] leading-[1.1]">
                  Enterprise Inquiry
                </h2>
                <p className="text-[15px] text-[#5B6B82] leading-[1.75] max-w-sm">
                  Start a conversation with our implementation specialists or
                  discuss strategic investment opportunities in the next
                  generation of healthcare infrastructure.
                </p>
              </div>

              {/* Contact blocks */}
              <div className="space-y-6">
                <ContactRow
                  icon={Globe}
                  title="Global HQ"
                  value="Main Digital Campus, Cloud Region 01"
                />
                <ContactRow
                  icon={Mail}
                  title="Contact Support"
                  value="partnership@qarevo.health"
                  href="mailto:partnership@qarevo.health"
                />
              </div>
            </div>

            {/* ── RIGHT: Floating form card with surrounding whitespace ── */}
            <div className="flex items-center justify-center lg:justify-end md:pl-2 lg:pl-6 md:pr-1 lg:pr-2">
              <div
                className="bg-white shadow-[0_8px_40px_rgba(14,42,92,0.10)] px-6 py-8 md:px-8 lg:px-10 md:py-10 lg:py-12 w-full max-w-[520px] rounded-[24px] md:rounded-[32px]"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#EAF3FC] flex items-center justify-center">
                      <Mail size={28} className="text-[#2F6FE0]" />
                    </div>
                    <h3 className="text-[22px] font-bold text-[#0B1B33]">Thank you!</h3>
                    <p className="text-[15px] text-[#5B6B82] max-w-xs leading-relaxed">
                      Your inquiry has been received. Our team will reach out within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">

                    {/* Row 1: Full Name + Organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <FieldLabel>Full Name</FieldLabel>
                        <input
                          id="form-full-name"
                          type="text"
                          className={inputCls}
                          placeholder="Enter name"
                          value={form.fullName}
                          onChange={update("fullName")}
                          required
                        />
                      </div>
                      <div>
                        <FieldLabel>Organization</FieldLabel>
                        <input
                          id="form-org"
                          type="text"
                          className={inputCls}
                          placeholder="e.g. Health Systems Inc."
                          value={form.org}
                          onChange={update("org")}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address */}
                    <div>
                      <FieldLabel>Email Address</FieldLabel>
                      <input
                        id="form-email"
                        type="email"
                        className={inputCls}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={update("email")}
                        required
                      />
                    </div>

                    {/* Row 2: Stakeholder Category */}
                    <div>
                      <FieldLabel>Stakeholder Category</FieldLabel>
                      <div className="relative">
                        <select
                          id="form-category"
                          className="w-full h-[52px] px-0 bg-transparent border-0 border-b border-[#E2E8F0] text-[15px] text-[#0B1B33] appearance-none focus:outline-none focus:border-[#2F6FE0] transition-colors duration-200 cursor-pointer pr-6"
                          value={form.category}
                          onChange={update("category")}
                        >
                          {[
                            "Investor",
                            "Health System",
                            "Payer / Insurance",
                            "Government / Public Health",
                            "Technology Partner",
                            "Research Institution",
                            "Other",
                          ].map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={15}
                          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#5B6B82] pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <FieldLabel>Message</FieldLabel>
                      <textarea
                        id="form-message"
                        rows={4}
                        className="w-full px-0 bg-transparent border-0 border-b border-[#E2E8F0] text-[15px] text-[#0B1B33] placeholder-[#B0BEC8] focus:outline-none focus:border-[#2F6FE0] transition-colors duration-200 resize-none pt-3 pb-2"
                        placeholder="How can we assist you?"
                        value={form.message}
                        onChange={update("message")}
                      />
                    </div>

                    {/* Row 4: Error message */}
                    {error && (
                      <p className="text-red-500 text-[13px] text-center -mt-2">{error}</p>
                    )}

                    {/* Row 5: Submit */}
                    <button
                      id="form-submit"
                      type="submit"
                      disabled={sending}
                      className="w-full bg-[#0E2A5C] text-white text-[15px] font-bold tracking-wide transition-all duration-200 hover:bg-[#1a3d7a] hover:shadow-[0_8px_32px_rgba(14,42,92,0.35)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ height: "64px", borderRadius: "18px" }}
                    >
                      {sending ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>

                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
