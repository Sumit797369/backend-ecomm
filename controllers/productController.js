const addProduct = (req, res) => {
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

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    console.log( name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller);
    
console.log(image1,image2,image3,image4);


  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
  }
};

const listProduct = (req, res) => {};

const removeProduct = (req, res) => {};
const singleProduct = (req, res) => {};

export { addProduct, listProduct, removeProduct, singleProduct };
