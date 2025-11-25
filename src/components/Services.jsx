// src/components/Services.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const serviceItems = [
  {
    name: "Remote Hiring & Bulk Recruitment",
    description:
      "Source and onboard individual contributors or complete delivery pods for technology, digital and support functions.",
    highlights: [
      "Bulk and project-based hiring",
      "Role-specific assessment and shortlisting",
      "Structured onboarding documentation",
    ],
  },
  {
    name: "GCC Support Services",
    description:
      "Specialised support for Global Capability Centers operating from India with clear governance and reporting.",
    highlights: [
      "Set up India GCC support centers",
      "Build technical and back-office teams",
      "Cross-border compliance and coordination",
    ],
  },
  {
    name: "Dedicated Talent Outsourcing",
    description:
      "Managed remote or hybrid teams in India, operating as an extension of your in-house capability.",
    highlights: [
      "End-to-end hiring & onboarding",
      "Payroll, HR and IT management",
      "Performance and engagement support",
    ],
  },
  {
    name: "Workspace & Incubation Services",
    description:
      "Ready-to-use office spaces designed for software and IT teams, with the flexibility to scale.",
    highlights: [
      "Configured, operational workspaces",
      "Collaboration and focus areas",
      "On-ground facilities and IT support",
    ],
  },
  {
    name: "HR & Payroll Management",
    description:
      "Centralised HR operations across your India-based workforce, aligned to local regulations.",
    highlights: [
      "Employee lifecycle management",
      "Leave, compliance and documentation",
      "Payroll, statutory filings and reporting",
    ],
  },
  {
    name: "IT Infrastructure & Maintenance",
    description:
      "Secure, reliable IT environments managed by specialists who understand distributed teams.",
    highlights: [
      "System and network setup",
      "Security, monitoring and maintenance",
      "Backup and recovery frameworks",
    ],
  },
  {
    name: "Employer of Record (EOR)",
    description:
      "Hire talent in India without a local entity—AMVA acts as the compliant legal employer.",
    highlights: [
      "Accelerated market entry",
      "Labour law and tax compliance",
      "Transparent payroll and contracts",
    ],
  },
  {
    name: "Project-Based Outsourcing",
    description:
      "Dedicated project teams for IT, operations, digital or support functions, under your direction.",
    highlights: [
      "Technology and support delivery",
      "Structured SLAs and reporting",
      "Flexible engagement models",
    ],
  },
  {
    name: "Learning & Development",
    description:
      "Targeted training for India-based teams supporting global operations.",
    highlights: [
      "Onboarding and induction programs",
      "Role and capability-specific training",
      "Soft skills and leadership tracks",
    ],
  },
  {
    name: "Data Security & Compliance",
    description:
      "Security frameworks aligned with global expectations for data privacy and protection.",
    highlights: [
      "Access and identity management",
      "Security audits and controls",
      "Support for global regulatory requirements",
    ],
  },
  {
    name: "Consulting & Setup Advisory",
    description:
      "Advisory support across legal, operational and infrastructure decisions for India expansion.",
    highlights: [
      "Market entry and location strategy",
      "Entity and vendor selection support",
      "Cost and operating model design",
    ],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? serviceItems : serviceItems.slice(0, 6);

  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Services
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            A complete stack for building in India
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Whether you are setting up a GCC, expanding engineering capacity or
            building a support operation, AMVA offers modular services that work
            together as one coherent solution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((service, i) => (
            <motion.div
              key={service.name}
              initial="initial"
              whileInView="animate"
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {service.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                {service.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[5px] h-1 w-1 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
          >
            {showAll ? "Show fewer services" : "View all services"}
          </button>
        </div>
      </div>
    </section>
  );
}
