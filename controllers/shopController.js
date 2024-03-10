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
  const { sortBy = "name", sortOrder = "asc" } = req.query;

  try {
    const sortCriteria = {};

    if (sortBy === "name") {
      sortCriteria.name = sortOrder === "desc" ? -1 : 1;
    } else if (sortBy === "createdAt") {
      sortCriteria.createdAt = sortOrder === "desc" ? -1 : 1;
    }

    const products = await Product.find({ shopId }).sort(sortCriteria);
    res.json(products);
  } catch (error) {
    next(error);
  }
};
