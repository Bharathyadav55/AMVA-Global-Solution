// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import services from "../data/services";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (e.key === "Escape") setOpenDropdown(false);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpenDropdown(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onDoc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onDoc);
    };
  }, []);

  const scrollToId = (id) => (ev) => {
    ev.preventDefault();
    setOpen(false);
    setOpenDropdown(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
        <a href="#home" onClick={scrollToId("home")} className="flex items-center gap-3" aria-label="AMVA home">
          <img src={Logo} alt="AMVA" className="h-10 w-10 rounded-md object-cover shadow-sm" />
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-sm font-semibold uppercase tracking-wide text-slate-900">AMVA Global</span>
            <span className="text-xs text-slate-500">Solutions Pvt Ltd</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <a href="#home" onClick={scrollToId("home")} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Home</a>

          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setOpenDropdown(s => !s)} aria-haspopup="menu" aria-expanded={openDropdown} className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition">
              Services
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 8l4 4 4-4" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {openDropdown && (
              <div className="absolute left-0 mt-3 w-64 rounded-lg bg-white shadow-lg border border-slate-100 p-2">
                {services.map((s) => (
                  <a key={s.slug} href="#services" onClick={scrollToId("services")} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md">{s.name}</a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" onClick={scrollToId("about")} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">About</a>
          <a href="#contact" onClick={scrollToId("contact")} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">Contact</a>

          <a href="#contact" onClick={scrollToId("contact")} className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-sky-700 transition">Get in touch</a>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <a href="https://wa.me/<YOUR_PHONE>?text=Hello%20AMVA" className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">WhatsApp</a>

          <button aria-expanded={open} onClick={() => setOpen(s => !s)} className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2">
            <svg className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">{open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
          </button>
        </div>

        {open && (
          <div className="absolute top-16 right-4 w-64 rounded-lg border border-slate-200 bg-white shadow-lg p-3 md:hidden">
            <a href="#home" onClick={scrollToId("home")} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md">Home</a>
            <a href="#services" onClick={scrollToId("services")} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md">Services</a>
            <a href="#about" onClick={scrollToId("about")} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md">About</a>
            <a href="#contact" onClick={scrollToId("contact")} className="block mt-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-center text-slate-700 hover:bg-slate-50">Contact</a>
          </div>
        )}
      </div>
    </motion.header>
  );
}
