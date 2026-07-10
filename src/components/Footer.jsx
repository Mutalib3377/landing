const FOOTER_LINKS = [
  {
    heading: "Navigation",
    links: [
      { label: "Platform Overview", href: "#platform" },
      { label: "About Us",          href: "#about"    },
      { label: "Our Vision",        href: "#vision"   },
      { label: "Our Team",          href: "#team"     },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",    href: "#" },
      { label: "Terms of Service",  href: "#" },
      { label: "Cookie Policy",     href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Contact Support",   href: "#enterprise" },
      { label: "Media Kit",         href: "#"           },
      { label: "Career Opportunities", href: "#"        },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0B1B33] border-t border-[#0B1B33]">
      <div className="w-[90%] max-w-[1480px] mx-auto pt-20 pb-10">

        {/* ── Top row ── */}
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <img 
                src="/Screenshot 2026-04-24 at 10.24.49 8.png" 
                alt="Qarevo Health Logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
            <p className="text-[#8B9BB4] text-[14.5px] leading-[1.75] max-w-[260px]">
              Leading the transformation of digital care with intelligent
              infrastructure and sovereign AI.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading}>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#2F6FE0] mb-5">
                {heading}
              </p>
              <ul className="space-y-3.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[14.5px] text-[#DCE6F5] hover:text-white hover:underline transition-all"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13.5px] text-[#8B9BB4]">
            © {new Date().getFullYear()} Qarevo Health. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13.5px] text-[#8B9BB4] hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[13.5px] text-[#8B9BB4] hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
