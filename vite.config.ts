import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const moduleExclude = (match: string) => {
  const m = (id: string) => id.indexOf(match) > -1;
  return {
    name: `exclude-${match}`,
    resolveId(id: string) {
      if (m(id)) return id;
    },
    load(id: string) {
      if (m(id)) return `export default {}`;
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: [
      "gun",
      "gun/gun",
      "gun/sea",
      "gun/sea.js",
      "gun/lib/then",
      "gun/lib/webrtc",
      "gun/lib/radix",
      "gun/lib/radisk",
      "gun/lib/store",
      "gun/lib/rindexed",
    ],
  },

  plugins: [moduleExclude("text-encoding"), react()],
  resolve: {
    alias: {
      "@falcon-z": path.resolve(__dirname, "./src"),
    },
  },
});
