import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  sever: {
    proxy: {
      "/api": "http://localhost:3001",
      secure: false,
    },
  },
  plugins: [react()],
});
