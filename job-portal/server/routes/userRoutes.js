const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

/* REGISTER USER */

router.post("/register", async (req, res) => {

    try{

        const { name, email, password } = req.body;

/* LOGIN USER */

router.post("/login", async (req, res) => {

    try{

        const { email, password } = req.body;

        /* CHECK USER */

        const user =
        await User.findOne({ email });

        if(!user){

            return res.status(400).json({

                message:"User not found"
            });
        }

        /* CHECK PASSWORD */

        const isMatch =
        await bcrypt.compare(

            password,

            user.password
        );

        if(!isMatch){

            return res.status(400).json({

                message:"Invalid credentials"
            });
        }

        /* SUCCESS */

/* GENERATE TOKEN */

const token = jwt.sign(

    {

        id:user._id
    },

    process.env.JWT_SECRET,

    {

        expiresIn:"7d"
    }
);

/* SUCCESS */

res.status(200).json({

    message:"Login successful",

    token,

    user
});

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
});
        /* CHECK USER */

        const existingUser =
        await User.findOne({ email });

        if(existingUser){

            return res.status(400).json({

                message:"User already exists"
            });
        }

        /* CREATE USER */

   /* HASH PASSWORD */

const hashedPassword =
await bcrypt.hash(password, 10);

/* CREATE USER */

const user =
await User.create({

    name,

    email,

    password:hashedPassword
});
        res.status(201).json({

            message:"User registered successfully",

            user
        });

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
});

/* EXPORT */

module.exports = router;