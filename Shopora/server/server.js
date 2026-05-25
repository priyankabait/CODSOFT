const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

/* CONFIG */

dotenv.config();

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROOT ROUTE */

app.get("/", (req, res) => {

    res.send("Shopora API Running 🚀");
});

/* DATABASE */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected ✅");
})

.catch((error) => {

    console.log(error);
});

/* PORT */

const PORT = process.env.PORT || 5000;

/* SERVER */

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});