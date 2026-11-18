const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const userRoutes =
require("./routes/userRoutes");

const jobRoutes =
require("./routes/jobRoutes");

const applicationRoutes =
require("./routes/applicationRoutes");

/* CONFIG */

dotenv.config();

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROUTES */

app.use("/api/users", userRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/applications", applicationRoutes);

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("MongoDB Connected ✅");
})

.catch((error) => {

    console.log(error);
});

/* TEST ROUTE */

app.get("/", (req, res) => {

    res.send("HireHub API Running 🚀");
});

/* PORT */

const PORT = process.env.PORT || 5000;

/* SERVER */

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);
});