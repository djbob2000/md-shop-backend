require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const shopRoutes = require("./routes/shopRoutes");
const orderRoutes = require("./routes/orderRoutes");
const couponRoutes = require("./routes/couponRoutes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST);

    console.log("Database connection successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectToMongoDB();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/shops", shopRoutes);
app.use("/orders", orderRoutes);
app.use("/coupons", couponRoutes);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, __) => {
  const status = err.status || 500;
  res.status(status).json({ message: err.message });
});

module.exports = app;
