const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: Number,
  shopId: Number,
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
