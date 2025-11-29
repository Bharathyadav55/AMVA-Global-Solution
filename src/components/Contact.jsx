// src/components/Contact.jsx
import React, { useState } from "react";

const initial = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  function validate(values) {
    const errs = {};
    if (!values.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!values.email.trim()) errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errs.email = "Enter a valid email address.";
    if (!values.message.trim()) errs.message = "Please tell us about your plans.";
    return errs;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // clear field error while typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      // focus first errored field for accessibility
      const first = Object.keys(errs)[0];
      const el = document.getElementById(first);
      if (el) el.focus();
      return;
    }

    // Simulate submit (replace with real API call)
    try {
      setSubmitting(true);
      await new Promise((res) => setTimeout(res, 700)); // fake network
      setSuccess("Thanks — your enquiry has been submitted. We will get back to you shortly.");
      setForm(initial);
      setErrors({});
    } catch (err) {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-6 md:py-10">
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
            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2" noValidate>
              {/* Full name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="fullName" className="text-xs font-medium text-slate-700">Full name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className={`rounded-lg border px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 ${errors.fullName ? "border-rose-500 bg-rose-50" : "border-slate-200 bg-slate-50"}`}
                  placeholder="Your full name"
                />
                {errors.fullName && <div id="fullName-error" className="text-rose-600 text-xs mt-1">{errors.fullName}</div>}
              </div>

              {/* Work email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs font-medium text-slate-700">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`rounded-lg border px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 ${errors.email ? "border-rose-500 bg-rose-50" : "border-slate-200 bg-slate-50"}`}
                  placeholder="you@company.com"
                />
                {errors.email && <div id="email-error" className="text-rose-600 text-xs mt-1">{errors.email}</div>}
              </div>

              {/* Company (optional) */}
              <div className="flex flex-col gap-1">
                <label htmlFor="company" className="text-xs font-medium text-slate-700">
                  Company <span className="text-slate-400 text-[11px]">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="Company name"
                />
              </div>

              {/* Phone (optional) */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-xs font-medium text-slate-700">
                  Phone <span className="text-slate-400 text-[11px]">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                  placeholder="+91 12345 67890"
                />
              </div>

              {/* Interested service */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label htmlFor="service" className="text-xs font-medium text-slate-700">Interested service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500"
                >
                  <option value="">Select a service (optional)</option>
                  <option>Offshore team setup</option>
                  <option>Managed workspace</option>
                  <option>HR & compliance</option>
                  <option>End-to-end GCC build</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label htmlFor="message" className="text-xs font-medium text-slate-700">Tell us about your plans</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`rounded-lg border px-3 py-2 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-1 focus:ring-sky-500 ${errors.message ? "border-rose-500 bg-rose-50" : "border-slate-200 bg-slate-50"}`}
                  placeholder="Share your timelines, locations and any specific requirements."
                />
                {errors.message && <div id="message-error" className="text-rose-600 text-xs mt-1">{errors.message}</div>}
              </div>

              {/* Submit + messages */}
              <div className="md:col-span-2 flex flex-col items-end gap-3">
                {errors.submit && <div className="text-rose-600 text-sm">{errors.submit}</div>}
                {success && <div className="text-emerald-600 text-sm" role="status" aria-live="polite">{success}</div>}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`inline-flex items-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${submitting ? "opacity-70 cursor-wait" : ""}`}
                >
                  {submitting ? "Submitting..." : "Submit enquiry"}
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
