import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Smartphone,
  MonitorCog,
  Bug,
  Bot,
  BarChart3,
  ShoppingCart,
  PlugZap,
  Headphones,
  LayoutDashboard,
  Globe2,
  Palette,
  PenTool,
  Layers,
  Megaphone,
  MessageCircle,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
  Database,
  Component,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" },
};

const services = [
  { title: "Website Development", icon: Globe2, desc: "Fast, responsive, SEO-ready business websites built to convert visitors into customers." },
  { title: "Web App Development", icon: Code2, desc: "Custom portals, SaaS platforms, dashboards, and web-based systems for daily operations." },
  { title: "Mobile App Development", icon: Smartphone, desc: "Modern Android and iOS apps for booking, delivery, services, internal teams, and customers." },
  { title: "Desktop App Development", icon: MonitorCog, desc: "Reliable desktop software for business workflows, reporting, and offline productivity." },
  { title: "UI/UX & Figma Design", icon: Component, desc: "Wireframes, prototypes, design systems, and user-friendly interfaces before development starts." },
  { title: "Branding & Graphic Design", icon: Palette, desc: "Logo design, brand visuals, posters, banners, social media creatives, and marketing graphics." },
  { title: "QA & Software Testing", icon: Bug, desc: "Manual and automated testing to improve quality, stability, performance, and user experience." },
  { title: "Business Automation", icon: Bot, desc: "Automated workflows that reduce repetitive tasks, save time, and improve business accuracy." },
  { title: "Custom Dashboards", icon: BarChart3, desc: "Business dashboards that turn data into clear decisions, KPIs, reports, and insights." },
  { title: "CRM & Admin Panels", icon: LayoutDashboard, desc: "Custom CRM systems, admin panels, team portals, and management tools for operations." },
  { title: "E-commerce Development", icon: ShoppingCart, desc: "Online stores, order systems, inventory flows, payment integrations, and Shopify solutions." },
  { title: "API Integrations", icon: PlugZap, desc: "Connect apps, CRMs, payment gateways, third-party platforms, and internal systems." },
  { title: "Maintenance & Support", icon: Headphones, desc: "Ongoing improvements, bug fixes, monitoring, upgrades, and long-term technical support." },
];

const projects = [
  {
    title: "E-commerce Management Dashboard",
    problem: "A retail team needed one place to manage orders, customers, inventory, and sales performance.",
    solution: "We designed a secure dashboard with order tracking, product controls, customer records, and live sales reports.",
    tech: "React, Node.js, MongoDB, APIs, QA Tools",
    result: "Improved order visibility, reduced manual tracking, and helped the team make faster business decisions.",
  },
  {
    title: "Custom CRM for Sales Team",
    problem: "Sales leads were scattered across spreadsheets, WhatsApp, and email, causing missed follow-ups.",
    solution: "We built a CRM with lead stages, reminders, notes, user roles, reporting, and follow-up automation.",
    tech: "Next.js, PostgreSQL, Express, Automation Tools",
    result: "The team gained a cleaner sales pipeline, better accountability, and faster response times.",
  },
  {
    title: "Mobile App for Service Booking",
    problem: "A service business wanted customers to book appointments without calling support every time.",
    solution: "We created a mobile booking app with service categories, time slots, notifications, and admin controls.",
    tech: "Flutter, APIs, Firebase, Figma",
    result: "Reduced manual booking work and gave customers a smoother way to request services.",
  },
  {
    title: "Automation System for Order Processing",
    problem: "The operations team was manually copying order data between multiple tools every day.",
    solution: "We automated order routing, data syncing, status updates, and notification flows.",
    tech: "Make.com, n8n, Webhooks, APIs",
    result: "Saved hours of repetitive work and reduced human errors in order management.",
  },
  {
    title: "Business Analytics Dashboard",
    problem: "Management needed clear business insights from scattered reports and raw operational data.",
    solution: "We built a KPI dashboard with charts, filters, role-based access, and exportable reports.",
    tech: "React, Node.js, PostgreSQL, Data Visualization",
    result: "Leadership gained faster insight into revenue, performance, trends, and operational gaps.",
  },
  {
    title: "QA Testing Suite for Web Application",
    problem: "A growing web platform was releasing features quickly but facing bugs after deployment.",
    solution: "We created a structured QA process with test cases, regression checks, bug reports, and release validation.",
    tech: "Manual QA, Automation QA, Test Plans, Bug Tracking",
    result: "Reduced production issues and improved confidence before each release.",
  },
];

