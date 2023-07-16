import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  projectRoot: "./",
  typescript: true,

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: ["cypress/integration/**/*.spec.ts"],
    reporterOptions: {
      outputDir: "reports",
    },
  },
});
