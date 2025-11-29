// src/components/FloatingWhatsApp.jsx
import React from "react";

export default function FloatingWhatsApp({
  phone = "+919866253469", // <- replace with your WhatsApp number in international format
  message = "Hello!%20I%20would%20like%20to%20know%20more%20about%20AMVA%20Global%20Solutions",
}) {
  const href = `https://wa.me/${phone.replace(/\D/g, "")}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .01 5.373.01 12c0 2.11.55 4.17 1.6 5.98L0 24l6.29-1.66A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.5c-1.56 0-3.06-.4-4.36-1.16l-.31-.18-3.73.99.99-3.63-.2-.32A9.5 9.5 0 012.5 12 9.5 9.5 0 0112 2.5c5.24 0 9.5 4.26 9.5 9.5S17.24 21.5 12 21.5z" />
        <path d="M17.2 14.1c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.15-.17.2-.34.22-.63.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.16.2-.27.3-.45.1-.18.05-.34-.02-.49-.07-.16-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.49.07-.75.34-.27.27-1.03 1.01-1.03 2.47 0 1.45 1.05 2.85 1.2 3.05.15.2 2.08 3.23 5.04 4.53 2.96 1.3 2.96.87 3.49.82.53-.04 1.72-.7 1.97-1.37.25-.67.25-1.25.17-1.37-.08-.12-.3-.19-.6-.34z" />
      </svg>
    </a>
  );
}
