const express = require("express");
const helmet = require("helmet");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 8080;

// Hardening: helmet sets X-Content-Type-Options, X-Frame-Options,
// Content-Security-Policy, Strict-Transport-Security and other headers.
app.use(helmet());
app.disable("x-powered-by");
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ service: "TaskMaster-API", status: "ok" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.get("/tasks", (req, res) => {
  const tasks = [
    { id: 1, title: "Patch dependencies", done: false },
    { id: 2, title: "Add security headers", done: false },
  ];
  const sorted = _.sortBy(tasks, "id");
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`TaskMaster-API listening on port ${PORT}`);
});

module.exports = app;
