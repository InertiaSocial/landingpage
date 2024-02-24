import { defineConfig } from "astro/config";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://inertia.social",
  integrations: [
    icon({
      include: {
        ph: ["*"]
      }
    }),
    partytown(),
  ]
});