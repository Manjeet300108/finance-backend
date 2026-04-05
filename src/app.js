const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/auth", require("./routes/auth.routes"));
app.use("/records", require("./routes/record.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Finance Backend API</h1>
    <p>Status: Running Successfully ✅</p>
    <h3>Available Endpoints:</h3>
    <ul>
      <li>/auth/register</li>
      <li>/auth/login</li>
      <li>/records</li>
      <li>/dashboard/summary</li>
    </ul>
    <p>Developed by Manu 💻</p>
  `);
});

module.exports = app;