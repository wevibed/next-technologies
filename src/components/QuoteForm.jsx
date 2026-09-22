import { useState } from "react";
import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { site, whatsappLink, emailLink } from "@/config/site";

const serviceOptions = [
  "CCTV",
  "Wi-Fi",
  "Starlink",
  "Networking",
  "IT Infrastructure",
  "IT Support",
  "Other",
];

const propertyOptions = [
  "Home / Residential",
  "Office / Business",
  "Commercial building",
  "Retail",
  "Industrial / Warehouse",
  "Institution / Organisation",
  "Other",
];

function fieldError(value, rules) {
  for (const r of rules) if (!r.test(value)) return r.message;
  return "";
}

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    property: "",
    location: "",
    message: "",
    companyUrl: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error | unconfigured

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter a phone number.";
    else if (!/^[+\d][\d\s()-]{5,}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.service) e.service = "Select a service.";
    if (!form.message.trim()) e.message = "Tell us briefly what you need.";
    return e;
  };

  const buildMessage = () =>
    `New enquiry — NEXT IT Technologies%0A%0A` +
    `Name: ${form.name}%0A` +
    `Company: ${form.company || "-"}%0A` +
    `Phone: ${form.phone}%0A` +
    `Email: ${form.email || "-"}%0A` +
    `Service: ${form.service}%0A` +
    `Property: ${form.property || "-"}%0A` +
    `Location: ${form.location || "-"}%0A%0A` +
    `Requirement: ${form.message}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.companyUrl) return; // honeypot tripped
    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length) return;

    // INTEGRATION POINT: when site.formEndpoint is set, POST the form here
    // (Formspree, Cloudflare Worker, email API, etc.) and show real success/error.
    if (site.formEndpoint) {
      setStatus("submitting");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (res.ok) setStatus("success");
        else setStatus("error");
      } catch {
        setStatus("error");
      }
    } else {
      setStatus("unconfigured");
    }
  };

  const inputCls =
    "w-full bg-transparent hairline px-4 py-3 text-sm text-brand-white placeholder:text-muted-gray/60 focus:border-electric-blue transition-colors";
  const labelCls = "block label-mono mb-2";
  const errCls = "mt-1.5 text-xs text-electric-blue";

  if (status === "success") {
    return (
      <div className="hairline p-8 text-center bg-graphite">
        <Icon name="check" size={32} className="text-electric-blue mx-auto" />
        <h3 className="mt-4 font-display text-xl text-brand-white">Enquiry received</h3>
        <p className="mt-2 text-sm text-muted-gray">
          Thank you. We'll be in touch shortly to discuss your requirements.
        </p>
        <Button variant="secondary" className="mt-6 text-brand-white" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="companyUrl"
        tabIndex={-1}
        autoComplete="off"
        value={form.companyUrl}
        onChange={set("companyUrl")}
        className="hidden"
        aria-hidden="true"
      />

      {status === "unconfigured" && (
        <div className="hairline p-5 bg-dark-slate border-l-2 border-l-electric-blue">
          <p className="text-sm text-brand-white leading-relaxed">
            This form isn't connected to a backend yet. You can send this enquiry right now via
            WhatsApp or email instead.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button
              variant="whatsapp"
              href={whatsappLink(decodeURIComponent(buildMessage()))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Icon name="whatsapp" size={16} /> Send via WhatsApp
            </Button>
            <Button
              variant="secondary"
              href={emailLink("Website enquiry")}
              className="flex-1 text-brand-white"
            >
              <Icon name="mail" size={16} /> Send via Email
            </Button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="hairline p-4 bg-dark-slate border-l-2 border-l-electric-blue text-sm text-brand-white">
          Something went wrong sending your enquiry. Please try again or contact us directly.
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-name" className={labelCls}>Name *</label>
          <input id="qf-name" name="name" autoComplete="name" required value={form.name} onChange={set("name")} className={inputCls} />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="qf-company" className={labelCls}>Company</label>
          <input id="qf-company" name="company" autoComplete="organization" value={form.company} onChange={set("company")} className={inputCls} />
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelCls}>Phone *</label>
          <input id="qf-phone" name="phone" type="tel" autoComplete="tel" required value={form.phone} onChange={set("phone")} className={inputCls} />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="qf-email" className={labelCls}>Email</label>
          <input id="qf-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set("email")} className={inputCls} />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="qf-service" className={labelCls}>Service Required *</label>
          <select id="qf-service" name="service" required value={form.service} onChange={set("service")} className={inputCls}>
            <option value="">Select…</option>
            {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          {errors.service && <p className={errCls}>{errors.service}</p>}
        </div>
        <div>
          <label htmlFor="qf-property" className={labelCls}>Property / Project Type</label>
          <select id="qf-property" name="property" value={form.property} onChange={set("property")} className={inputCls}>
            <option value="">Select…</option>
            {propertyOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="qf-location" className={labelCls}>Location</label>
        <input id="qf-location" name="location" autoComplete="address-level2" value={form.location} onChange={set("location")} placeholder="e.g. Harare" className={inputCls} />
      </div>

      <div>
        <label htmlFor="qf-message" className={labelCls}>Message *</label>
        <textarea id="qf-message" name="message" required rows={compact ? 4 : 5} value={form.message} onChange={set("message")} placeholder="Briefly describe what you need…" className={`${inputCls} resize-y`} />
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3.5" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a Quote"}
        <Icon name="arrow" size={18} />
      </Button>
    </form>
  );
}