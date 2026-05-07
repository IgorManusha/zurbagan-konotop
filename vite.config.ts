import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Додаємо секцію vite для базового шляху
  vite: {
    base: "/zurbagan-konotop/",
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
