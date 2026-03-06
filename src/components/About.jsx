// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80";

const coreValues = [
  {
    name: "Integrity",
    desc: "Transparent communication and ethical practices in every partnership.",
  },
  {
    name: "Excellence",
    desc: "Delivering high-quality solutions aligned with global standards.",
  },
  {
    name: "Reliability",
    desc: "Building stable, scalable teams and infrastructure for long-term success.",
  },
  {
    name: "Collaboration",
    desc: "Working closely with organisations as an extension of their internal teams.",
  },
];

const differentiatorCards = [
  {
    title: "End-to-End Offshore Setup",
    subtitle: "From strategy to execution",
    highlights: [
      "Complete support for building offshore teams in India",
      "Structured processes for hiring, HR and operations",
      "Designed for scale, compliance and long-term growth",
    ],
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Managed Workspaces",
    subtitle: "Operationally ready environments",
    highlights: [
      "Fully equipped and scalable office environments",
      "Collaboration-friendly meeting and workspace design",
      "On-ground IT and facilities management support",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Integrated HR & Compliance",
    subtitle: "Built for global standards",
    highlights: [
      "Full HR lifecycle and workforce management",
      "Compliance with Indian labour and tax regulations",
      "Transparent payroll and operational reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const Content = (
    <div className="mx-auto max-w-6xl rounded-2xl border border-slate-100 bg-white px-5 py-8 shadow-sm md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col items-center text-center">
        <img
          src={HERO_IMAGE_URL}
          alt="AMVA Team"
          className="h-20 w-20 rounded-full object-cover border border-slate-100"
        />

        <div className="mt-3 flex items-center gap-3">
          <img
            src={Logo}
            alt="AMVA logo"
            className="h-8 w-8 rounded-md object-contain"
          />

          <div className="text-left">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-600">
              About AMVA
            </h2>

            <div className="text-base font-semibold text-slate-900">
              Global capability. Local execution.
            </div>
          </div>
        </div>
      </div>

      {/* About Paragraph */}
      <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
        AMVA Global Technologies Pvt Ltd is a technology and business services
        company that enables global organisations to establish and scale their
        operations in India. We specialise in building high-performing offshore
        teams, delivering managed workspaces, and providing integrated HR and
        operational support for modern businesses.
      </p>

      <p className="mx-auto mb-6 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
        Our approach combines global standards with deep local expertise,
        allowing organisations to expand confidently while maintaining
        efficiency, compliance, and operational excellence. From talent
        acquisition and workforce management to infrastructure and workplace
        solutions, AMVA acts as a trusted partner for organisations building
        scalable and sustainable operations in India.
      </p>

      {/* Vision & Mission */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <div className="mb-2 text-sm font-semibold text-slate-900">
            Our Vision
          </div>

          <p className="mb-4 rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
            To become a trusted global partner for organisations establishing
            and scaling high-performing teams and technology operations in
            India.
          </p>

          <div className="mb-2 text-sm font-semibold text-slate-900">
            Our Mission
          </div>

          <p className="rounded-xl bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
            To simplify global expansion by delivering integrated solutions
            across talent acquisition, HR management, workspace infrastructure,
            and operational support through a reliable and scalable service
            model.
          </p>
        </div>

        {/* Core Values */}
        <div>
          <div className="mb-2 text-sm font-semibold text-slate-900">
            Our Core Values
          </div>

          <ul className="space-y-2.5">
            {coreValues.map((v) => (
              <li key={v.name} className="flex items-start gap-2">
                <span className="mt-[3px] h-2 w-2 rounded-full bg-sky-600" />

                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {v.name}
                  </div>

                  <div className="text-sm text-slate-600">{v.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Choose AMVA */}
<div className="mt-6">

  <div className="text-center mb-6">
    <h3 className="text-lg font-semibold text-slate-900">
      Why Global Organisations Choose AMVA
    </h3>

    <p className="mt-1 text-sm text-slate-500 max-w-xl mx-auto">
      A structured approach to building reliable teams, scalable infrastructure,
      and long-term operational success in India.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {differentiatorCards.map((card) => (
      <div
        key={card.title}
        className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm hover:shadow-md transition"
      >
        <img
          src={card.image}
          alt={card.title}
          className="mx-auto mb-4 h-14 w-14 rounded-full object-cover"
        />

        <div className="mb-1 text-base font-semibold text-slate-900">
          {card.title}
        </div>

        <div className="mb-3 text-sm text-sky-600">
          {card.subtitle}
        </div>

        <ul className="space-y-2 text-left text-sm text-slate-600">
          {card.highlights.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

      </div>
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