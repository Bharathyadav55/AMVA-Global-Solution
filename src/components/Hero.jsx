// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80";

const ONLINE_ICONS = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=60",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=200&q=60",
];

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center gap-10 px-4 py-12 lg:flex-row lg:px-6 lg:py-20">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600">
            <img
              src={Logo}
              alt="AMVA logo"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span>AMVA Global Solution Pvt Ltd</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Building <span className="text-sky-600">high-performing teams</span>{" "}
            and infrastructure for modern global businesses.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            AMVA Global helps software, IT and GCC organizations establish and
            scale their operations in India. From remote hiring and HR to
            workspaces and IT infrastructure, we take care of the foundation so
            you can focus on growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
            >
              Schedule a consultation
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              View services
            </a>

            <div className="ml-1 flex items-center gap-2">
              <img
                src={ONLINE_ICONS[0]}
                alt="Client 1"
                className="h-9 w-9 rounded-full object-cover"
              />
              <img
                src={ONLINE_ICONS[1]}
                alt="Client 2"
                className="h-9 w-9 rounded-full object-cover -ml-2 border-2 border-white"
              />
              <span className="text-xs text-slate-500">
                Trusted by global teams
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right: Image / Card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={HERO_IMAGE}
                alt="Team collaboration"
                className="h-64 w-full object-cover"
              />
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-sky-600">
                    Offshore Delivery
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Onboard in weeks
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Structured frameworks to recruit, host and manage your team in
                  India—remotely or on-site—under one consistent operating model.
                </p>
              </div>
            </div>

            {/* Small floating stat card */}
            <div className="absolute -bottom-8 left-4 w-48 rounded-xl border border-slate-200 bg-white p-4 shadow-md">
              <p className="text-xs text-slate-500">Delivery readiness</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                24/7
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Operational support for distributed teams.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
