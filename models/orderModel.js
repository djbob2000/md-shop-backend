const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  cartGoods: [
    {
      shopId: String,
      title: String,
      image: String,
      price: String,
      id: String,
      quantity: Number,
    },
  ],
  name: String,
  email: String,
  phone: String,
  address: String,
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
