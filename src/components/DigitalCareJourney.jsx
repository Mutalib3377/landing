import { Check } from "lucide-react";

/* ── Product Screenshot: Intake Dashboard ── */
function IntakeFormMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_16px_48px_rgba(14,42,92,0.12)]">
      <img
        src="/Gemini_Generated_Image_ovuowpovuowpovuo.jpeg"
        alt="Qarevo Health — Patient Intake Dashboard"
        className="w-full h-auto block"
        draggable={false}
      />
    </div>
  );
}

/* ── Product Image: Secure Consultation ── */
function VideoCallMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_16px_48px_rgba(14,42,92,0.12)]">
      <img
        src="/Gemini_Generated_Image_iuheg3iuheg3iuhe.png"
        alt="Qarevo Health — Secure Consultation"
        className="w-full h-auto block"
        draggable={false}
      />
    </div>
  );
}

/* ── Product Image: AI Documentation Support ── */
function AIDashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border-light shadow-[0_16px_48px_rgba(14,42,92,0.12)]">
      <img
        src="/Gemini_Generated_Image_gqcghdgqcghdgqcg (1).jpeg"
        alt="Qarevo Health — AI Documentation Support"
        className="w-full h-auto block"
        draggable={false}
      />
    </div>
  );
}

/* ── Checklist bullet ── */
function Bullet({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-[14px] text-text-muted">
      <span className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
        <Check size={11} className="text-accent" strokeWidth={2.5} />
      </span>
      {children}
    </li>
  );
}

const PHASES = [
  {
    id: "phase-01",
    phase: "PHASE 01",
    title: "Structured Intake",
    body: "Transforming the first patient touchpoint into structured, actionable data through adaptive intake forms that intelligently route questions based on specialty, history, and chief complaint.",
    bullets: [
      "Adaptive logic for specialty-specific histories",
      "Automated validation of medical identifiers",
    ],
    mockup: <IntakeFormMockup />,
    textLeft: true,
  },
  {
    id: "phase-02",
    phase: "PHASE 02",
    title: "Secure Consultation",
    body: "End-to-end encrypted video and audio sessions engineered specifically for clinical environments — with medical-grade image fidelity, low-latency streaming, and zero data persistence by default.",
    bullets: [
      "DICOM-native imaging integration",
      "Multi-stakeholder secure session support",
    ],
    mockup: <VideoCallMockup />,
    textLeft: false,
  },
  {
    id: "phase-03",
    phase: "PHASE 03",
    title: "AI Documentation Support",
    body: "Sovereign AI ambient listening drafts clinical notes, extracts structured diagnoses, and generates ICD-10 and CPT codes in real time — reducing documentation burden by up to 70%.",
    bullets: [
      "Sovereign processing (No data leaves your region)",
      "Automated coding and billing integration",
    ],
    mockup: <AIDashboardMockup />,
    textLeft: true,
  },
];

export default function DigitalCareJourney() {
  return (
    <section id="vision" className="bg-[#CADCF2] pt-6 lg:pt-8 pb-6 lg:pb-8">
      <div className="w-[97%] max-w-[1480px] mx-auto">

        {/* ── Outer white rounded card — 40px radius per Figma ── */}
        <div
          className="bg-white px-8 lg:px-16 pt-14 pb-16 border border-[#DCE6F5] shadow-[0_4px_32px_rgba(14,42,92,0.07)]"
          style={{ borderRadius: "40px" }}
        >

          {/* ── Centered heading ── */}
          <div className="text-center mb-20">
            <h2 className="text-[32px] lg:text-[36px] font-bold text-text-dark inline">
              Optimizing the{" "}
              <span className="relative inline-block">
                Digital Care
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent rounded-full" />
              </span>
              {" "}Journey
            </h2>
          </div>

          {/* ── Alternating rows ── */}
          <div className="space-y-24">
            {PHASES.map(({ id, phase, title, body, bullets, mockup, textLeft }) => (
              <div
                key={id}
                id={id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${textLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
              >
                {/* Text column */}
                <div className="space-y-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                    {phase}
                  </p>
                  <h3 className="text-[22px] lg:text-[24px] font-bold text-text-dark">
                    {title}
                  </h3>
                  <p className="text-text-muted text-[15px] leading-[1.75]">
                    {body}
                  </p>
                  <ul className="space-y-3 mt-2">
                    {bullets.map((b) => (
                      <Bullet key={b}>{b}</Bullet>
                    ))}
                  </ul>
                </div>

                {/* Mockup column */}
                <div className="w-full">{mockup}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
