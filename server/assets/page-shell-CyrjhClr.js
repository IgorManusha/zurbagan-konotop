import { V as jsxRuntimeExports } from "./server-BzaHdT6S.js";
function PageHeader({ eyebrow, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-gradient-hero relative overflow-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold md:text-5xl lg:text-6xl", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-white/80", children: description })
    ] })
  ] });
}
function Section({ children, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: `mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20 ${className}`, children });
}
export {
  PageHeader as P,
  Section as S
};
