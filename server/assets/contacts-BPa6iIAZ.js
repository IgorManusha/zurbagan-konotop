import { r as reactExports, V as jsxRuntimeExports } from "./server-Dy8F5OA0.js";
import { P as PageHeader, S as Section } from "./page-shell-D5VvoCgQ.js";
import { P as Phone, M as Mail, a as MapPin, C as Clock } from "./router-CIq5g2HP.js";
import { S as Send } from "./send-C614UrYj.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Contacts() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Контакти", title: "Завжди на зв'язку", description: "Зв'яжіться зручним способом або залиште заявку — ми передзвонимо." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gradient-brand p-3 text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Телефони" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+380673002200", className: "block font-display text-lg font-bold hover:text-brand", children: "067 300 22 00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+380663002200", className: "block font-display text-lg font-bold hover:text-brand", children: "066 300 22 00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+380732002200", className: "block font-display text-lg font-bold hover:text-brand", children: "073 200 22 00" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gradient-brand p-3 text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@zurbagan.tv", className: "font-display text-lg font-bold hover:text-brand", children: "info@zurbagan.tv" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gradient-brand p-3 text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Адреса" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold", children: "м. Конотоп, Сумська обл." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-gradient-brand p-3 text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Графік роботи" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Пн–Пт: 9:00–18:00" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: "Перерва 13:00–14:00 · Сб–Нд: вихідні" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "rounded-3xl border border-border bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Залишити заявку" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Заповніть форму — і ми зателефонуємо вам найближчим часом." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Ім'я" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Телефон" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "tel", placeholder: "+380", className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Адреса підключення" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Повідомлення" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition-colors focus:border-brand" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: sent, className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 font-semibold text-brand-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-60", children: sent ? "Дякуємо! Ми зв'яжемося." : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Надіслати заявку ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  Contacts as component
};
