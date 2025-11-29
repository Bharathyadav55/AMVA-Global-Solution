// src/components/Footer.jsx
import React from "react";
import Logo from "../assets/logo.png";

const social = [
  { name: "Facebook", href: "https://facebook.com", svg: (props) => (
    <svg {...props} viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.04 5.66 21.2 10.44 21.93v-6.55H8.08v-2.9h2.36V9.8c0-2.33 1.38-3.62 3.5-3.62.99 0 2.03.18 2.03.18v2.24h-1.15c-1.13 0-1.48.7-1.48 1.42v1.7h2.51l-.4 2.9h-2.11v6.55C18.34 21.2 22 17.04 22 12.07z" /></svg>
  )},
  { name: "YouTube", href: "https://youtube.com", svg: (props) => (
    <svg {...props} viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2s-.2-1.6-.82-2.3c-.78-.82-1.66-.83-2.06-.88C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.62.5c-.4.05-1.28.06-2.06.88C.7 4.6.5 6.2.5 6.2S.2 8 .2 9.8v0C.2 11.6.5 13.4.5 13.4s.2 1.6.82 2.3c.78.82 1.8.79 2.26.87 1.64.2 6.95.5 6.95.5s4.9 0 8.62-.5c.4-.05 1.28-.06 2.06-.88.62-.68.82-2.3.82-2.3s.3-1.8.3-3.6v0c0-1.8-.3-3.6-.3-3.6zM9.75 14.6V7.4L15.8 11l-6.05 3.6z" /></svg>
  )},
  { name: "Instagram", href: "https://instagram.com", svg: (props) => (
    <svg {...props} viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm6.5-2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9.4a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2z" /></svg>
  )},
  { name: "X", href: "https://twitter.com", svg: (props) => (
    <svg {...props} viewBox="0 0 24 24" aria-hidden="true"><path d="M22 5.92c-.69.31-1.44.52-2.22.61.8-.48 1.4-1.24 1.68-2.15-.75.44-1.58.76-2.45.93A4.07 4.07 0 0 0 12.5 8c0 .32.04.64.1.94-3.38-.17-6.38-1.8-8.38-4.28-.35.6-.55 1.3-.55 2.04 0 1.4.71 2.64 1.8 3.37-.66-.02-1.28-.2-1.82-.5v.05c0 1.95 1.39 3.58 3.22 3.96-.34.1-.7.15-1.07.15-.26 0-.51-.03-.75-.07.51 1.6 2 2.77 3.77 2.8A8.2 8.2 0 0 1 2 19.54 11.58 11.58 0 0 0 8.29 22c7.55 0 11.68-6.25 11.68-11.66 0-.18-.01-.35-.02-.53.8-.58 1.5-1.3 2.04-2.13z" /></svg>
  )},
  { name: "LinkedIn", href: "https://linkedin.com", svg: (props) => (
    <svg {...props} viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h3.96V21H3V8.98zM9.5 8.98h3.8v1.63h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12V21h-3.96v-5.08c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.69V21H9.5V8.98z" /></svg>
  )},
];

export default function Footer() {
  return (
    <footer className="bg-[#0E254A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: Logo / Name */}
          <div>
            <div className="flex items-center gap-3">
              <img src={Logo} alt="AMVA Logo" className="h-10 w-10 rounded-md object-contain" />
              <div>
                <h2 className="text-lg font-bold tracking-wide">AMVA GLOBAL</h2>
                <p className="text-sm opacity-80">Solutions Pvt Ltd</p>
              </div>
            </div>
          </div>

          {/* Middle: Social icons */}
          <div className="flex flex-col items-start md:items-center">
            <div className="flex items-center gap-4">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  className="rounded-full p-2 hover:bg-white/10 transition"
                >
                  {s.svg({ className: "h-5 w-5 fill-current text-white" })}
                </a>
              ))}
            </div>

            <div className="mt-4 text-left md:text-center">
              <h3 className="text-sm font-semibold">Connect</h3>
              <a href="mailto:info@amva.com" className="text-sm opacity-80 block mt-1">
                info@amva.com
              </a>
            </div>
          </div>

          {/* Right: copyright */}
          <div className="text-sm opacity-60 md:text-right">
            © {new Date().getFullYear()} AMVA Global Solution Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
