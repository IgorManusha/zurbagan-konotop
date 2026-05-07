import { defineConfig } from "vite";
import react from "@vitejs/react-refresh"; // або ваш плагін

export default defineConfig({
  base: "/zurbagan-konotop/", // ДОДАЙТЕ ЦЕЙ РЯДОК
  plugins: [react()],
});