const process = ["Discovery", "Planning", "UI/UX Design", "Development", "Testing", "Launch", "Support"];

const reasons = [
  "Business-focused development",
  "Clean and scalable code",
  "Modern UI/UX",
  "Fast communication",
  "QA before delivery",
  "Long-term support",
  "Custom solutions, not templates",
];

const stack = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Canva",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Flutter",
  "React Native",
  "Electron",
  "WordPress",
  "Shopify",
  "APIs",
  "Make.com",
  "n8n",
  "Automation Tools",
  "QA Tools",
];

const projectTypes = [
  "Website Development",
  "Web App Development",
  "Mobile App Development",
  "Business Automation",
  "UI/UX & Branding",
  "QA & Testing",
  "Long-term Support",
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-lg shadow-cyan-500/20">
        <div className="absolute inset-1 rounded-xl bg-slate-950/35" />
        <div className="absolute left-2 top-2 h-7 w-7 rounded-lg border border-white/35" />
        <div className="absolute bottom-2 right-2 h-4 w-4 rounded-md bg-white/90" />
      </div>
      <div>
        <p className="text-lg font-black tracking-tight text-white">USF Innovations</p>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan-200/70">Digital Systems Agency</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p>}
    </motion.div>
  );
}

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-300 lg:flex">
            <a href="#services" className="transition hover:text-cyan-300">Services</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#process" className="transition hover:text-cyan-300">Process</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </div>
          <a href="https://wa.me/923154169650" className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950 md:inline-flex">
            WhatsApp Us
          </a>
        </nav>
      </header>

      <section className="relative z-10 px-5 pb-20 pt-20 md:pb-28 md:pt-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Sparkles className="h-4 w-4" /> Premium software, automation & design partner
            </div>
            <h1 className="max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              We Build Websites, Apps & Automation Systems That Help Businesses Scale
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              From custom websites and mobile apps to business dashboards, QA, workflow automation, UI/UX design, branding, and long-term tech support, we design and develop reliable digital systems for modern businesses.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="group inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-white">
                View Our Services <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-black text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-white/10">
                Start a Project
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {["11+ Service Areas", "Business-first", "Support Ready"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center backdrop-blur">
                  <p className="text-sm font-bold text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }} className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/85 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <p className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">Live Project System</p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 to-blue-500/10 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-cyan-200">Business Dashboard</p>
                      <h3 className="mt-2 text-2xl font-black text-white">Automation Control Center</h3>
                    </div>
                    <Workflow className="h-10 w-10 text-cyan-200" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["Orders", "2.4k"],
                      ["Tasks Saved", "185h"],
                      ["Uptime", "99.9%"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-slate-950/45 p-4">
                        <p className="text-xs text-slate-400">{label}</p>
                        <p className="mt-1 text-xl font-black text-white">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <ShieldCheck className="mb-4 h-8 w-8 text-cyan-300" />
                    <h4 className="font-black text-white">QA Before Delivery</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">Structured testing, bug tracking, release checks, and performance validation.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                    <Database className="mb-4 h-8 w-8 text-cyan-300" />
                    <h4 className="font-black text-white">Scalable Systems</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-400">Clean architecture for dashboards, CRMs, e-commerce, and custom apps.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Complete digital product development under one roof"
            text="We combine strategy, design, development, testing, automation, and support to create reliable solutions that solve real business problems."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.025 }} className="group rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-5 py-20 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-7 backdrop-blur md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">About USF Innovations</p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Practical software solutions for serious business growth.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-300">
              We are a software development team focused on building practical, scalable, and business-driven digital solutions. Our work is not just about coding — we understand business problems and convert them into reliable systems.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Design", "Development", "Automation"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                  <p className="font-black text-white">{item}</p>
                  <p className="mt-2 text-sm text-slate-400">Built with clarity, quality, and scale in mind.</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Sample business projects we can deliver"
            text="These project examples show the type of serious, business-focused digital systems USF Innovations can design, build, test, automate, and support."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.04 }} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-cyan-300/30 hover:bg-white/[0.07] md:p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">Case Study</span>
                </div>
                <div className="grid gap-4">
                  <p className="leading-7 text-slate-300"><span className="font-black text-white">Problem:</span> {project.problem}</p>
                  <p className="leading-7 text-slate-300"><span className="font-black text-white">Solution:</span> {project.solution}</p>
                  <p className="leading-7 text-slate-300"><span className="font-black text-white">Technologies Used:</span> {project.tech}</p>
                  <p className="leading-7 text-slate-300"><span className="font-black text-white">Result:</span> {project.result}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="A clear process from idea to launch and support"
            text="We keep projects organized with practical steps, transparent communication, and quality checks before delivery."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {process.map((step, index) => (
              <motion.div key={step} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.04 }} className="relative rounded-3xl border border-white/10 bg-white/[0.045] p-5 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-lg font-black text-slate-950">{index + 1}</div>
                <p className="font-black text-white">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Why Choose Us</p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Built like a serious software partner, not a basic freelancer portfolio.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">USF Innovations focuses on business outcomes, clean execution, and reliable support so your digital systems keep working as your company grows.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div key={reason} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.035 }} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <CheckCircle2 className="h-6 w-6 flex-none text-cyan-300" />
                <p className="font-bold text-slate-100">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tech & Design Stack"
            title="Modern tools for design, development, automation, and QA"
            text="We select the right technology based on your business needs, project scale, budget, and long-term maintenance requirements."
          />
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl overflow-hidden rounded-[2.3rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-violet-500/15 p-8 text-center shadow-2xl shadow-cyan-950/40 md:p-14">
          <h2 className="mx-auto max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl">Have an idea or business problem? Let’s build the right digital solution.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Share your project goals with USF Innovations and we’ll help you plan the best path for design, development, automation, testing, and support.</p>
          <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-base font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-white">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </section>

      <section id="contact" className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Start your project with USF Innovations.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Tell us what you need to build, improve, automate, test, or design. We’ll help you shape it into a reliable digital solution.</p>
            <div className="mt-8 grid gap-4">
              <a href="https://wa.me/923154169650" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.07]">
                <MessageCircle className="h-6 w-6 text-cyan-300" />
                <div>
                  <p className="font-black text-white">WhatsApp</p>
                  <p className="text-slate-400">+92 315-4169650</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <Mail className="h-6 w-6 text-cyan-300" />
                <div>
                  <p className="font-black text-white">Email</p>
                  <p className="text-slate-400">hello@usfinnovations.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <Phone className="h-6 w-6 text-cyan-300" />
                <div>
                  <p className="font-black text-white">Availability</p>
                  <p className="text-slate-400">Websites, apps, dashboards, automation, QA, and design projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form {...fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Name
                <input className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Email
                <input type="email" className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Phone
                <input className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Phone / WhatsApp" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200">
                Project Type
                <select className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 font-medium text-white outline-none transition focus:border-cyan-300/60">
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200 md:col-span-2">
                Budget
                <input className="rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Estimated budget" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-200 md:col-span-2">
                Message
                <textarea rows={6} className="resize-none rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 font-medium text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60" placeholder="Tell us about your idea, business problem, or project requirements." />
              </label>
            </div>
            <button type="button" className="mt-6 w-full rounded-full bg-cyan-300 px-7 py-4 text-base font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-white">
              Submit Project Request
            </button>
            <p className="mt-4 text-center text-sm text-slate-500">This demo form is ready to connect with email, CRM, WhatsApp, or automation workflows.</p>
          </motion.form>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <Logo />
          <p className="text-center text-sm text-slate-500 md:text-right">© 2026 USF Innovations. Websites, apps, automation, QA, UI/UX, branding, and support.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
