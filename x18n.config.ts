import { defineConfig } from "@x18n/core";

// Migrated from i18n-ally by `x18n migrate i18n-ally`.
export default defineConfig({
  resources: [
    {
      pattern: "i18n/locales/{locale}/{namespaces}.{ext}",
    },
  ],
  formats: {
    json: "json",
  },
  keyStyle: "nested",
});
