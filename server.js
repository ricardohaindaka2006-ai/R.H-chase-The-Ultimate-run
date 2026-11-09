const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Deliberately hard-disabled. Do not enable until merchant approval,
// provider sandbox/UAT, signed status verification, and owner go-live approval.
const PAYMENTS_ENABLED = false;

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, game: "R.H-CHASE", status: "ready" });
});

app.get("/api/payments/status", (_req, res) => {
  res.set("Cache-Control", "no-store");
  res.status(200).json({
    enabled: PAYMENTS_ENABLED,
    mode: "disabled",
    provider: null,
    checkoutAvailable: false,
    manualPaymentsAvailable: false
  });
});

app.post("/api/payments/checkout", (_req, res) => {
  res.set("Cache-Control", "no-store");
  return res.status(503).json({
    error: "PAYMENTS_DISABLED",
    message: "R.H-CHASE payments are not yet approved or available."
  });
});

app.post("/api/payments/manual", (_req, res) => {
  res.set("Cache-Control", "no-store");
  return res.status(503).json({
    error: "MANUAL_PAYMENTS_DISABLED",
    message: "Manual payment instructions are not yet configured or verified."
  });
});

app.use(express.static(path.join(__dirname, "public"), { extensions: ["html"] }));
app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, "0.0.0.0", () => console.log(`R.H-CHASE listening on ${PORT}; payments disabled`));
