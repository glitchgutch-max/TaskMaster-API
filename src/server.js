const express = require("express");
const _ = require("lodash");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Intentionally minimal — no helmet(), no security headers set.
// This is what the ZAP DAST scan should flag (missing X-Content-Type-Options, etc.)

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
  // Trivial use of lodash so it's a real dependency, not just declared
  const sorted = _.sortBy(tasks, "id");
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`TaskMaster-API listening on port ${PORT}`);
});

module.exports = app;
