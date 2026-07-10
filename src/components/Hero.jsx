import { ArrowRight, Zap, Activity, Brain, Stethoscope, Clock, Users } from "lucide-react";
import { useEffect, useRef } from "react";

import heroVideo from "../assets/hero-bg.mp4";

/*
 * ── VIDEO BACKGROUND ──────────────────────────────────────────────────────
 * Imported securely via Vite asset pipeline to ensure Vercel serves it correctly.
 * ─────────────────────────────────────────────────────────────────────────
 */
const HERO_VIDEO_SRC = heroVideo;

/* Fallback poster shown before video loads */
const HERO_POSTER = "";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Mobile browsers (especially iOS Safari) can be very strict about autoplay.
    // Forcing defaultMuted and explicitly calling play() ensures it works in most conditions.
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.log("Video auto-play was prevented by the browser:", error);
      });
    }
  }, []);

  return (
    <section
      id="platform"
      className="relative overflow-hidden min-h-[92vh] flex items-center"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* ── GRADIENT OVERLAY ──
          Left side is darker (text legibility), right fades to semi-transparent
          (so the glassmorphic panel feels layered on the real video) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, rgba(11,27,51,0.88) 0%, rgba(14,42,92,0.75) 40%, rgba(14,42,92,0.45) 65%, rgba(14,42,92,0.20) 100%)",
        }}
      />

      {/* ── Soft accent glow — top right ── */}
      <div
        className="absolute -right-32 -top-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47,111,224,0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32 w-full grid lg:grid-cols-[55%_45%] gap-12 items-center">

        {/* ── LEFT: Text ── */}
        <div className="space-y-7">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 text-white text-[11px] font-bold uppercase tracking-[0.12em] px-4 py-2 rounded-full shadow-sm">
            {/* <Zap size={11} className="text-[#7ab8ff]" /> */}
            AI-Enabled Infrastructure
          </div>

          {/* H1 */}
          <h1 className="text-[46px] lg:text-[54px] font-bold leading-[1.1] text-white drop-shadow-sm">
            Redefining the Future of Scalable{" "}
            <span className="text-[#7ab8ff]">Telemedicine</span>{" "}
            &amp;{" "}
            <span className="text-[#7ab8ff]">AI&#8209;Assisted</span>{" "}
            Care
          </h1>

          {/* Subtext */}
          <p className="text-white/70 text-[16px] leading-[1.75] max-w-[520px]">
            Empowering healthcare ecosystems with sovereign AI documentation,
            clinical-grade data exchange, and high-trust digital governance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-1">
            <a
              href="#enterprise"
              id="hero-cta-primary"
              className="inline-flex items-center gap-2.5 bg-[#2F6FE0] text-white text-[14px] font-semibold px-7 py-[14px] rounded-xl hover:bg-[#4080f0] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(47,111,224,0.5)] transition-all duration-200"
            >
              Connect with Our Team
              <ArrowRight size={15} />
            </a>
            <a
              href="#about"
              id="hero-cta-secondary"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-[14px] font-semibold px-7 py-[14px] rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              View Platform Capabilities
            </a>
          </div>
        </div>

        {/* ── RIGHT: Glassmorphic panel ── */}
        <div className="relative hidden lg:flex justify-end items-center pr-4">

          {/* ── Main Dashboard Panel ── */}
          <div className="relative w-[460px] xl:w-[500px] rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.45)] overflow-hidden"
            style={{ background: "rgba(10,22,48,0.82)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex h-full">

              {/* Sidebar */}
              <div className="flex flex-col items-center gap-5 py-5 px-3 border-r"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.15)" }}
              >
                {/* Home — active */}
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#2F6FE0" }}>
                  <Activity size={15} className="text-white" />
                </div>
                {[Users, Brain, Clock, Stethoscope, Zap, Activity].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <Icon size={14} className="text-white/50" />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 space-y-3 overflow-hidden">

                {/* Title */}
                <p className="text-white text-[13px] font-semibold mb-1">Platform Dashboard</p>

                {/* Stat cards row */}
                <div className="grid grid-cols-2 gap-2.5">

                  {/* Today's Consultations */}
                  <div className="rounded-2xl p-3.5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-white/55 text-[9.5px] font-medium mb-1.5">Today's Consultations</p>
                    <div className="flex items-end gap-1.5">
                      <span className="text-white text-[22px] font-bold leading-none">348</span>
                      <span className="text-emerald-400 text-[10px] font-bold mb-0.5">↑24%</span>
                    </div>
                    <p className="text-white/35 text-[9px] mt-1">vs yesterday</p>
                  </div>

                  {/* Active Patients */}
                  <div className="rounded-2xl p-3.5" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <p className="text-white/55 text-[9.5px] font-medium mb-1.5">Active Patients</p>
                    <span className="text-white text-[22px] font-bold leading-none">1,235</span>
                    {/* Mini sparkline */}
                    <svg viewBox="0 0 80 24" className="w-full h-6 mt-1" preserveAspectRatio="none">
                      <polyline
                        points="0,20 12,14 24,18 36,10 48,13 60,6 72,9 80,4"
                        fill="none" stroke="#2F6FE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Bottom two panels */}
                <div className="grid grid-cols-2 gap-2.5">

                  {/* Recent Consultations */}
                  <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p className="text-white text-[9.5px] font-semibold mb-2.5">Recent Consultations</p>
                    <div className="space-y-2">
                      {[
                        { name: "Lena Müller", sub: "Video Consultation", time: "10:30 AM", badge: "Completed", badgeColor: "bg-emerald-500", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80" },
                        { name: "Markus Fischer", sub: "Follow-up", time: "10:15 AM", badge: "In Progress", badgeColor: "bg-[#2F6FE0]", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80" },
                        { name: "Sophie Wagner", sub: "Prescription Review", time: "09:45 AM", badge: "Scheduled", badgeColor: "bg-white/20", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&q=80" },
                      ].map(({ name, sub, time, badge, badgeColor, img }) => (
                        <div key={name} className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full overflow-hidden shrink-0">
                            <img src={img} alt={name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-[9px] font-semibold truncate">{name}</p>
                            <p className="text-white/40 text-[8px] truncate">{sub}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-white/40 text-[8px] mb-0.5">{time}</p>
                            <span className={`${badgeColor} text-white text-[7.5px] font-medium px-1.5 py-0.5 rounded-full`}>{badge}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2.5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      <span className="text-white/45 text-[8.5px]">View all consultations</span>
                      <span className="text-white/45 text-[9px]">→</span>
                    </div>
                  </div>

                  {/* Consultation Trends bar chart */}
                  <div className="rounded-2xl p-3" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p className="text-white text-[9.5px] font-semibold mb-2">Consultation Trends</p>
                    {/* Y-axis labels + bars */}
                    <div className="flex gap-1 h-[90px] items-end">
                      {/* Y labels */}
                      <div className="flex flex-col justify-between h-full text-right pr-1">
                        {["450", "300", "150", "0"].map(l => (
                          <span key={l} className="text-white/30 text-[7px]">{l}</span>
                        ))}
                      </div>
                      {/* Bars */}
                      <div className="flex-1 flex items-end gap-1 h-full">
                        {[
                          { day: "Mon", h: 42 },
                          { day: "Tue", h: 66 },
                          { day: "Wed", h: 95 },
                          { day: "Thu", h: 68 },
                          { day: "Fri", h: 40 },
                          { day: "Sat", h: 34 },
                          { day: "Sun", h: 64 },
                        ].map(({ day, h }) => (
                          <div key={day} className="flex-1 flex flex-col items-center gap-1">
                            <div className="w-full rounded-t-sm" style={{ height: `${h}%`, background: "#2F6FE0" }} />
                            <span className="text-white/35 text-[7px]">{day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Floating card — top right: LIVE CONSULTATION */}
          <div className="absolute -top-8 -right-2 bg-white rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.22)] border border-white/80 p-4 w-[230px]"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            {/* Header */}
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-[#2F6FE0]">Live Consultation</span>
            </div>

            {/* Doctor row */}
            <div className="flex items-center gap-2.5 mb-3">
              {/* Doctor avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-[#EAF3FC]">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&q=80"
                  alt="Dr. Klaus Weber"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#0B1B33] leading-tight">Dr. Klaus Weber</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Stethoscope size={9} className="text-[#2F6FE0]" />
                  <p className="text-[10px] text-[#5B6B82]">Cardiology</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#EEF4FF] mb-2.5" />

            {/* Patient row */}
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] text-[#5B6B82]">Patient</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold text-[#0B1B33]">Sophie Hoffmann</span>
                {/* Patient avatar */}
                <div className="w-5 h-5 rounded-full overflow-hidden border border-[#EAF3FC] shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&q=80"
                    alt="Sophie Hoffmann"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Queue row */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <Users size={9} className="text-[#5B6B82]" />
                <span className="text-[10px] text-[#5B6B82]">Patient Queue</span>
              </div>
              <span className="text-[10px] font-bold text-[#2F6FE0]">12 Active</span>
            </div>

            {/* Waiting time row */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <Clock size={9} className="text-[#5B6B82]" />
                <span className="text-[10px] text-[#5B6B82]">Waiting Time</span>
              </div>
              <span className="text-[10px] font-bold text-[#0B1B33]">4 mins</span>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#EEF4FF] mb-2.5" />

            {/* Connected status */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[11px] font-semibold text-emerald-600">Connected</span>
            </div>
          </div>

          {/* Floating card — bottom left: AI CLINICAL SUMMARY */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.20)] border border-white/80 p-4 w-[230px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#2F6FE0]">AI Clinical Summary</span>
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EAF3FC" }}>
                <Brain size={16} className="text-[#2F6FE0]" />
              </div>
            </div>
            <div className="space-y-3">
              {/* Documentation */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] text-[#5B6B82]">Documentation</span>
                  <span className="text-[11px] font-bold text-[#0B1B33]">84%</span>
                </div>
                <div className="h-2 bg-[#EAF3FC] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "84%", background: "#2F6FE0" }} />
                </div>
              </div>
              {/* Clinical Coding */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[11px] text-[#5B6B82]">Clinical Coding</span>
                  <span className="text-[11px] font-bold text-[#0B1B33]">67%</span>
                </div>
                <div className="h-2 bg-[#EAF3FC] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "67%", background: "#2F6FE0" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom wave into next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
        <svg
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,40 C360,64 1080,16 1440,40 L1440,64 L0,64 Z" fill="#CADCF2" />
        </svg>
      </div>
    </section>
  );
}
