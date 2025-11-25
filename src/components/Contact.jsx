// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.jpg";

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

  const services = [
    "Remote Hiring & Bulk Recruitment",
    "GCC Support Services",
    "Dedicated Talent Outsourcing",
    "Workspace & Incubation",
    "HR & Payroll Management",
    "IT Infrastructure",
    "EOR Services",
    "Project Outsourcing",
    "Training & L&D",
    "Consulting & Setup Advisory",
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter an email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email.";
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
      setErrors({
        submit: err.message || "Submission failed. Try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            Contact
          </h2>
          <p className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
            Let&apos;s talk about your plans for India
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Share a few details and we&apos;ll connect you with a consultant who
            understands your industry, operating model and scale.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Info panel */}
            <div className="flex flex-col gap-6 border-b border-slate-200 bg-slate-50 p-6 md:border-b-0 md:border-r">
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="AMVA logo"
                  className="h-10 w-10 rounded-md object-contain"
                />
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    AMVA Global Solution Pvt Ltd
                  </div>
                  <p className="text-xs text-slate-500">
                    Offshore operations for software, IT and GCC organizations.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Head office
                </h4>
                <p className="mt-1 text-sm text-slate-700">
                  AMVA Global Solution Pvt Ltd
                  <br />
                  India &mdash; (address)
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Email
                </h4>
                <a
                  className="mt-1 inline-block text-sm text-sky-700 hover:underline"
                  href="mailto:hello@amva.com"
                >
                  hello@amva.com
                </a>
              </div>

              <div className="mt-auto">
                <p className="text-xs text-slate-500">
                  Typical response time: within 1&ndash;2 business days. Your
                  details are used only to respond to this enquiry.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-6 md:p-7">
              {success ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-xl">
                    ✓
                  </div>
                  <h4 className="text-lg font-semibold text-slate-900">
                    Thank you. We&apos;ve received your message.
                  </h4>
                  <p className="max-w-md text-center text-sm text-slate-600">
                    A member of our team will reach out with next steps and
                    available slots to discuss your requirements.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {errors.submit && (
                    <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
                      {errors.submit}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="flex flex-col">
                      <span className="text-xs font-medium text-slate-700">
                        Full name
                      </span>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange("name")}
                        className={`mt-1 rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 ${
                          errors.name
                            ? "border-red-400"
                            : "border-slate-200"
                        }`}
                        placeholder="Your full name"
                        required
                      />
                      {errors.name && (
                        <span className="mt-1 text-xs text-red-600">
                          {errors.name}
                        </span>
                      )}
                    </label>

                    <label className="flex flex-col">
                      <span className="text-xs font-medium text-slate-700">
                        Work email
                      </span>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange("email")}
                        className={`mt-1 rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 ${
                          errors.email
                            ? "border-red-400"
                            : "border-slate-200"
                        }`}
                        placeholder="you@company.com"
                        required
                      />
                      {errors.email && (
                        <span className="mt-1 text-xs text-red-600">
                          {errors.email}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <label className="flex flex-col">
                      <span className="text-xs font-medium text-slate-700">
                        Company (optional)
                      </span>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange("company")}
                        className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="Company name"
                      />
                    </label>

                    <label className="flex flex-col">
                      <span className="text-xs font-medium text-slate-700">
                        Phone (optional)
                      </span>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="+91 12345 67890"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col">
                    <span className="text-xs font-medium text-slate-700">
                      Interested service
                    </span>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange("service")}
                      className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="">
                        Select a service (optional)
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col">
                    <span className="text-xs font-medium text-slate-700">
                      How can we help?
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange("message")}
                      className={`mt-1 h-28 resize-none rounded-lg border px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.message
                          ? "border-red-400"
                          : "border-slate-200"
                      }`}
                      placeholder="Share a brief overview of your requirements..."
                      required
                    />
                    {errors.message && (
                      <span className="mt-1 text-xs text-red-600">
                        {errors.message}
                      </span>
                    )}
                  </label>

                  <label className="mt-1 flex items-start gap-3">
                    <input
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={handleChange("consent")}
                      className="mt-0.5 h-4 w-4 rounded border-slate-300"
                      required
                    />
                    <span className="text-xs text-slate-600">
                      I agree that AMVA Global may contact me regarding this
                      enquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <div className="text-xs text-red-600">
                      {errors.consent}
                    </div>
                  )}

                  <div className="mt-3 flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Submit enquiry"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          message: "",
                          consent: false,
                        });
                        setErrors({});
                      }}
                      className="text-xs font-medium text-slate-500 hover:text-slate-700"
                    >
                      Clear form
                    </button>
                  </div>

                  <div className="mt-2 text-xs text-slate-400">
                    Your information will not be shared with third parties for
                    marketing purposes.
                  </div>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
