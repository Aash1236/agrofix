import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  define: {
    __DEFINES__: JSON.stringify(
      process.env.VITE_BACKEND_URL || "default_value"
    ),
  },
  plugins: [react()],
  server: { port: 5173 },
});
