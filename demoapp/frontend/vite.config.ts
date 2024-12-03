/// <reference types="vitest" />
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const enableCompiler = false;

const apiBackend = process.env.API_BACKEND ?? "http://localhost:3002";
console.log("API Backend", apiBackend);

const babelConfig = enableCompiler
  ? { babel: { plugins: ["babel-plugin-react-compiler", {}] } }
  : undefined;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(babelConfig), TanStackRouterVite()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    // proxy: {
    //   "/api": {
    //     target: apiBackend,
    //     changeOrigin: true,
    //     xfwd: true,
    //     // configure: (proxy, _options) => {
    //     //   proxy.on("error", (err, _req, _res) => {
    //     //     console.log("proxy error", err);
    //     //   });
    //     //   proxy.on("proxyReq", (proxyReq, req, _res) => {
    //     //     console.log(
    //     //       "Sending Request:",
    //     //       req.method,
    //     //       req.url,
    //     //       " => TO THE TARGET =>  ",
    //     //       proxyReq.method,
    //     //       proxyReq.protocol,
    //     //       proxyReq.host,
    //     //       proxyReq.path,
    //     //     );
    //     //   });
    //     //   proxy.on("proxyRes", (proxyRes, req, _res) => {
    //     //     console.log(
    //     //       "Received Response from the Target:",
    //     //       proxyRes.statusCode,
    //     //       req.url,
    //     //     );
    //     //   });
    //     // },
    //   },
    // },
  },
  test: {
    environment: "jsdom",
    // env: {
    //   TASK_API_PREFIX: "http://task-example-host.de",
    // },
    setupFiles: ["./vitest-setup.ts"],
    restoreMocks: true,
    onConsoleLog(log: string, type: "stdout" | "stderr"): false | void {
      console.log("log in test: ", log);
      if (log === "message from third party library" && type === "stdout") {
        return false;
      }
    },
  },
});
