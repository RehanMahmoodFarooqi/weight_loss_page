import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/weight_loss_page/' : '/', // EXACT repo name for production
}));