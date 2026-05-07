import { V as jsxRuntimeExports } from "./server-Dy8F5OA0.js";
import { P as PageHeader, S as Section } from "./page-shell-D5VvoCgQ.js";
import { W as Wifi, T as Tv } from "./wifi-D2-hxw5E.js";
import { c as createLucideIcon } from "./router-CIq5g2HP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$1);
const __iconNode = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
];
const Network = createLucideIcon("network", __iconNode);
const services = [{
  icon: Wifi,
  title: "Ethernet-інтернет",
  desc: "Швидкий інтернет у багатоквартирних будинках за технологією Ethernet. Швидкість до 500 Мбіт/с."
}, {
  icon: Network,
  title: "GPON-інтернет",
  desc: "Енергонезалежний оптичний інтернет — обладнання працює навіть при відключеннях електроенергії."
}, {
  icon: Tv,
  title: "IPTV",
  desc: "23 цифрові телеканали у комплекті з будь-яким тарифом інтернету. Без додаткової плати."
}, {
  icon: Building2,
  title: "Для бізнесу",
  desc: "Виділені канали, статичні IP, SLA та індивідуальні умови для юридичних осіб."
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Послуги", title: "Зв'язок, на який можна покластися", description: "Повний спектр послуг для дому та бізнесу: оптичний інтернет, цифрове ТБ і професійна підтримка." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex rounded-xl bg-gradient-brand p-3 text-brand-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: s.desc })
    ] }, s.title)) }) })
  ] });
}
export {
  Services as component
};
