import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { p as products } from "./products-NF-CuOXn.js";
const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {
  }
});
const useTheme = () => useContext(ThemeContext);
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arvesta Clothing — Bulk Custom T-Shirts for Businesses & Events" },
      { name: "description", content: "Arvesta Clothing offers premium bulk custom T-shirts for corporates, restaurants, gyms and events. Polo and round neck options with full customization. Based in Chandrapur, Maharashtra." },
      { name: "keywords", content: "bulk t-shirts, custom t-shirts, polo shirts, corporate uniforms, Chandrapur, Maharashtra, Arvesta Clothing, bulk order" },
      { property: "og:title", content: "Arvesta Clothing — Bulk Custom T-Shirts" },
      { property: "og:description", content: "Premium bulk custom T-shirts for businesses and events. Polo & Round Neck options." },
      { property: "og:type", content: "website" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(AppShell, { children }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function AppShell({ children }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return /* @__PURE__ */ jsxs(ThemeContext.Provider, { value: { dark, toggleTheme }, children: [
    children,
    /* @__PURE__ */ jsx(WhatsAppFAB, {})
  ] });
}
function WhatsAppFAB() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/919421612355",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "whatsapp-fab pulse-glow",
      "aria-label": "Chat with Arvesta Clothing on WhatsApp",
      children: /* @__PURE__ */ jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "white", children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) })
    }
  );
}
const $$splitComponentImporter$7 = () => import("./rates-D0cjJAEt.js");
const Route$7 = createFileRoute("/rates")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./order-BvE_uwCH.js");
const Route$6 = createFileRoute("/order")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-CAYX_W3h.js");
const Route$5 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-BT5dg6kW.js");
const Route$4 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-D3-m8aGt.js");
const Route$3 = createFileRoute("/products/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./_productId-YJWFadL5.js");
const Route$2 = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((product2) => product2.id === +params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
});
const $$splitComponentImporter$1 = () => import("./success-CIMuB9Se.js");
const Route$1 = createFileRoute("/checkout/success")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./cancel-Dq7g7TXn.js");
const Route = createFileRoute("/checkout/cancel")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const RatesRoute = Route$7.update({
  id: "/rates",
  path: "/rates",
  getParentRoute: () => Route$8
});
const OrderRoute = Route$6.update({
  id: "/order",
  path: "/order",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ProductsIndexRoute = Route$3.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$8
});
const ProductsProductIdRoute = Route$2.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$8
});
const CheckoutSuccessRoute = Route$1.update({
  id: "/checkout/success",
  path: "/checkout/success",
  getParentRoute: () => Route$8
});
const CheckoutCancelRoute = Route.update({
  id: "/checkout/cancel",
  path: "/checkout/cancel",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  OrderRoute,
  RatesRoute,
  CheckoutCancelRoute,
  CheckoutSuccessRoute,
  ProductsProductIdRoute,
  ProductsIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$2 as R,
  router as r,
  useTheme as u
};
