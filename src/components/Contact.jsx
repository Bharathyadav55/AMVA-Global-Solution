// src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    if (!values.fullName.trim())
      errs.fullName = "Please enter your full name.";
    if (!values.email.trim())
      errs.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errs.email = "Enter a valid email address.";
    if (!values.message.trim())
      errs.message = "Please tell us about your plans.";
    return errs;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      setSubmitting(true);

      await emailjs.send(
        "service_gn8vefm",   // 🔥 Replace with your Service ID
        "template_hjhg79r",  // 🔥 Replace with your Template ID
        {
          fullName: form.fullName,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        "VeGfeRnhJlVaOFo9c"    // 🔥 Replace with your Public Key
      );

      setSuccess(
        "Thanks — your enquiry has been submitted. We will get back to you shortly."
      );
      setForm(initial);
      setErrors({});
    } catch (error) {
      console.error(error);
      setErrors({
        submit: "Something went wrong. Please try again later.",
      });
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
              Share a few details and we&apos;ll connect you with a consultant who understands your industry and scale.
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-white/80 border border-slate-100 px-4 py-4 md:px-6 md:py-6">
            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2" noValidate>

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">Full name</label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <div className="text-rose-600 text-xs">{errors.fullName}</div>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">Work email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <div className="text-rose-600 text-xs">{errors.email}</div>
                )}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">Company</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="Company name"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-700">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="+91 12345 67890"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-medium text-slate-700">Interested service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
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
                <label className="text-xs font-medium text-slate-700">Tell us about your plans</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                  placeholder="Share your timelines and requirements."
                />
                {errors.message && (
                  <div className="text-rose-600 text-xs">{errors.message}</div>
                )}
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col items-end gap-3">
                {errors.submit && (
                  <div className="text-rose-600 text-sm">{errors.submit}</div>
                )}
                {success && (
                  <div className="text-emerald-600 text-sm">{success}</div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                >
                  {submitting ? "Submitting..." : "Submit enquiry"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}