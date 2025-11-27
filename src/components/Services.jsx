// src/components/Services.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services"; // expected shape: [{ slug, name, img, description, highlights }, ...]

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Services({ items = services }) {
  const navigate = useNavigate();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 bg-linear-to-b from-[#2C4A72] to-[#2C4A72] sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="services-heading" className="text-3xl font-bold text-white">
            Services
          </h2>
          <p className="mt-3 text-sm text-slate-100">
            We help overseas companies set up and manage their operations in India — simplified, compliant and scalable.
          </p>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {items.map((s, i) => (
            <motion.article
              key={s.slug || s.name + i}
              variants={item}
              className="cursor-pointer rounded-2xl bg-white shadow-lg hover:-translate-y-1 hover:shadow-2xl transition overflow-hidden"
              onClick={() => navigate(`/services/${s.slug}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate(`/services/${s.slug}`); }}
              aria-label={`View details for ${s.name}`}
            >
              <div className="h-44 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
                {s.description && <p className="mt-2 text-sm text-slate-600 line-clamp-3">{s.description}</p>}

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Learn more</span>
                  <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Optional: call-to-action */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:scale-[1.01] transition"
          >
            Discuss your needs
          </button>
        </div>
      </div>
    </section>
  );
}
