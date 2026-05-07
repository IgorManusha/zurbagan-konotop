import { V as jsxRuntimeExports } from "./server-BzaHdT6S.js";
import { P as PageHeader, S as Section } from "./page-shell-CyrjhClr.js";
import { C as CircleCheck } from "./circle-check-DlJJdFjm.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-DTV3YNvZ.js";
const ethernet = [{
  name: "FiberNET 100",
  speed: "до 100 / 100",
  price: 200
}, {
  name: "FiberNET 200",
  speed: "до 200 / 200",
  price: 250,
  note: "За умов технічної можливості (тільки гігабітний порт)"
}, {
  name: "FiberNET 500",
  speed: "до 500 / 500",
  price: 500,
  note: "За умов технічної можливості (тільки гігабітний порт)"
}];
const gponCity = [{
  name: "PON FiberNET 100 M",
  speed: "до 100 / 100",
  price: 230
}, {
  name: "PON FiberNET 200 M",
  speed: "до 200 / 200",
  price: 270
}, {
  name: "PON FiberNET 500 M",
  speed: "до 500 / 500",
  price: 500
}];
const gponRural = [{
  name: "PON FiberNET 100 S",
  speed: "до 100 / 100",
  price: 250
}, {
  name: "PON FiberNET 200 S",
  speed: "до 200 / 200",
  price: 300
}, {
  name: "PON FiberNET 500 S",
  speed: "до 500 / 500",
  price: 500
}];
function Group({
  title,
  subtitle,
  plans
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand", children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-2xl font-bold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4", children: "Тариф" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4", children: "Швидкість, Мбіт/с" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 text-right", children: "Вартість, грн" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 font-semibold", children: [
          p.name,
          p.note && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs font-normal text-muted-foreground", children: p.note })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-muted-foreground", children: p.speed }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-right font-display text-xl font-bold text-brand", children: p.price })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand" }),
        " Безлімітний трафік"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand" }),
        " IPTV (23 телеканали) включено"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand" }),
        " Розрахунковий період — календарний місяць"
      ] })
    ] })
  ] });
}
function Tariffs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Тарифи", title: "Швидкість, що відповідає вашим потребам", description: "Тарифні плани з необмеженим трафіком. Чинні з 1 квітня 2026 р. для фізичних осіб." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { title: "Багатоквартирні будинки", subtitle: "Технологія Ethernet", plans: ethernet }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { title: "Енергонезалежний інтернет — м. Конотоп", subtitle: "Технологія GPON", plans: gponCity }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Group, { title: "Приватний сектор · сільська місцевість", subtitle: "Технологія GPON", plans: gponRural }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-surface p-6 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Оренда публічної IP-адреси" }),
        " — 50 грн/міс (мінімальний термін оренди — 6 місяців)."
      ] })
    ] })
  ] });
}
export {
  Tariffs as component
};
