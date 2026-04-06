import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { H as Header } from "./Header-DPzzOeh0.js";
import { Lock, EyeOff, Eye, ShieldCheck } from "lucide-react";
import "@tanstack/react-router";
import "./router-DA5bQKbQ.js";
import "./products-NF-CuOXn.js";
const RATES_PASSWORD = "arvesta2024";
const RATE_TABLE = [{
  product: "Polo Plain — XS",
  category: "Polo",
  size: "XS",
  rate: "—"
}, {
  product: "Polo Plain — S",
  category: "Polo",
  size: "S",
  rate: "—"
}, {
  product: "Polo Plain — M",
  category: "Polo",
  size: "M",
  rate: "—"
}, {
  product: "Polo Plain — L",
  category: "Polo",
  size: "L",
  rate: "—"
}, {
  product: "Polo Plain — XL",
  category: "Polo",
  size: "XL",
  rate: "—"
}, {
  product: "Polo Plain — XXL",
  category: "Polo",
  size: "XXL",
  rate: "—"
}, {
  product: "Polo Plain — XXXL",
  category: "Polo",
  size: "XXXL",
  rate: "—"
}, {
  product: "Polo Custom — XS",
  category: "Polo Custom",
  size: "XS",
  rate: "—"
}, {
  product: "Polo Custom — S",
  category: "Polo Custom",
  size: "S",
  rate: "—"
}, {
  product: "Polo Custom — M",
  category: "Polo Custom",
  size: "M",
  rate: "—"
}, {
  product: "Polo Custom — L",
  category: "Polo Custom",
  size: "L",
  rate: "—"
}, {
  product: "Polo Custom — XL",
  category: "Polo Custom",
  size: "XL",
  rate: "—"
}, {
  product: "Polo Custom — XXL",
  category: "Polo Custom",
  size: "XXL",
  rate: "—"
}, {
  product: "Polo Custom — XXXL",
  category: "Polo Custom",
  size: "XXXL",
  rate: "—"
}, {
  product: "Round Neck Plain — XS",
  category: "Round Neck",
  size: "XS",
  rate: "—"
}, {
  product: "Round Neck Plain — S",
  category: "Round Neck",
  size: "S",
  rate: "—"
}, {
  product: "Round Neck Plain — M",
  category: "Round Neck",
  size: "M",
  rate: "—"
}, {
  product: "Round Neck Plain — L",
  category: "Round Neck",
  size: "L",
  rate: "—"
}, {
  product: "Round Neck Plain — XL",
  category: "Round Neck",
  size: "XL",
  rate: "—"
}, {
  product: "Round Neck Plain — XXL",
  category: "Round Neck",
  size: "XXL",
  rate: "—"
}, {
  product: "Round Neck Plain — XXXL",
  category: "Round Neck",
  size: "XXXL",
  rate: "—"
}, {
  product: "Round Neck Custom — XS",
  category: "Round Neck Custom",
  size: "XS",
  rate: "—"
}, {
  product: "Round Neck Custom — S",
  category: "Round Neck Custom",
  size: "S",
  rate: "—"
}, {
  product: "Round Neck Custom — M",
  category: "Round Neck Custom",
  size: "M",
  rate: "—"
}, {
  product: "Round Neck Custom — L",
  category: "Round Neck Custom",
  size: "L",
  rate: "—"
}, {
  product: "Round Neck Custom — XL",
  category: "Round Neck Custom",
  size: "XL",
  rate: "—"
}, {
  product: "Round Neck Custom — XXL",
  category: "Round Neck Custom",
  size: "XXL",
  rate: "—"
}, {
  product: "Round Neck Custom — XXXL",
  category: "Round Neck Custom",
  size: "XXXL",
  rate: "—"
}];
function RatesPage() {
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const handleUnlock = (e) => {
    e.preventDefault();
    if (password === RATES_PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };
  const categories = [...new Set(RATE_TABLE.map((r) => r.category))];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { style: {
      background: "var(--bg)",
      minHeight: "80vh",
      padding: "4rem 0"
    }, children: !unlocked ? /* @__PURE__ */ jsx("div", { className: "max-w-sm mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "card p-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { style: {
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "rgba(196,30,58,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 1.5rem"
      }, children: /* @__PURE__ */ jsx(Lock, { size: 28, style: {
        color: "var(--accent)"
      } }) }),
      /* @__PURE__ */ jsx("h1", { style: {
        color: "var(--text)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "2rem",
        letterSpacing: "0.05em",
        margin: "0 0 0.5rem"
      }, children: "Private Section" }),
      /* @__PURE__ */ jsx("p", { style: {
        color: "var(--text-muted)",
        fontSize: "0.9rem",
        marginBottom: "2rem",
        lineHeight: 1.65
      }, children: "This section contains the rate chart and is for internal use only. Enter the password to access." }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleUnlock, style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          position: "relative"
        }, children: [
          /* @__PURE__ */ jsx("input", { className: "form-input", type: showPw ? "text" : "password", placeholder: "Enter password", value: password, onChange: (e) => setPassword(e.target.value), style: {
            paddingRight: "2.75rem"
          } }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setShowPw((v) => !v), style: {
            position: "absolute",
            right: "0.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)"
          }, children: showPw ? /* @__PURE__ */ jsx(EyeOff, { size: 16 }) : /* @__PURE__ */ jsx(Eye, { size: 16 }) })
        ] }),
        error && /* @__PURE__ */ jsx("p", { style: {
          color: "#e53e3e",
          fontSize: "0.85rem",
          margin: 0
        }, children: error }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-primary", style: {
          justifyContent: "center"
        }, children: [
          /* @__PURE__ */ jsx(Lock, { size: 15 }),
          " Unlock"
        ] })
      ] })
    ] }) }) : /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { size: 28, style: {
          color: "var(--accent)"
        } }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "section-label", style: {
            marginBottom: 0
          }, children: "Private" }),
          /* @__PURE__ */ jsx("h1", { style: {
            color: "var(--text)",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "2.5rem",
            letterSpacing: "0.05em",
            margin: 0,
            lineHeight: 1
          }, children: "Rate Chart" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { style: {
        color: "var(--text-muted)",
        marginBottom: "2rem",
        fontSize: "0.875rem",
        lineHeight: 1.6
      }, children: 'Internal pricing reference. Rates marked "—" are to be filled in. Update this file with current pricing as needed.' }),
      categories.map((cat) => /* @__PURE__ */ jsxs("div", { className: "card overflow-hidden mb-6", children: [
        /* @__PURE__ */ jsx("div", { style: {
          background: "var(--accent)",
          padding: "0.75rem 1.25rem"
        }, children: /* @__PURE__ */ jsx("h2", { style: {
          color: "white",
          fontWeight: 700,
          fontSize: "0.875rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          margin: 0
        }, children: cat }) }),
        /* @__PURE__ */ jsx("div", { style: {
          overflowX: "auto"
        }, children: /* @__PURE__ */ jsxs("table", { style: {
          width: "100%",
          borderCollapse: "collapse"
        }, children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { style: {
            background: "var(--surface)"
          }, children: ["Size", "Rate per piece (₹)", "Bulk 50+", "Bulk 100+", "Bulk 500+"].map((h) => /* @__PURE__ */ jsx("th", { style: {
            padding: "0.625rem 1rem",
            textAlign: "left",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            borderBottom: "1px solid var(--border)"
          }, children: h }, h)) }) }),
          /* @__PURE__ */ jsx("tbody", { children: RATE_TABLE.filter((r) => r.category === cat).map((row, i) => /* @__PURE__ */ jsxs("tr", { style: {
            background: i % 2 === 0 ? "transparent" : "var(--surface)"
          }, children: [
            /* @__PURE__ */ jsx("td", { style: {
              padding: "0.625rem 1rem",
              fontWeight: 700,
              color: "var(--text)",
              fontSize: "0.9rem",
              borderBottom: "1px solid var(--border)"
            }, children: row.size }),
            /* @__PURE__ */ jsx("td", { style: {
              padding: "0.625rem 1rem",
              color: "var(--accent)",
              fontWeight: 600,
              borderBottom: "1px solid var(--border)"
            }, children: row.rate }),
            /* @__PURE__ */ jsx("td", { style: {
              padding: "0.625rem 1rem",
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border)"
            }, children: "—" }),
            /* @__PURE__ */ jsx("td", { style: {
              padding: "0.625rem 1rem",
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border)"
            }, children: "—" }),
            /* @__PURE__ */ jsx("td", { style: {
              padding: "0.625rem 1rem",
              color: "var(--text-muted)",
              borderBottom: "1px solid var(--border)"
            }, children: "—" })
          ] }, row.size)) })
        ] }) })
      ] }, cat)),
      /* @__PURE__ */ jsx("p", { style: {
        color: "var(--text-muted)",
        fontSize: "0.8rem",
        textAlign: "center",
        marginTop: "2rem"
      }, children: "Prices are subject to change. Contact management to update this rate chart." })
    ] }) })
  ] });
}
export {
  RatesPage as component
};
