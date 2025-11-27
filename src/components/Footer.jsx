// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 px-4 py-4 md:flex-row md:justify-between">
        {/* Left: Logo + name */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="AMVA Logo"
            className="h-8 w-8 rounded-md object-contain"
          />
          <span className="text-sm font-semibold text-slate-900">
            AMVA Global Solution Pvt Ltd
          </span>
        </div>

        {/* Center: simple nav */}
        <nav className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
          <Link to="/" className="hover:text-sky-600 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-sky-600 transition">
            Services
          </Link>
          <Link to="/about" className="hover:text-sky-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-sky-600 transition">
            Contact
          </Link>
        </nav>

        {/* Right: copyright */}
        <p className="text-[11px] text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} AMVA Global Solution Pvt Ltd.
        </p>
      </div>
    </footer>
  );
}
