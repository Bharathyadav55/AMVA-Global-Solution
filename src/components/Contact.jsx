
// src/components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl rounded-2xl bg-sky-50/80 border border-sky-100 shadow-sm px-4 py-6 md:px-8 md:py-8">
          <div className="mb-4 text-center">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-sky-600 uppercase">
              Contact
            </p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">
              Let&apos;s talk about your plans for India
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
              Share a few details and we&apos;ll connect you with a consultant who understands your
              industry and scale.
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-white/80 border border-slate-100 px-4 py-4 md:px-6 md:py-6">
            {/* FORM START */}
            <form className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">Full name</label>
                <input
                  type="text"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">Work email</label>
                <input
                  type="email"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="you@company.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">
                  Company <span className="text-slate-400 text-[11px]">(optional)</span>
                </label>
                <input
                  type="text"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="Company name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">
                  Phone <span className="text-slate-400 text-[11px]">(optional)</span>
                </label>
                <input
                  type="tel"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="+91 12345 67890"
                />
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-medium text-slate-700">Interested service</label>
                <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500">
                  <option value="">Select a service (optional)</option>
                  <option>Offshore team setup</option>
                  <option>Managed workspace</option>
                  <option>HR & compliance</option>
                  <option>End-to-end GCC build</option>
                </select>
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-medium text-slate-700">Tell us about your plans</label>
                <textarea
                  rows={4}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="Share your timelines, locations and any specific requirements."
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Submit enquiry
                </button>
              </div>
            </form>
            {/* FORM END */}
          </div>
        </div>
      </div>
    </section>
  );
}
