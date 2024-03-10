const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  shopId: Number,
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
