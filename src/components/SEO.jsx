import { useEffect } from "react";
import { site } from "@/config/site";

// Per-page SEO. Updates document title and meta tags on route change.
// Pass unique title + description per page. JSON-LD optional via `jsonLd`.
function setMeta(name, content, attr = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${site.name}`
      : `${site.name} — ${site.tagline}`;
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${site.url}${path}`, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setLink("canonical", `${site.url}${path}`);

    let script = document.getElementById("page-jsonld");
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.id = "page-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, jsonLd]);

  return null;
}