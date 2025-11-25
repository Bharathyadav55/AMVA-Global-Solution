// src/components/Footer.jsx
import React from "react";
import Logo from "../assets/logo.jpg";

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-6">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 md:flex-row md:px-6">
      <div className="flex items-center gap-3">
        <img
          src={Logo}
          className="h-8 w-8 rounded-md object-contain"
          alt="AMVA logo"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-slate-900">
            AMVA Global Solution Pvt Ltd
          </span>
          <span className="text-xs text-slate-500">
            Offshore operations for software, IT & GCC organizations.
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} AMVA Global. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
