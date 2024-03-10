const Coupon = require("../models/couponModel");

exports.createCoupon = async (req, res) => {
  try {
    const { photo, name, code, discount } = req.body;
    const newCoupon = new Coupon({ photo, name, code, discount });
    const savedCoupon = await newCoupon.save();
    res.status(201).json(savedCoupon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
