import axios from "axios";

const getProducts = async (req, res) => {
  try {
    const products = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getSingleProducts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createProducts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateProducts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteProducts = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error });
  }
};


export {getProducts, getSingleProducts, updateProducts, deleteProducts, createProducts}