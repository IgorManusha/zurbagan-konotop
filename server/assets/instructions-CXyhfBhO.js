import { V as jsxRuntimeExports } from "./server-Dy8F5OA0.js";
import { P as PageHeader, S as Section } from "./page-shell-D5VvoCgQ.js";
import { c as createLucideIcon } from "./router-CIq5g2HP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  [
    "path",
    { d: "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z", key: "trhst0" }
  ],
  ["path", { d: "M17 21v-2", key: "ds4u3f" }],
  ["path", { d: "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10", key: "1mo9zo" }],
  ["path", { d: "M21 21v-2", key: "eo0ou" }],
  ["path", { d: "M3 5V3", key: "1k5hjh" }],
  [
    "path",
    { d: "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z", key: "1dd30t" }
  ],
  ["path", { d: "M7 5V3", key: "1t1388" }]
];
const Cable = createLucideIcon("cable", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",
      key: "vbtd3f"
    }
  ],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" }]
];
const MonitorPlay = createLucideIcon("monitor-play", __iconNode$1);
const __iconNode = [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6.01 18H6", key: "19vcac" }],
  ["path", { d: "M10.01 18H10", key: "uamcmx" }],
  ["path", { d: "M15 10v4", key: "qjz1xs" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
];
const Router = createLucideIcon("router", __iconNode);
const items = [{
  icon: Router,
  title: "Налаштування роутера",
  desc: "Покрокова інструкція налаштування Wi-Fi роутера для роботи в мережі Зурбаган."
}, {
  icon: Cable,
  title: "Підключення кабелю",
  desc: "Як правильно під'єднати мережевий кабель до комп'ютера або роутера."
}, {
  icon: MonitorPlay,
  title: "Налаштування IPTV",
  desc: "Як подивитися 23 цифрові канали на ТБ, телефоні чи приставці."
}, {
  icon: FileText,
  title: "Оплата послуг",
  desc: "Інструкції з оплати через Приват24, банківську картку, скретч-картку та Telegram-бот."
}];
function Instructions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Інструкції", title: "Налаштування за хвилини", description: "Зрозумілі покрокові інструкції для самостійного підключення та налаштування послуг." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex rounded-xl bg-gradient-brand p-3 text-brand-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(i.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold group-hover:text-brand", children: i.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: i.desc })
    ] }, i.title)) }) })
  ] });
}
export {
  Instructions as component
};
