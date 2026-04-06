import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { H as Header } from "./Header-DPzzOeh0.js";
import { Send, Download, FileText, AlertCircle } from "lucide-react";
import "@tanstack/react-router";
import "./router-DA5bQKbQ.js";
import "./products-NF-CuOXn.js";
const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const INITIAL = {
  customerName: "",
  companyName: "",
  phone: "",
  email: "",
  address: "",
  productType: "",
  sizes: {
    XS: "",
    S: "",
    M: "",
    L: "",
    XL: "",
    XXL: "",
    XXXL: ""
  },
  printDetails: "",
  pricePerPiece: "",
  advancePayment: "",
  paymentTerms: "",
  deliveryTime: ""
};
function OrderPage() {
  const [form, setForm] = useState(INITIAL);
  const [logoFile, setLogoFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);
  const totalQty = SIZES.reduce((sum, s) => sum + (parseInt(form.sizes[s]) || 0), 0);
  const priceNum = parseFloat(form.pricePerPiece) || 0;
  const totalAmount = priceNum * totalQty;
  const advanceNum = parseFloat(form.advancePayment) || 0;
  const balanceAmount = totalAmount - advanceNum;
  const set = (field, value) => setForm((f) => ({
    ...f,
    [field]: value
  }));
  const setSize = (size, value) => setForm((f) => ({
    ...f,
    sizes: {
      ...f.sizes,
      [size]: value
    }
  }));
  const handleFileChange = (e) => {
    if (e.target.files?.[0]) setLogoFile(e.target.files[0]);
  };
  const downloadCSV = () => {
    const rows = [["ARVESTA CLOTHING — ORDER FORM", ""], ["", ""], ["CUSTOMER DETAILS", ""], ["Customer Name", form.customerName], ["Company Name", form.companyName], ["Phone", form.phone], ["Email", form.email], ["Address", form.address], ["", ""], ["PRODUCT DETAILS", ""], ["Product Type", form.productType], ...SIZES.map((s) => [`Size ${s}`, form.sizes[s] || "0"]), ["Total Quantity", totalQty.toString()], ["", ""], ["PRINT DETAILS", ""], ["Logo/Design Details", form.printDetails], ["Logo File", logoFile?.name || "Not provided"], ["", ""], ["PRICE & PAYMENT", ""], ["Price Per Piece (₹)", form.pricePerPiece], ["Total Quantity", totalQty.toString()], ["Total Amount (₹)", totalAmount.toFixed(2)], ["Advance Payment (₹)", form.advancePayment], ["Balance Amount (₹)", balanceAmount.toFixed(2)], ["Payment Terms", form.paymentTerms], ["", ""], ["DELIVERY", ""], ["Delivery Time", form.deliveryTime]];
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `arvesta-order-${form.customerName || "form"}-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const downloadWord = () => {
    const html = `
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8"/><title>Arvesta Clothing Order</title>
<style>
body { font-family: Calibri, sans-serif; margin: 40px; }
h1 { color: #C41E3A; font-size: 22pt; }
h2 { color: #333; font-size: 14pt; border-bottom: 2px solid #C41E3A; padding-bottom: 4px; margin-top: 24px; }
table { width: 100%; border-collapse: collapse; margin-top: 8px; }
td { padding: 6px 10px; border: 1px solid #ddd; font-size: 11pt; }
td:first-child { font-weight: bold; color: #555; width: 200px; }
.total { background: #fff3f3; font-weight: bold; }
</style>
</head>
<body>
<h1>Arvesta Clothing — Order Form</h1>
<h2>Customer Details</h2>
<table>
<tr><td>Customer Name</td><td>${form.customerName}</td></tr>
<tr><td>Company Name</td><td>${form.companyName}</td></tr>
<tr><td>Phone</td><td>${form.phone}</td></tr>
<tr><td>Email</td><td>${form.email}</td></tr>
<tr><td>Address</td><td>${form.address}</td></tr>
</table>
<h2>Product Details</h2>
<table>
<tr><td>Product Type</td><td>${form.productType}</td></tr>
${SIZES.map((s) => `<tr><td>Size ${s}</td><td>${form.sizes[s] || "0"}</td></tr>`).join("")}
<tr class="total"><td>Total Quantity</td><td>${totalQty}</td></tr>
</table>
<h2>Print Details</h2>
<table>
<tr><td>Logo/Design Details</td><td>${form.printDetails}</td></tr>
<tr><td>Logo File</td><td>${logoFile?.name || "Not provided"}</td></tr>
</table>
<h2>Price &amp; Payment</h2>
<table>
<tr><td>Price Per Piece</td><td>₹${form.pricePerPiece}</td></tr>
<tr><td>Total Quantity</td><td>${totalQty}</td></tr>
<tr class="total"><td>Total Amount</td><td>₹${totalAmount.toFixed(2)}</td></tr>
<tr><td>Advance Payment</td><td>₹${form.advancePayment}</td></tr>
<tr class="total"><td>Balance Amount</td><td>₹${balanceAmount.toFixed(2)}</td></tr>
<tr><td>Payment Terms</td><td>${form.paymentTerms}</td></tr>
</table>
<h2>Delivery</h2>
<table>
<tr><td>Delivery Time</td><td>${form.deliveryTime}</td></tr>
</table>
</body></html>`;
    const blob = new Blob([html], {
      type: "application/msword"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `arvesta-order-${form.customerName || "form"}-${Date.now()}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append("customerName", form.customerName);
    formData.append("companyName", form.companyName);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("address", form.address);
    formData.append("productType", form.productType);
    SIZES.forEach((s) => {
      formData.append(`size_${s}`, form.sizes[s] || "0");
    });
    formData.append("totalQty", totalQty.toString());
    formData.append("printDetails", form.printDetails);
    if (logoFile) {
      formData.append("logoFile", logoFile);
    }
    formData.append("pricePerPiece", form.pricePerPiece);
    formData.append("totalAmount", totalAmount.toFixed(2));
    formData.append("advancePayment", form.advancePayment);
    formData.append("balanceAmount", balanceAmount.toFixed(2));
    formData.append("paymentTerms", form.paymentTerms);
    formData.append("deliveryTime", form.deliveryTime);
    try {
      const FORMSPREE_ID = "xdapdpgp";
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { style: {
        background: "var(--bg)",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem"
      }, children: /* @__PURE__ */ jsxs("div", { className: "text-center", style: {
        maxWidth: "500px"
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "rgba(196,30,58,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1.5rem"
        }, children: /* @__PURE__ */ jsx(Send, { size: 32, style: {
          color: "var(--accent)"
        } }) }),
        /* @__PURE__ */ jsx("h2", { style: {
          color: "var(--text)",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "2.5rem",
          letterSpacing: "0.05em",
          margin: "0 0 1rem"
        }, children: "Order Submitted!" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "var(--text-muted)",
          lineHeight: 1.75,
          marginBottom: "2rem"
        }, children: "Your order details have been submitted. We'll get back to you within 24 hours. Download a copy of your order below." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxs("button", { onClick: downloadCSV, className: "btn-primary", style: {
            fontSize: "0.875rem"
          }, children: [
            /* @__PURE__ */ jsx(Download, { size: 16 }),
            " Download Excel (CSV)"
          ] }),
          /* @__PURE__ */ jsxs("button", { onClick: downloadWord, className: "btn-outline", style: {
            fontSize: "0.875rem"
          }, children: [
            /* @__PURE__ */ jsx(FileText, { size: 16 }),
            " Download Word"
          ] })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { style: {
      background: "var(--bg)",
      padding: "0 0 5rem"
    }, children: [
      /* @__PURE__ */ jsx("section", { style: {
        background: "var(--surface)",
        borderBottom: "1px solid var(--border)",
        padding: "3.5rem 0"
      }, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsx("p", { className: "section-label", children: "Order Submission" }),
        /* @__PURE__ */ jsx("h1", { className: "section-title", children: "Order Form" }),
        /* @__PURE__ */ jsx("p", { style: {
          color: "var(--text-muted)",
          lineHeight: 1.75
        }, children: "Fill out the order form below. On submission, the details will be emailed to us and you can download a copy in Excel or Word format." })
      ] }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "max-w-3xl mx-auto px-4 sm:px-6 pt-10", style: {
        display: "flex",
        flexDirection: "column",
        gap: "2.5rem"
      }, children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { style: {
            color: "var(--text)",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "0.5rem",
            marginBottom: "1.25rem"
          }, children: "Customer Details" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            [{
              label: "Customer Name *",
              field: "customerName",
              required: true,
              placeholder: "Full name"
            }, {
              label: "Company / Organisation",
              field: "companyName",
              required: false,
              placeholder: "Company name (if applicable)"
            }, {
              label: "Phone Number *",
              field: "phone",
              required: true,
              placeholder: "9xxxxxxxxx"
            }, {
              label: "Email Address",
              field: "email",
              required: false,
              placeholder: "you@example.com"
            }].map(({
              label,
              field,
              required,
              placeholder
            }) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: label }),
              /* @__PURE__ */ jsx("input", { className: "form-input", required, placeholder, value: form[field], onChange: (e) => set(field, e.target.value) })
            ] }, field)),
            /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Address" }),
              /* @__PURE__ */ jsx("textarea", { className: "form-input", rows: 2, placeholder: "Delivery address", value: form.address, onChange: (e) => set("address", e.target.value), style: {
                resize: "vertical"
              } })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { style: {
            color: "var(--text)",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "0.5rem",
            marginBottom: "1.25rem"
          }, children: "Product Details" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Product Type *" }),
            /* @__PURE__ */ jsxs("select", { className: "form-input", required: true, value: form.productType, onChange: (e) => set("productType", e.target.value), children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Select product type" }),
              /* @__PURE__ */ jsx("option", { value: "Polo Plain", children: "Polo Plain" }),
              /* @__PURE__ */ jsx("option", { value: "Polo Custom", children: "Polo Custom" }),
              /* @__PURE__ */ jsx("option", { value: "Round Neck Plain", children: "Round Neck Plain" }),
              /* @__PURE__ */ jsx("option", { value: "Round Neck Custom", children: "Round Neck Custom" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "form-label", style: {
            display: "block",
            marginBottom: "0.75rem"
          }, children: "Size Breakdown — Quantities" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 sm:grid-cols-7 gap-3 mb-4", children: SIZES.map((size) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { style: {
              display: "block",
              fontSize: "0.75rem",
              fontWeight: 700,
              textAlign: "center",
              color: "var(--text-muted)",
              marginBottom: "4px"
            }, children: size }),
            /* @__PURE__ */ jsx("input", { className: "form-input", type: "number", min: "0", placeholder: "0", value: form.sizes[size], onChange: (e) => setSize(size, e.target.value), style: {
              textAlign: "center",
              padding: "0.6rem 0.25rem"
            } })
          ] }, size)) }),
          /* @__PURE__ */ jsxs("div", { style: {
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "0.875rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ jsx("span", { style: {
              color: "var(--text-muted)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }, children: "Total Quantity" }),
            /* @__PURE__ */ jsx("span", { style: {
              color: "var(--accent)",
              fontSize: "1.25rem",
              fontWeight: 800
            }, children: totalQty })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { style: {
            color: "var(--text)",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "0.5rem",
            marginBottom: "1.25rem"
          }, children: "Print Details" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Logo / Design Description" }),
            /* @__PURE__ */ jsx("textarea", { className: "form-input", rows: 3, placeholder: "Describe your logo or design (colors, text, placement instructions...)", value: form.printDetails, onChange: (e) => set("printDetails", e.target.value), style: {
              resize: "vertical"
            } })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Attach Logo / Design File" }),
            /* @__PURE__ */ jsxs("div", { onClick: () => fileRef.current?.click(), style: {
              border: `2px dashed ${logoFile ? "var(--accent)" : "var(--border)"}`,
              borderRadius: "6px",
              background: "var(--surface)",
              padding: "2rem",
              textAlign: "center",
              cursor: "pointer",
              transition: "border-color 0.2s"
            }, children: [
              /* @__PURE__ */ jsx("input", { ref: fileRef, type: "file", accept: ".png,.jpg,.jpeg,.bmp", style: {
                display: "none"
              }, onChange: handleFileChange }),
              logoFile ? /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { style: {
                  color: "var(--accent)",
                  fontWeight: 600,
                  margin: "0 0 0.25rem"
                }, children: logoFile.name }),
                /* @__PURE__ */ jsx("p", { style: {
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  margin: 0
                }, children: "Click to change" })
              ] }) : /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { style: {
                  color: "var(--text)",
                  fontWeight: 500,
                  margin: "0 0 0.25rem"
                }, children: "Click to upload logo / design file" }),
                /* @__PURE__ */ jsx("p", { style: {
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  margin: 0
                }, children: "Accepted: PNG, JPEG, BMP" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-1.5 mt-2", style: {
              color: "var(--text-muted)",
              fontSize: "0.78rem"
            }, children: [
              /* @__PURE__ */ jsx(AlertCircle, { size: 13, style: {
                flexShrink: 0,
                marginTop: "2px"
              } }),
              /* @__PURE__ */ jsx("span", { children: "File will not be emailed automatically. Please share the design separately on WhatsApp or email." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { style: {
            color: "var(--text)",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "0.5rem",
            marginBottom: "1.25rem"
          }, children: "Price & Payment" }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Price Per Piece (₹)" }),
              /* @__PURE__ */ jsx("input", { className: "form-input", type: "number", min: "0", step: "0.01", placeholder: "0.00", value: form.pricePerPiece, onChange: (e) => set("pricePerPiece", e.target.value) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Total Quantity" }),
              /* @__PURE__ */ jsx("input", { className: "form-input", type: "number", readOnly: true, value: totalQty, style: {
                background: "var(--surface)",
                cursor: "default"
              } })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Total Amount (₹) — Auto" }),
              /* @__PURE__ */ jsx("input", { className: "form-input", type: "text", readOnly: true, value: totalAmount > 0 ? `₹ ${totalAmount.toFixed(2)}` : "", placeholder: "Auto-calculated", style: {
                background: "var(--surface)",
                cursor: "default",
                fontWeight: 700,
                color: "var(--accent)"
              } })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Advance Payment (₹)" }),
              /* @__PURE__ */ jsx("input", { className: "form-input", type: "number", min: "0", step: "0.01", placeholder: "0.00", value: form.advancePayment, onChange: (e) => set("advancePayment", e.target.value) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Balance Amount (₹) — Auto" }),
              /* @__PURE__ */ jsx("input", { className: "form-input", type: "text", readOnly: true, value: totalAmount > 0 ? `₹ ${balanceAmount.toFixed(2)}` : "", placeholder: "Auto-calculated", style: {
                background: "var(--surface)",
                cursor: "default",
                fontWeight: 700,
                color: balanceAmount >= 0 ? "var(--accent)" : "#e53e3e"
              } })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "form-label", children: "Payment Terms" }),
              /* @__PURE__ */ jsx("input", { className: "form-input", placeholder: "e.g. 50% advance, 50% on delivery", value: form.paymentTerms, onChange: (e) => set("paymentTerms", e.target.value) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { style: {
            color: "var(--text)",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderBottom: "2px solid var(--accent)",
            paddingBottom: "0.5rem",
            marginBottom: "1.25rem"
          }, children: "Delivery" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "form-label", children: "Expected Delivery Time" }),
            /* @__PURE__ */ jsx("input", { className: "form-input", placeholder: "e.g. 7–10 business days, or specific date", value: form.deliveryTime, onChange: (e) => set("deliveryTime", e.target.value) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: {
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          paddingBottom: "2rem"
        }, children: [
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-primary", disabled: submitting, style: {
            flex: 1,
            minWidth: "200px",
            justifyContent: "center",
            opacity: submitting ? 0.7 : 1
          }, children: [
            /* @__PURE__ */ jsx(Send, { size: 16 }),
            submitting ? "Submitting…" : "Submit Order"
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: downloadCSV, className: "btn-outline", style: {
            justifyContent: "center"
          }, children: [
            /* @__PURE__ */ jsx(Download, { size: 16 }),
            " Excel (CSV)"
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "button", onClick: downloadWord, className: "btn-outline", style: {
            justifyContent: "center"
          }, children: [
            /* @__PURE__ */ jsx(FileText, { size: 16 }),
            " Word"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  OrderPage as component
};
