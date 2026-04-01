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
  res.send("API is running 🚀");
});

module.exports = app;