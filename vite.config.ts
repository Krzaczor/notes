import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        target: "es2015",
    },
    base: "/notes/",
    plugins: [react(), tsconfigPaths(), VitePWA({ registerType: "autoUpdate" })],
});
