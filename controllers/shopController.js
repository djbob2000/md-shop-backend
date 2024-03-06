const Product = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  const { shopId } = req.params;
  const { name, image, price } = req.body;

  try {
    const newProduct = await Product.create({
      shopId,
      name,
      image,
      price,
    });

    res
      .status(201)
      .json({ message: "Product successfully added", product: newProduct });
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  const { shopId } = req.params;

  try {
    const products = await Product.find({ shopId });
    res.json(products);
  } catch (error) {
    next(error);
  }
};
