import { defineConfig } from "astro/config";

import icon from "astro-icon"
// https://astro.build/config
export default defineConfig({
  experimental: {
    optimizeHoistedScript: true,
  },

  integrations: [
    icon({
      include: {
        ph: ["hand-pointing-bold", "cursor-bold", "arrow-left-bold", "envelope-open-bold"],
      },
    }),
  ],
});
