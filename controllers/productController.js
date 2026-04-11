// import {v2 as cloudinary} from "cloudinary";


const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const images = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0],
    ].filter(Boolean);

    const imageUrls = images.map(
      (item) => `/uploads/${item.filename}`
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true",
      image: imageUrls,
      date: Date.now(),
    };

    console.log(productData);

    res.json({
      success: true,
      message: "Product Added",
      productData,
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find();

    res.json({
      success: true,
      products,
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const removeProduct = (req, res) => {};
const singleProduct = (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
