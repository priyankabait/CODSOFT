const Product = require("../models/Product");

/* GET PRODUCTS */

exports.getProducts = async (req,res)=>{

  try{

    const category = req.query.category;

    let products;

    /* FILTER */

    if(category){

      products = await Product.find({

        category
      });
    }

    else{

      products = await Product.find();
    }

    res.status(200).json(products);

  }

  catch(error){

    res.status(500).json({

      message:error.message
    });
  }
};