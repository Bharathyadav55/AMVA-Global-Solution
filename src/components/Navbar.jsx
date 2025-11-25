// src/components/Navbar.jsx
import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";

export default function Navbar({ theme, setTheme }) {
  // props kept for compatibility (theme currently unused in the new minimalist design)

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="AMVA Logo"
            className="h-9 w-9 rounded-md object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              AMVA Global
            </span>
            <span className="text-xs text-slate-500">
              Solutions Pvt Ltd
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Contact
          </a>

          <a
            href="#contact"
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile placeholder (you can wire it to a drawer if needed) */}
        <div className="md:hidden">
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
