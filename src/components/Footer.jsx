// src/components/Footer.jsx
import React from "react";
import Logo from "../assets/logo.png";

/* ---------------------------------------------------
   Social icons
--------------------------------------------------- */
const socials = [
  // {
  //   name: "Facebook",
  //   href: "https://facebook.com",
  //   svg: (
  //     <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
  //       <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.04 5.66 21.2 10.44 21.93v-6.55H8.08v-2.9h2.36V9.8c0-2.33 1.38-3.62 3.5-3.62.99 0 2.03.18 2.03.18v2.24h-1.15c-1.13 0-1.48.7-1.48 1.42v1.7h2.51l-.4 2.9h-2.11v6.55C18.34 21.2 22 17.04 22 12.07z" />
  //     </svg>
  //   ),
  // },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/amvaglobal/",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h3.96V21H3V8.98zM9.5 8.98h3.8v1.63h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12V21h-3.96v-5.08c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.69V21H9.5V8.98z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919703304411", // 91 + 9703304411
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .01 5.373.01 12c0 2.11.55 4.17 1.6 5.98L0 24l6.29-1.66A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.56 0-3.06-.4-4.36-1.16l-.31-.18-3.73.99.99-3.63-.2-.32A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5c5.24 0 9.5 4.26 9.5 9.5S17.24 21.5 12 21.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E254A] text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="AMVA Logo"
              className="h-10 w-10 rounded-md object-contain"
            />
            <div>
              <h2 className="text-lg font-bold tracking-wide">AMVA GLOBAL</h2>
              <p className="text-sm opacity-80">Solutions Pvt Ltd</p>
            </div>
          </div>

          {/* Middle: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact</h3>

            <a
              href="mailto:hr@amvaglobal.com"
              className="block text-sm opacity-80 hover:opacity-100 mb-2"
            >
              hr@amvaglobal.com
            </a>

            <p className="text-sm opacity-80">
              📍 AMVA Global Solutions Pvt Ltd<br />
              Vijayawada, Andhra Pradesh<br />
              India
            </p>
          </div>

          {/* Right: Socials + Copyright */}
          <div className="md:text-right">
            <div className="flex md:justify-end gap-4 mb-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  {s.svg}
                </a>
              ))}
            </div>

            <div className="text-sm opacity-60">
              © {new Date().getFullYear()} AMVA Global Solutions Pvt Ltd. <br />
              All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}