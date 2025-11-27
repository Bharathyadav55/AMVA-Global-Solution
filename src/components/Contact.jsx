// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import services from "../data/services";
import Logo from "../assets/logo.png"; // update path if needed

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const serviceNames = services.map((s) => s.name);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter an email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please write a short message.";
    if (!form.consent) e.consent = "Please consent to be contacted.";
    return e;
  };

  const handleChange = (k) => (ev) => {
    const value = k === "consent" ? ev.target.checked : ev.target.value;
    setForm((s) => ({ ...s, [k]: value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors({});
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      const first = Object.keys(e)[0];
      const el = document.querySelector(`[name="${first}"]`);
      if (el) el.focus();
      return;
    }

    setSubmitting(true);
    try {
      // Replace /api/contact with your real endpoint
      const payload = { ...form };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.message || "Failed to submit");

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      console.error(err);
      setErrors({ submit: err.message || "Submission failed. Try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">Contact</h2>
          <p className="mt-2 text-2xl font-semibold text-slate-900">Let's talk about your plans for India</p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">Share a few details and we'll connect you with a consultant who understands your industry and scale.</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          {success ? (
            <div className="flex flex-col items-center gap-4 py-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-xl">✓</div>
              <h4 className="text-lg font-semibold text-slate-900">Thank you. We've received your message.</h4>
              <p className="max-w-md text-center text-sm text-slate-600">A member of our team will reach out with next steps and available slots to discuss your requirements.</p>
              <button onClick={() => setSuccess(false)} className="mt-2 rounded-full border border-slate-200 px-5 py-2 text-sm">Send another enquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2" noValidate>
              {errors.submit && <div className="col-span-full rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{errors.submit}</div>}

              <label className="flex flex-col">
                <span className="text-xs font-medium text-slate-700">Full name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={`mt-1 rounded-lg border px-3 py-2 text-sm ${errors.name ? "border-red-400" : "border-slate-200"}`}
                  placeholder="Your full name"
                  required
                />
                {errors.name && <span className="mt-1 text-xs text-red-600">{errors.name}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-xs font-medium text-slate-700">Work email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={`mt-1 rounded-lg border px-3 py-2 text-sm ${errors.email ? "border-red-400" : "border-slate-200"}`}
                  placeholder="you@company.com"
                  required
                />
                {errors.email && <span className="mt-1 text-xs text-red-600">{errors.email}</span>}
              </label>

              <label className="flex flex-col">
                <span className="text-xs font-medium text-slate-700">Company (optional)</span>
                <input name="company" value={form.company} onChange={handleChange("company")} className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Company name" />
              </label>

              <label className="flex flex-col">
                <span className="text-xs font-medium text-slate-700">Phone (optional)</span>
                <input name="phone" value={form.phone} onChange={handleChange("phone")} className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="+91 12345 67890" />
              </label>

              <label className="col-span-full flex flex-col">
                <span className="text-xs font-medium text-slate-700">Interested service</span>
                <select name="service" value={form.service} onChange={handleChange("service")} className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm">
                  <option value="">Select a service (optional)</option>
                  {serviceNames.map((s) => (<option key={s} value={s}>{s}</option>))}
                </select>
              </label>

              <label className="col-span-full flex flex-col">
                <span className="text-xs font-medium text-slate-700">How can we help?</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`mt-1 h-28 resize-none rounded-lg border px-3 py-2 text-sm ${errors.message ? "border-red-400" : "border-slate-200"}`}
                  placeholder="Share a brief overview..."
                  required
                />
                {errors.message && <span className="mt-1 text-xs text-red-600">{errors.message}</span>}
              </label>

              <label className="col-span-full flex items-start gap-3">
                <input name="consent" type="checkbox" checked={form.consent} onChange={handleChange("consent")} className="mt-0.5 h-4 w-4 rounded border-slate-300" required />
                <span className="text-xs text-slate-600">I agree that AMVA may contact me regarding this enquiry.</span>
              </label>
              {errors.consent && <div className="col-span-full text-xs text-red-600">{errors.consent}</div>}

              <div className="col-span-full mt-2 flex items-center gap-4">
                <button type="submit" disabled={submitting} className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md disabled:opacity-60">
                  {submitting ? "Sending..." : "Submit enquiry"}
                </button>

                <button type="button" onClick={() => { setForm({ name: "", email: "", phone: "", company: "", service: "", message: "", consent: false }); setErrors({}); }} className="text-xs text-slate-500">
                  Clear form
                </button>
              </div>

              <div className="col-span-full text-xs text-slate-400">Your information will not be shared with third parties for marketing purposes.</div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
