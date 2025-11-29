// src/components/ServiceDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/services";

const container = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-800">Service not found</h3>
          <p className="mt-3 text-slate-600">We couldn't find the service you were looking for.</p>
          <div className="mt-6">
            <button onClick={() => navigate("/")} className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition">
              Back to home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // related services - filter out current and show up to 3
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <motion.section initial="hidden" animate="show" variants={container} className="bg-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Breadcrumb + title hero */}
        <motion.div variants={item} className="mb-8">
          <nav aria-label="Breadcrumb" className="text-xs">
            <ol className="flex items-center gap-2 text-slate-500">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:underline">Home</a>
                <span className="mx-2">/</span>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); }} className="hover:underline">Services</a>
                <span className="mx-2">/</span>
              </li>
              <li className="text-slate-700 font-medium" aria-current="page">{service.name}</li>
            </ol>
          </nav>

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">{service.name}</h1>
              {service.subtitle && <p className="mt-2 text-sm text-slate-600">{service.subtitle}</p>}
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Trusted delivery</span>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition">
                Contact about this service
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Main content */}
          <motion.div variants={item} className="md:col-span-8">
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <div className="h-72 w-full bg-slate-100">
                <img src={service.img} alt={service.name} className="h-full w-full object-cover" loading="lazy" />
              </div>

              <div className="px-6 py-8">
                <h2 className="text-lg font-semibold text-slate-900">About this service</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{service.long || service.description}</p>

                {service.caseStudy && (
                  <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
                    <div className="text-xs text-slate-500">Case study</div>
                    <div className="mt-2 text-sm text-slate-700">{service.caseStudy.snippet}</div>
                    <div className="mt-3">
                      <Link to={service.caseStudy.url} className="text-sky-600 hover:underline text-sm">Read full case study →</Link>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-slate-900">What we deliver</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {(service.highlights || []).map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-600" aria-hidden />
                        <span className="text-sm text-slate-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional detailed sections */}
                {service.details && service.details.map((sec, idx) => (
                  <div key={idx} className="mt-8">
                    <h4 className="text-sm font-medium text-slate-900">{sec.title}</h4>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{sec.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related services */}
            {related.length > 0 && (
              <motion.div variants={item} className="mt-8">
                <h4 className="text-sm font-semibold text-slate-900 mb-4">You may also be interested in</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <article key={r.slug} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm hover:shadow-md transition">
                      <img src={r.img} alt={r.name} className="h-28 w-full object-cover rounded-md" loading="lazy" />
                      <div className="mt-3">
                        <div className="text-sm font-semibold text-slate-900">{r.name}</div>
                        <p className="mt-1 text-xs text-slate-600 line-clamp-3">{r.description}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <Link to={`/services/${r.slug}`} className="text-xs text-sky-600 hover:underline">View details</Link>
                          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-xs rounded-full border border-slate-200 px-3 py-1">Enquire</button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right column: sticky card */}
          <motion.aside variants={item} className="md:col-span-4">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Service</div>
                    <div className="text-lg font-semibold text-slate-900">{service.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Lead time</div>
                    <div className="text-sm font-semibold text-slate-900">{service.leadTime || "2–4 weeks"}</div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-500">Starting from</div>
                  <div className="mt-1 text-2xl font-bold text-slate-900">{service.price || "Custom pricing"}</div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="flex-1 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition">Contact us</button>
                  <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">All services</Link>
                </div>
              </div>

              {/* Quick facts */}
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-600 shadow-sm">
                <div className="mb-2 text-xs font-semibold text-slate-700">Quick facts</div>
                <ul className="space-y-2">
                  <li><span className="font-medium text-slate-900">Coverage:</span> {service.coverage || "India – remote & on-site"}</li>
                  <li><span className="font-medium text-slate-900">Support:</span> {service.support || "24/7"}</li>
                  <li><span className="font-medium text-slate-900">Compliance:</span> {service.compliance || "Local regulations"}</li>
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Ready to explore?</div>
                <p className="mt-2 text-xs text-slate-600">Tell us a bit about your requirement and we'll share a tailored plan.</p>
                <div className="mt-3">
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="w-full rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">Get a tailored plan</button>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
