const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const productRoutes = require("./routes/productRoutes");

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROUTES */

app.use("/api/auth",authRoutes);

app.use("/api/products",productRoutes);

/* TEST */

app.get("/",(req,res)=>{

  res.send("Pryvora API Running");
});

/* MONGODB */

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

  console.log("MongoDB Connected");
})

.catch((error)=>{

  console.log(error);
});

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{

  console.log(`Server running on port ${PORT}`);
});