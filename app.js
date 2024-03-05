require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// const { connectToMongoDB } = require('./db');

// const authRouter = require('./routes/api/auth');

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// connectToMongoDB();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

// app.use('/api/auth', authRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

module.exports = app;