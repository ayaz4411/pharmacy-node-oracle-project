require("dotenv").config();

const express = require("express");
const path = require("path");
const { testConnection } = require("./src/config/oracle");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", async (req, res) => {
  try {
    const result = await testConnection();
    res.json({ status: "UP", database: result });
  } catch (error) {
    res.status(500).json({
      status: "DOWN",
      database: "Oracle connection failed",
      error: error.message
    });
  }
});

app.get("/api/dashboard", (req, res) => {
  res.json({
    application: "Pharmacy Management",
    services: [
      "Analytics",
      "Government Pricing",
      "Master Data Manager",
      "Revenue Manager"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Pharmacy application running at http://localhost:${PORT}`);
});