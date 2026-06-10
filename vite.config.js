// import { defineConfig } from "vite";
// import react from "@vitejs/react-refresh";
// export default defineConfig({
//   plugins: [react()],
//   base: "/portfolio/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
