"use client";

import { useState } from "react";
import Icon from "./Icon";
import { services } from "@/lib/content";
import { site, whatsappUrl } from "@/lib/site";

/**
 * The enquiry form hands the message straight to WhatsApp instead of posting to
 * a server. It needs no database, no API key and no email provider, it works on
 * a static Vercel deployment, and the shop gets the enquiry where it already
 * reads messages all day.
 */
export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].title);
  const [details, setDetails] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (name.trim().length < 2) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 10) return setError("Please enter a valid 10-digit mobile number.");
    setError(null);

    const message = [
      `Hello ${site.name}, I would like a quote.`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Work needed: ${service}`,
      details.trim() ? `Details: ${details.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-steel-950/70 px-4 py-3.5 text-sm text-white placeholder:text-steel-500 transition focus:border-ember-500/60 focus:outline-none focus:ring-2 focus:ring-ember-500/25";
  const label = "mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-steel-400";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className={label}>
            Your name
          </label>
          <input
            id="qf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rajesh Sharma"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="qf-phone" className={label}>
            Mobile number
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="10-digit mobile"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="qf-service" className={label}>
          Work needed
        </label>
        <select
          id="qf-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={`${field} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23848e9f' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-steel-900">
              {s.title}
            </option>
          ))}
          <option value="Other fabrication work" className="bg-steel-900">
            Other fabrication work
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="qf-details" className={label}>
          Details <span className="font-medium normal-case tracking-normal text-steel-500">(optional)</span>
        </label>
        <textarea
          id="qf-details"
          name="details"
          rows={4}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Size, quantity, area of Jaipur, when you need it…"
          className={`${field} resize-y`}
        />
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-b from-emerald-400 to-emerald-600 px-6 py-4 text-base font-bold text-steel-950 shadow-lg shadow-emerald-700/25 transition hover:brightness-110 active:brightness-95"
      >
        <Icon name="whatsapp" className="size-5" strokeWidth={1.9} />
        Send enquiry on WhatsApp
      </button>

      <p className="text-center text-xs leading-relaxed text-steel-500">
        Opens WhatsApp with your details filled in. We usually reply within an hour during
        working hours.
      </p>
    </form>
  );
}
