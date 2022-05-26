import axios from "axios";
import Product from "../models/Product.js";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).limit(10);
    const totalProducts = await Product.countDocuments();

    res.status(200).json({ totalProducts, products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getSingleProducts = async (req, res) => {
  try {
    const id = req.params.id;

    const products = await Product.findOne({ _id: id });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createProducts = async (req, res) => {
  try {
    const { title, url, thumbnailUrl } = req.body;

    if (!title || !url || !thumbnailUrl) {
      res.status(200).json({ message: "All fields are required" });
    }

    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateProducts = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      { _id: req.params.id },
      { new: true, runValidators: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export {
  getProducts,
  getSingleProducts,
  updateProducts,
  deleteProducts,
  createProducts,
};
