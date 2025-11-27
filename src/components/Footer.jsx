// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // update path if needed

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Logo + Description */}
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="AMVA Logo"
              className="h-10 w-10 rounded-md object-contain"
            />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                AMVA Global Solution Pvt Ltd
              </p>
              <p className="text-xs text-slate-500">
                Offshore operations for software, IT & GCC organizations.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              to="/"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 hover:text-sky-600 transition"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-6 h-px bg-slate-200"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} AMVA Global Solution Pvt Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-sky-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-600 transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
