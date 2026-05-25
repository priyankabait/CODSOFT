const mongoose = require("mongoose");

require("dotenv").config();

const Product = require("./models/Product");

/* PRODUCTS */

const products = [

  {
    name:"Aurora Gold",
    description:"Luxury Layered Necklace",
    price:4999,
    image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop",
    category:"necklace"
  },

  {
    name:"Velvet Shine",
    description:"Elegant Earrings",
    price:3299,
    image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1470&auto=format&fit=crop",
    category:"earrings"
  },

  {
    name:"Golden Pearl",
    description:"Modern Luxury Necklace",
    price:5499,
    image:"https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1600&auto=format&fit=crop",
    category:"necklace"
  },

  {
    name:"Moonlight Ring",
    description:"Minimal Statement Ring",
    price:2499,
    image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1374&auto=format&fit=crop",
    category:"ring"
  }
];

/* SEED */

mongoose.connect(process.env.MONGO_URI)

.then(async ()=>{

  await Product.deleteMany();

  await Product.insertMany(products);

  console.log("Products Added");

  process.exit();
});