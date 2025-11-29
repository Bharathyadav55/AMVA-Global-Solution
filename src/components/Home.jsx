// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <div id="home-page" className="bg-white">
      {/* HERO */}
      <section
        id="home"
        className="flex items-center bg-linear-to-b from-slate-50 via-white to-slate-50"
      >
        <div className="mx-auto max-w-7xl px-2 py-6 md:py-8 lg:flex lg:items-center lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:mx-0 lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm">
              <img
                src={Logo}
                alt="AMVA logo"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span>AMVA Global Solution Pvt Ltd</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Building{" "}
              <span className="text-sky-600">
                high-performing teams
              </span>{" "}
              and infrastructure for modern global businesses.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl">
              We help software, IT and GCC organisations establish and scale
              their operations in India — from remote hiring and HR to managed
              workspaces and IT infrastructure.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-700 hover:shadow-lg transition"
              >
                Schedule a consultation
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm transition"
              >
                View services
              </a>
            </div>

            <div className="mt-5 flex gap-6 text-xs text-slate-500">
              <div>
                <p className="font-semibold text-slate-800">
                  24/7 operational coverage
                </p>
                <p>For distributed technology teams</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  India-based delivery pods
                </p>
                <p>For GCCs and software firms</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 mx-auto max-w-md lg:mt-0 lg:ml-auto lg:w-1/2"
          >
            <div className="relative rounded-3xl border border-slate-100 bg-white/90 shadow-xl overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Team collaboration"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                    Offshore Delivery
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                    Onboard in weeks
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Structured frameworks to recruit and manage your team in
                  India—remotely or on-site.
                </p>
              </div>
            </div>

            <div className="relative -mt-6 ml-6 w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-md">
              <p className="text-xs text-slate-500">Operational coverage</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                24/7
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Support for distributed teams
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <About />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <Services />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <Contact />
        </div>
      </section>
    </div>
  );
}
