import { defineConfig } from "astro/config";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.belief.gg",
  integrations: [
    icon({
      include: {
        ph: ["hand-pointing-bold", "link-bold", "confetti-bold", "hand-fist-bold", "cursor-text-bold", "arrow-left-bold", "envelope-open-bold"]
      }
    }),
    partytown(),
  ]
});