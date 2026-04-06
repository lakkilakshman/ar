import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { u as useTheme } from "./router-DA5bQKbQ.js";
import { Shirt, Sun, Moon, X, Menu } from "lucide-react";
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/order", label: "Order Form" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const { dark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      style: {
        backgroundColor: "var(--header-bg)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
      },
      className: "sticky top-0 z-50",
      children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 no-underline group", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-8 h-8 rounded flex items-center justify-center transition-all duration-200 group-hover:scale-110",
                style: { backgroundColor: "var(--accent)" },
                children: /* @__PURE__ */ jsx(Shirt, { size: 16, color: "white", strokeWidth: 2 })
              }
            ),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "font-bold text-sm tracking-wider uppercase",
                  style: { color: "var(--text)", letterSpacing: "0.12em" },
                  children: "Arvesta"
                }
              ),
              /* @__PURE__ */ jsxs(
                "span",
                {
                  className: "block text-[10px] tracking-[0.2em] uppercase font-medium",
                  style: { color: "var(--text-muted)", marginTop: "-2px" },
                  children: [
                    "Clo",
                    /* @__PURE__ */ jsx("span", { style: { color: "var(--accent)" }, children: "th" }),
                    "ing"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: NAV_LINKS.map(({ to, label }) => /* @__PURE__ */ jsx(
            Link,
            {
              to,
              className: "text-sm font-medium tracking-wide transition-colors duration-200 no-underline",
              style: { color: "var(--text-muted)" },
              activeProps: { style: { color: "var(--accent)" } },
              children: label
            },
            to
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: toggleTheme,
                className: "w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:scale-110",
                style: {
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  cursor: "pointer"
                },
                "aria-label": "Toggle theme",
                children: dark ? /* @__PURE__ */ jsx(Sun, { size: 16 }) : /* @__PURE__ */ jsx(Moon, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/919421612355`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-primary hidden sm:inline-flex text-xs py-2 px-4",
                children: "Get Quote"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setMenuOpen(!menuOpen),
                className: "md:hidden w-9 h-9 rounded flex items-center justify-center",
                style: {
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  cursor: "pointer"
                },
                "aria-label": "Toggle menu",
                children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
              }
            )
          ] })
        ] }) }),
        menuOpen && /* @__PURE__ */ jsx(
          "div",
          {
            className: "md:hidden border-t",
            style: { background: "var(--header-bg)", borderColor: "var(--border)" },
            children: /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1", children: [
              NAV_LINKS.map(({ to, label }) => /* @__PURE__ */ jsx(
                Link,
                {
                  to,
                  onClick: () => setMenuOpen(false),
                  className: "px-3 py-2.5 rounded text-sm font-medium no-underline transition-colors duration-200",
                  style: { color: "var(--text)" },
                  activeProps: { style: { color: "var(--accent)", backgroundColor: "var(--surface)" } },
                  children: label
                },
                to
              )),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "https://wa.me/919421612355",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn-primary mt-2 justify-center",
                  style: { fontSize: "0.875rem" },
                  children: "Get Quote on WhatsApp"
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  Header as H
};
