import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  // site: "https://www.inertia.social",
  integrations: [
    icon({
      include: {
        ph: ["*"]
      }
    }),
  ]
});