import { useState, useRef, useEffect } from "react";
import {
  Shield,
  Cpu,
  Cloud,
  Database,
  CheckCircle,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/*
 * ── CARD IMAGE SOURCES ─────────────────────────────────────────────────────
 * Replace any image URL with your own.
 * To use a LOCAL file: drop it in /public/ and set image: "/your-file.jpg"
 * ──────────────────────────────────────────────────────────────────────────
 */
const CARDS = [
  {
    id: "data-exchange",
    icon: Shield,
    title: "Data Exchange",
    desc: "Interoperable HL7 FHIR standards that enable secure, real-time healthcare data exchange across providers, systems, and institutions.",
    tags: "HL7 FHIR · INTEROPERABILITY · DATA EXCHANGE",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
  {
    id: "diagnostic-support",
    icon: Cpu,
    title: "Diagnostic Support",
    desc: "Advanced AI-powered clinical analytics that assist healthcare professionals in making faster, more accurate diagnostic decisions.",
    tags: "AI ANALYTICS · CLINICAL DECISION SUPPORT · INSIGHTS",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    id: "privacy",
    icon: Cloud,
    title: "Privacy-by-Design",
    desc: "Ensuring patient data is protected through rigorous security architecture, zero-trust principles, and end-to-end encryption.",
    tags: "NETWORK SECURITY · CYBERSECURITY · DATA PROTECTION",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
  },
  {
    id: "automation",
    icon: Database,
    title: "Responsible Automation",
    desc: "Augmenting clinical workflows with AI while maintaining human oversight, transparency, and ethical decision-making.",
    tags: "AI GOVERNANCE · CLINICAL AI · AUTOMATION",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: "cloud",
    icon: CheckCircle,
    title: "Secure Cloud",
    desc: "Highly available, geo-redundant cloud infrastructure engineered to deliver maximum reliability, resilience, and healthcare uptime.",
    tags: "CLOUD INFRASTRUCTURE · HIGH AVAILABILITY · REDUNDANCY",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    id: "governance",
    icon: Lock,
    title: "Clinical Governance",
    desc: "Governance frameworks that ensure compliance, accountability, transparent audit trails, and continuous quality improvement.",
    tags: "COMPLIANCE · AUDIT TRAILS · CLINICAL QUALITY",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
];

/* ── Single card ── */
function Card({ icon: Icon, title, desc, tags, image }) {
  return (
    <div className="group flex-shrink-0 relative rounded-[20px] overflow-hidden cursor-pointer h-[380px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,42,92,0.22)]">

      {/* ── Background image — blurred/desaturated by default, vivid on hover ── */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500
                   [filter:saturate(0.15)_brightness(0.75)]
                   group-hover:[filter:saturate(1)_brightness(1)]"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* ── Blue color overlay — fades on hover ── */}
      <div className="absolute inset-0 bg-[#0E2A5C]/50 transition-all duration-500 group-hover:bg-[#0E2A5C]/10" />

      {/* ── Bottom gradient — ensures text always readable ── */}
      <div className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(5,15,35,0.85) 0%, rgba(5,15,35,0.35) 50%, transparent 100%)"
        }}
      />

      {/* ── Card content ── */}
      <div className="relative h-full flex flex-col p-6">
        {/* Icon badge */}
        <div className="mt-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Icon size={18} className="text-white" strokeWidth={1.5} />
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Text block */}
        <div>
          <h3 className="text-[17px] font-semibold text-[#7ab8ff] group-hover:text-white transition-colors duration-300 mb-2">
            {title}
          </h3>
          <p className="text-white/75 text-[13.5px] leading-[1.6] mb-4">
            {desc}
          </p>
          {/* Tags */}
          <p className="text-white/35 text-[10px] font-medium tracking-[0.06em] group-hover:text-white/55 transition-colors duration-300">
            {tags}
          </p>
        </div>
      </div>
    </div>
  );
}

const GAP = 20; // px — matches the gap between cards

export default function OperationalStandards() {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const firstCardRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Determine visible cards based on screen width
      let newVisible = 3;
      if (window.innerWidth < 768) {
        newVisible = 1;
      } else if (window.innerWidth < 1024) {
        newVisible = 2;
      }
      setVisibleCount(newVisible);

      // Measure card width
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.offsetWidth);
      }
    };

    handleResize();
    // Re-measure after a tiny delay in case CSS needs a frame to settle
    setTimeout(handleResize, 50);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, CARDS.length - visibleCount);

  // Prevent current index from going out of bounds when resizing
  useEffect(() => {
    if (current > maxSlide) {
      setCurrent(maxSlide);
    }
  }, [maxSlide, current]);

  const goTo = (idx) => {
    const newIdx = Math.max(0, Math.min(idx, maxSlide));
    setCurrent(newIdx);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: newIdx * (cardWidth + GAP),
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || cardWidth === 0) return;
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const newCurrent = Math.round(scrollLeft / (cardWidth + GAP));
    if (newCurrent !== current && newCurrent >= 0 && newCurrent <= maxSlide) {
      setCurrent(newCurrent);
    }
  };

  return (
    <section id="about" className="bg-[#CADCF2] pt-16 lg:pt-24 pb-6 lg:pb-8">
      <div className="w-[97%] max-w-[1480px] mx-auto">

        {/* ── Outer white rounded card ── */}
        <div className="bg-white rounded-[24px] lg:rounded-[32px] px-6 md:px-8 lg:px-12 pt-8 lg:pt-10 pb-10 lg:pb-12 shadow-sm overflow-hidden">

          {/* ── Header row ── */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 lg:mb-10 gap-5 md:gap-0">
            <div>
              <h2 className="text-[28px] lg:text-[32px] font-bold text-[#0B1B33]">
                Operational Standards
              </h2>
              <p className="text-[#5B6B82] text-[15px] mt-2">
                Built for compliance, performance, and security at scale.
              </p>
            </div>

            {/* Arrow controls */}
            <div className="flex items-center gap-2 shrink-0 mt-1">
              <button
                id="opstandards-prev"
                onClick={() => goTo(current - 1)}
                disabled={current === 0}
                className="w-9 h-9 rounded-full border border-[#DCE6F5] flex items-center justify-center
                           text-[#5B6B82] hover:bg-[#EAF3FC] hover:text-[#0E2A5C] hover:border-[#2F6FE0]
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                id="opstandards-next"
                onClick={() => goTo(current + 1)}
                disabled={current === maxSlide}
                className="w-9 h-9 rounded-full border border-[#DCE6F5] flex items-center justify-center
                           text-[#5B6B82] hover:bg-[#EAF3FC] hover:text-[#0E2A5C] hover:border-[#2F6FE0]
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* ── Slider track ── */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-1 px-1 py-4 -my-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ gap: `${GAP}px` }}
          >
            {CARDS.map((card, i) => (
              <div
                key={card.id}
                ref={i === 0 ? firstCardRef : null}
                style={{
                  flex: `0 0 calc((100% - ${GAP * (visibleCount - 1)}px) / ${visibleCount})`,
                }}
                className="snap-start"
              >
                <Card {...card} />
              </div>
            ))}
          </div>

          {/* ── Dot indicators ── */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current
                  ? "w-6 bg-[#2F6FE0]"
                  : "w-1.5 bg-[#DCE6F5] hover:bg-[#5B6B82]"
                  }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
