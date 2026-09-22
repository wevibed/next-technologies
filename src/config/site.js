// Single source of truth for all business details.
// Values marked PLACEHOLDER must be supplied by the business owner.
// Until supplied, contact links degrade gracefully (fall back to /contact)
// and the related display lines are hidden — no fake numbers are shown.

export const site = {
  name: "NEXT IT Technologies",
  shortName: "NEXT IT",
  tagline: "ENGINEERING TOMORROW",
  // PLACEHOLDER: replace with real domain once live
  url: "https://www.nextittech.co.zw",

  // Logo file slot. Supply a transparent SVG/PNG path here.
  // Until supplied, the header/footer show a clean text wordmark.
  // MISSING FILE: supply a transparent logo (SVG preferred) at the path below.
  logoUrl: "",

  contact: {
    // Real phone — same number used for tel: links and WhatsApp.
    phoneDisplay: "+263 77 101 2457",
    phoneTel: "+263771012457",
    phoneReady: true,

    // WhatsApp number in international format, digits only (no + or spaces).
    whatsapp: "263771012457",
    whatsappReady: true,

    // PLACEHOLDER: real email. Empty until supplied (do not show a fake address).
    email: "",
    emailReady: false,

    // PLACEHOLDER: real physical address.
    addressLines: [],
    addressReady: false,
  },

  social: {
    // PLACEHOLDER: real profile URLs
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // Optional form submission endpoint (Formspree, Cloudflare Worker, email API,
  // etc.). Set VITE_FORM_ENDPOINT in your environment (e.g. Cloudflare Pages
  // project settings) to enable it — see .env.example. Empty until supplied;
  // the quote form falls back to WhatsApp/email links until then.
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || "",

  defaultWhatsAppMessage:
    "Hi NEXT IT Technologies, I'd like to enquire about your technology infrastructure services.",
};

export function whatsappLink(message = site.defaultWhatsAppMessage) {
  if (!site.contact.whatsappReady) return "/contact";
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.contact.whatsapp}?text=${text}`;
}

export function telLink() {
  if (!site.contact.phoneReady) return "/contact";
  return `tel:${site.contact.phoneTel}`;
}

export function emailLink(subject = "Service enquiry") {
  if (!site.contact.emailReady) return "/contact";
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
}