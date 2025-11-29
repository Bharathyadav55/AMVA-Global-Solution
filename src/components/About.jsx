// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80";

const coreValues = [
  { name: "Integrity", desc: "Clear, transparent communication in every engagement." },
  { name: "Excellence", desc: "Consistent focus on quality, timelines and outcomes." },
  { name: "Reliability", desc: "Operational stability for long-term global partnerships." },
  { name: "Collaboration", desc: "Working as an extension of your internal teams." },
];

const differentiatorCards = [
  {
    title: "End-to-End Offshore Setup",
    subtitle: "From concept to steady-state",
    highlights: [
      "Single partner for hiring, HR, workspace and IT",
      "Clear playbooks for GCC and remote team setup",
      "Designed for scale and compliance from day one",
    ],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Managed Workspaces",
    subtitle: "Operationally ready offices",
    highlights: [
      "Configurable workspaces aligned to your brand",
      "Meeting rooms, collaboration zones and focus areas",
      "On-ground facilities and IT support teams",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Integrated HR & Compliance",
    subtitle: "Built for global standards",
    highlights: [
      "Full HR lifecycle management",
      "Compliance with Indian labour and tax regulations",
      "Transparent payroll and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const cardVariant = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function About() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const Content = (
    <div className="mx-auto max-w-6xl rounded-2xl border border-slate-100 bg-white px-5 py-8 shadow-sm md:px-8">
      <div className="mb-6 flex flex-col items-center text-center">
        <img
          src={HERO_IMAGE_URL}
          alt="AMVA Team"
          className="h-20 w-20 rounded-full object-cover border border-slate-100"
        />
        <div className="mt-3 flex items-center gap-3">
          <img src={Logo} alt="AMVA logo" className="h-8 w-8 rounded-md object-contain" />
          <div className="text-left">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600">
              About AMVA
            </h2>
            <div className="text-base font-semibold text-slate-900">
              Global capability, local execution
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
        AMVA Global Solution Pvt Ltd partners with technology, GCC and enterprise clients to build
        and manage their presence in India. We combine structured processes, local expertise and
        thoughtful service design to ensure your teams operate with confidence and clarity from day
        one.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-semibold text-slate-900">Our vision</div>
          <p className="mb-4 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
            To be the most dependable partner for global organisations building high-performing
            teams and infrastructure in India.
          </p>

          <div className="mb-2 text-sm font-semibold text-slate-900">Our mission</div>
          <p className="rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
            To simplify global expansion with structured, compliant and scalable solutions in
            hiring, HR, workspace and IT—delivered through one integrated operating model.
          </p>
        </div>

        <div>
          <div className="mb-2 text-sm font-semibold text-slate-900">Our core values</div>
          <ul className="space-y-2.5">
            {coreValues.map((v) => (
              <li key={v.name} className="flex items-start gap-2">
                <span className="mt-[3px] h-2 w-2 rounded-full bg-sky-600" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{v.name}</div>
                  <div className="text-sm text-slate-600">{v.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="mb-3 text-center text-base font-semibold text-slate-900">
          Why organisations choose AMVA
        </h3>
        <div className="grid gap-5 md:grid-cols-3">
          {differentiatorCards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariant}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-2 text-center shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                className="mx-auto mb-3 h-12 w-12 rounded-full object-cover"
              />
              <div className="mb-1 text-sm font-semibold text-slate-900">{card.title}</div>
              <div className="mb-2 text-xs text-sky-600">{card.subtitle}</div>
              <ul className="mt-auto space-y-1.5 text-left text-xs leading-relaxed text-slate-600">
                {card.highlights.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-[5px] h-1 w-1 rounded-full bg-slate-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  if (!isClient) {
    return (
      <section id="about" className="bg-slate-50 py-4 md:py-6">
        <div className="container px-4">{Content}</div>
      </section>
    );
  }

  return (
    <section id="about" className="bg-slate-50 py-4 md:py-6">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="container px-4"
      >
        <motion.div variants={cardVariant} className="mx-auto">
          {Content}
        </motion.div>
      </motion.div>
    </section>
  );
}
