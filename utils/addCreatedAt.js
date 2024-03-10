const Product = require("../models/productModel");
const mongoose = require("mongoose");

mongoose.connect("", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Product.find({})
  .then((products) => {
    products.forEach((product) => {
      const currentDate = new Date();

      const randomTimeWithinLastMonth = Math.floor(
        Math.random() * 30 * 24 * 60 * 60 * 1000
      );

      const randomTime = new Date(
        currentDate.getTime() - randomTimeWithinLastMonth
      );

      product.createdAt = randomTime;

      product
        .save()
        .then((updatedProduct) => {
          console.log("Updated product:", updatedProduct);
        })
        .catch((err) => {
          console.error("Error saving product:", err);
        });
    });
  })
  .catch((err) => {
    console.error("Error fetching products:", err);
  });
