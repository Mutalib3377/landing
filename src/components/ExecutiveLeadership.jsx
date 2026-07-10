import { Link, Mail, User } from "lucide-react";

const LEADERS = [
  {
    id: "jan",
    name: "Jan-Phillip Waffenschmidt",
    title: "Chief Executive Officer",
    bio: "Visionary strategist driving Qarevo's mission to redefine digital healthcare at enterprise scale.",
  },
  {
    id: "abubakar",
    name: "Abubakar Sadiq Abdulhameed",
    title: "Chief Technology Officer",
    bio: "Architect of Qarevo's sovereign AI infrastructure, clinical data platforms, and security frameworks.",
  },
  {
    id: "maximilian",
    name: "Maximilian Deibert",
    title: "Executive",
    bio: "Leading operational excellence and strategic partnerships across Qarevo's global healthcare network.",
  },
];

export default function ExecutiveLeadership() {
  return (
    <section id="team" className="bg-[#CADCF2] pt-6 lg:pt-8 pb-6 lg:pb-8">
      <div className="w-[97%] max-w-[1480px] mx-auto">

        {/* ── Outer white rounded card — 40px radius per Figma ── */}
        <div
          className="bg-white px-8 lg:px-12 pt-12 pb-14 border border-[#DCE6F5] shadow-[0_4px_32px_rgba(14,42,92,0.07)]"
          style={{ borderRadius: "40px" }}
        >

          {/* ── Header ── */}
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent mb-3">
              Leadership
            </p>
            <h2 className="text-[32px] lg:text-[36px] font-bold text-text-dark">
              Executive Leadership
            </h2>
            <p className="text-text-muted text-[15px] mt-3 max-w-md">
              Pioneering the intersection of healthcare and technology.
            </p>
          </div>

          {/* ── 3-column grid ── */}
          <div className="grid md:grid-cols-3 gap-6">
            {LEADERS.map(({ id, name, title, bio }) => (
              <div
                key={id}
                id={`leader-${id}`}
                className="bg-[#F8FAFD] rounded-3xl p-7 border border-border-light shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="w-16 h-16 bg-section-blue rounded-2xl flex items-center justify-center mb-5 border border-border-light">
                  <User size={28} className="text-accent" strokeWidth={1.5} />
                </div>

                {/* Name + title */}
                <h3 className="text-[17px] font-bold text-text-dark leading-tight mb-1">
                  {name}
                </h3>
                <p className="text-[13px] font-semibold text-accent mb-3">
                  {title}
                </p>

                {/* Bio */}
                <p className="text-text-muted text-[13.5px] leading-[1.65] mb-6">
                  {bio}
                </p>

                {/* Action icons */}
                <div className="flex items-center gap-2 pt-4 border-t border-border-light">
                  <button className="w-8 h-8 rounded-lg bg-white border border-border-light flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-colors">
                    <Link size={13} className="text-text-muted" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-white border border-border-light flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-colors">
                    <Mail size={13} className="text-text-muted" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
