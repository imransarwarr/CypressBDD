const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/json/",
  reportPath: "./cypress/reports/html",
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Dev Environment",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Orange HRM Project" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "Sprint 4" },
      { label: "Testing", value: "Smoke Testing Suite" },
      { label: "Execution Start Time", value: "Oct 13th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Oct 13th 2024, 02:56 PM EST" },
    ],
  },
});