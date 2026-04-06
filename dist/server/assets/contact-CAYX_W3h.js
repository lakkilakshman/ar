import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Header } from "./Header-DPzzOeh0.js";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-DA5bQKbQ.js";
import "./products-NF-CuOXn.js";
const WA_URL = "https://wa.me/919421612355";
function ContactPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { style: {
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        padding: "3.5rem 0"
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "section-label", children: "Get in Touch" }),
        /* @__PURE__ */ jsx("h1", { className: "section-title", children: "Contact Us" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "var(--text-muted)",
          maxWidth: "520px",
          lineHeight: 1.75
        }, children: "Have a bulk order inquiry? We'd love to hear from you. Reach out via WhatsApp, phone, or email and we'll respond promptly." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { style: {
        background: "var(--bg)",
        padding: "5rem 0"
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "card p-6 flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { style: {
              color: "var(--accent)",
              flexShrink: 0,
              marginTop: "2px"
            }, children: /* @__PURE__ */ jsx(Phone, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "section-label", style: {
                fontSize: "0.65rem"
              }, children: "Call Us" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
                /* @__PURE__ */ jsx("a", { href: "tel:9421612355", style: {
                  color: "var(--text)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em"
                }, children: "94216 12355" }),
                /* @__PURE__ */ jsx("a", { href: "tel:9284669514", style: {
                  color: "var(--text)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em"
                }, children: "92846 69514" }),
                /* @__PURE__ */ jsx("a", { href: "tel:7558686698", style: {
                  color: "var(--text)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  letterSpacing: "0.05em"
                }, children: "75586 86698" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card p-6 flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { style: {
              color: "var(--accent)",
              flexShrink: 0,
              marginTop: "2px"
            }, children: /* @__PURE__ */ jsx(Mail, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "section-label", style: {
                fontSize: "0.65rem"
              }, children: "Email" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:lakkilakshman12@gmail.com", style: {
                color: "var(--text)",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none"
              }, children: "lakkilakshman12@gmail.com" }),
              /* @__PURE__ */ jsx("p", { style: {
                color: "var(--text-muted)",
                fontSize: "0.875rem",
                marginTop: "0.25rem"
              }, children: "Send us your requirements anytime." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card p-6 flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { style: {
              color: "var(--accent)",
              flexShrink: 0,
              marginTop: "2px"
            }, children: /* @__PURE__ */ jsx(MapPin, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "section-label", style: {
                fontSize: "0.65rem"
              }, children: "Address" }),
              /* @__PURE__ */ jsx("p", { style: {
                color: "var(--text)",
                fontWeight: 600,
                fontSize: "1rem",
                margin: "0 0 0.25rem"
              }, children: "Tukum, Chandrapur" }),
              /* @__PURE__ */ jsx("p", { style: {
                color: "var(--text-muted)",
                fontSize: "0.875rem"
              }, children: "Maharashtra, India" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "card p-6 flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { style: {
              color: "var(--accent)",
              flexShrink: 0,
              marginTop: "2px"
            }, children: /* @__PURE__ */ jsx(Clock, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "section-label", style: {
                fontSize: "0.65rem"
              }, children: "Business Hours" }),
              /* @__PURE__ */ jsx("p", { style: {
                color: "var(--text)",
                fontWeight: 600,
                fontSize: "1rem",
                margin: "0 0 0.25rem"
              }, children: "Mon – Sat: 9:00 AM – 7:00 PM" }),
              /* @__PURE__ */ jsx("p", { style: {
                color: "var(--text-muted)",
                fontSize: "0.875rem"
              }, children: "Sunday: By appointment only" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 p-8 rounded-lg text-center", style: {
          background: "var(--surface)",
          border: "1px solid var(--border)"
        }, children: [
          /* @__PURE__ */ jsx("h2", { style: {
            color: "var(--text)",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "2rem",
            letterSpacing: "0.05em",
            margin: "0 0 0.75rem"
          }, children: "Fastest Response on WhatsApp" }),
          /* @__PURE__ */ jsx("p", { style: {
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
            lineHeight: 1.7
          }, children: "For quickest responses, send your bulk order requirements directly on WhatsApp. Share your quantity, size breakdown, and design files for an instant quote." }),
          /* @__PURE__ */ jsxs("a", { href: WA_URL, target: "_blank", rel: "noopener noreferrer", className: "btn-primary", style: {
            fontSize: "1rem",
            padding: "1rem 2.5rem"
          }, children: [
            /* @__PURE__ */ jsx(MessageCircle, { size: 20 }),
            "Chat on WhatsApp — 94216 12355"
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  ContactPage as component
};
