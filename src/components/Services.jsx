// src/components/Services.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";

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
  const [showAll, setShowAll] = useState(false);

  // show first 4, or all when showAll is true
  const visibleItems = showAll ? items : items.slice(0, 4);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-10 bg-linear-to-b from-[#2C4A72] to-[#2C4A72] sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="services-heading" className="text-3xl font-bold text-white">
            Services
          </h2>
          <p className="mt-3 text-sm text-slate-100">
            We help overseas companies set up and manage their operations in India — simplified,
            compliant and scalable.
          </p>
        </header>

        {/* key changes with showAll so Framer re-mounts and animates new children correctly */}
        <motion.div
          key={showAll ? "all" : "partial"}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleItems.map((s, i) => (
            <motion.article
              key={s.slug ?? `${s.name}-${i}`}
              variants={item}
              className="cursor-pointer rounded-2xl bg-white shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-transform overflow-hidden"
              onClick={() => navigate(`/services/${s.slug ?? ""}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                  navigate(`/services/${s.slug ?? ""}`);
                }
              }}
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
                {s.description && (
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {s.description}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Learn more</span>
                  <svg
                    className="h-4 w-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {items.length > 4 && (
            <button
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:scale-[1.01] transition"
            >
              {showAll ? "Show fewer services" : "View more services"}
            </button>
          )}

          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-md hover:scale-[1.01] transition"
          >
            Discuss your needs
          </button>
        </div>
      </div>
    </section>
  );
}
