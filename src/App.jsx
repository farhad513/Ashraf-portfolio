import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Send,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import SectionHeading from "./components/SectionHeading";
import LogoMark from "./components/LogoMark";
import BrandCard from "./components/BrandCard";
import MediaCard from "./components/MediaCard";
import { ventures, travels, community, strengths, socialLinks } from "./data";

const heroImage =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90";

const educationImage =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const onScroll = () => setShowTop(window.scrollY > 650);
    window.addEventListener("scroll", onScroll);

    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const nav = [
    ["About", "#about"],
    ["Ventures", "#ventures"],
    ["Travel", "#travel"],
    ["Community", "#community"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-paper">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="container-main flex h-[70px] items-center justify-between">
          <LogoMark />

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-[11px] font-semibold text-slate-600 hover:text-ink">
                {label}
              </a>
            ))}
            <a href="#contact" className="btn-primary px-5 py-2.5">
              Let's Connect <ArrowUpRight size={14} />
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <nav className="container-main flex flex-col gap-1 !px-0">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu} className="btn-primary mt-2">
                Let's Connect <ArrowUpRight size={14} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="home">
        <section className="section pb-10 pt-14 sm:pt-20 lg:pb-16 lg:pt-24">
          <div className="container-main grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
            <div className="reveal">
              <p className="eyebrow">Travel • Tourism • Business</p>
              <h1 className="font-display text-5xl font-bold leading-[.98] tracking-[-.045em] text-ink sm:text-6xl lg:text-7xl">
                Ashraf
              </h1>
              <p className="mt-4 max-w-xl text-sm font-bold tracking-[.03em] text-ink sm:text-base">
                Traveller • Tourism Professional • Entrepreneur
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Building meaningful journeys, practical ventures and community-driven initiatives
                through travel, business and people.
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-4 gap-2 border-t border-slate-200 pt-6">
                {[
                  ["3+", "Years in Travel"],
                  ["3+", "Active Ventures"],
                  ["4", "Creative Brands"],
                  ["5+", "Community Works"],
                ].map(([number, label]) => (
                  <div key={label}>
                    <div className="font-display text-xl font-bold text-wine">{number}</div>
                    <div className="mt-1 text-[9px] font-semibold leading-3 text-slate-400">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#ventures" className="btn-primary">
                  Explore My Work <ArrowUpRight size={15} />
                </a>
                <a href="#contact" className="btn-light border border-slate-200">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="reveal relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="absolute -inset-4 rounded-[2rem] bg-wine/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-soft">
                <img
                  src={heroImage}
                  alt="Ashraf"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-wine">Profile</p>
                  <p className="mt-1 text-sm font-bold text-ink">Travel • Business • Community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section bg-white/55">
          <div className="container-main">
            <SectionHeading
              eyebrow="Profile"
              title="About Ashraf"
              subtitle="A multi-disciplinary professional focused on travel, tourism, entrepreneurship and community impact."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                [Globe2, "Tourism & Travel", "Creating thoughtful travel experiences and connecting people with places."],
                [BriefcaseBusiness, "Entrepreneurship", "Building practical brands and ventures with a strong focus on people."],
                [Users, "Social Impact", "Supporting communities through collaboration, communication and action."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="glass-card reveal p-6">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-red-50 text-wine">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-ink">{title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENTURES */}
        <section id="ventures" className="section">
          <div className="container-main">
            <SectionHeading
              eyebrow="Selected Ventures"
              title="Ventures & Creative Brands"
              subtitle="A growing portfolio of brands and projects across travel, property, media and services."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {ventures.map((item) => <BrandCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        {/* TRAVEL */}
        <section id="travel" className="section bg-white/55">
          <div className="container-main">
            <SectionHeading
              eyebrow="Travel Stories"
              title="Travelling Portfolio"
              subtitle="A visual collection of people, places and experiences from the journey."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {travels.map((item) => <MediaCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="section">
          <div className="container-main">
            <SectionHeading
              eyebrow="Social Impact"
              title="Non-Profit & Community"
              subtitle="Initiatives designed to bring people together and create meaningful local impact."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {community.map((item) => <BrandCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section bg-white/55">
          <div className="container-main">
            <SectionHeading
              eyebrow="Academic Background"
              title="Education"
              subtitle="Learning, experience and continuous development shape the way I work."
            />
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
              <div className="reveal space-y-5">
                {[
                  ["Bachelor / Professional Education", "A foundation built around communication, business and people."],
                  ["Tourism & Travel Learning", "Developing practical knowledge through real-world travel experience."],
                  ["Business & Entrepreneurship", "Learning by building ventures, projects and partnerships."],
                  ["Continuous Professional Growth", "Always improving through field work, collaboration and new ideas."],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-wine text-white">
                      <CheckCircle2 size={13} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-ink">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal rounded-2xl bg-white p-2 shadow-card">
                <img src={educationImage} alt="Learning and collaboration" className="aspect-[4/3] w-full rounded-xl object-cover" />
                <p className="px-3 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-wine">
                  Learning • Industry • Collaboration
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STRENGTHS */}
        <section className="section">
          <div className="container-main">
            <SectionHeading
              eyebrow="Professional Profile"
              title="Experience & Strengths"
              subtitle="A balanced mix of practical experience, communication and entrepreneurial thinking."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((strength, i) => (
                <div key={strength} className="glass-card reveal flex items-center gap-3 px-5 py-4">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-wine" />
                  <span className="text-sm font-semibold text-slate-700">{strength}</span>
                  {i < 2 && <Sparkles size={14} className="ml-auto text-wine/60" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section pt-8">
          <div className="container-main">
            <SectionHeading
              eyebrow="Connect"
              title="Get in Touch"
              subtitle="Have an idea, partnership or travel project in mind? Let's start a conversation."
            />

            <div className="reveal overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-soft sm:p-10">
              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-xl font-bold">Let's connect</p>
                  <p className="mt-3 max-w-md text-xs leading-6 text-slate-300">
                    I'm open to meaningful collaborations across travel, tourism, business, creative
                    projects and community initiatives.
                  </p>

                  <div className="mt-7 space-y-4">
                    <a href="mailto:hello@ashraf.com" className="flex items-center gap-3 text-xs text-slate-200 hover:text-white">
                      <Mail size={16} className="text-red-300" /> hello@ashraf.com
                    </a>
                    <a href="tel:+8801000000000" className="flex items-center gap-3 text-xs text-slate-200 hover:text-white">
                      <Phone size={16} className="text-red-300" /> +880 1XXX-XXXXXX
                    </a>
                    <div className="flex items-center gap-3 text-xs text-slate-200">
                      <MapPin size={16} className="text-red-300" /> Bangladesh
                    </div>
                  </div>
                </div>

                <div className="grid content-start gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Clock3 size={18} className="text-red-300" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Availability</p>
                    <p className="mt-1 text-sm font-semibold">Open for collaborations</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Plane size={18} className="text-red-300" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Focus</p>
                    <p className="mt-1 text-sm font-semibold">Travel & Tourism</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                    <MessageCircle size={18} className="text-red-300" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Best for</p>
                    <p className="mt-1 text-sm font-semibold">Partnerships • Projects • Community • Travel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL */}
        <section className="pb-16">
          <div className="container-main">
            <SectionHeading
              eyebrow="Find Me Online"
              title="Social & Professional Links"
            />
            <div className="reveal flex flex-wrap justify-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className={`grid h-12 w-12 place-items-center rounded-xl text-lg font-black text-white shadow-md transition duration-300 hover:-translate-y-1 ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="mt-5 text-center text-[10px] font-medium text-slate-400">
              LinkedIn • WhatsApp • Facebook • Instagram • X
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-wine py-16 sm:py-20">
          <div className="container-main text-center text-white">
            <p className="text-[10px] font-bold uppercase tracking-[.24em] text-red-100">Ready to Connect?</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Let's build meaningful journeys together.</h2>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-red-100/90">
              Travel, business, creativity and community — let's turn a good idea into something useful.
            </p>
            <a href="mailto:hello@ashraf.com" className="btn-light mt-7">
              Start a Conversation <Send size={14} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy py-12 text-slate-300">
        <div className="container-main grid gap-10 md:grid-cols-[1.3fr_.7fr]">
          <div>
            <LogoMark dark />
            <p className="mt-5 max-w-md text-xs leading-6 text-slate-400">
              Travel • Tourism • Business • Community. A personal portfolio built to showcase
              ventures, experiences and meaningful work.
            </p>
            <p className="mt-5 text-[10px] text-slate-500">
              © {new Date().getFullYear()} Ashraf. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-red-300">Quick Links</p>
            <div className="mt-4 grid grid-cols-2 gap-y-3 text-xs">
              {nav.slice(0, 4).map(([label, href]) => (
                <a key={href} href={href} className="hover:text-white">{label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-wine text-white shadow-xl transition hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
}

export default App;