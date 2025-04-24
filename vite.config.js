import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  compilerOptions: {
    baseUrl: "src",
    paths: {
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "@data/*": ["data/*"],
      "@styles/*": ["styles/*"],
      "@assets/*": ["assets/*"],
    },
  },
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  //
});
