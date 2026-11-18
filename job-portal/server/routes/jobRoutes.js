const express = require("express");

const router = express.Router();

const Job = require("../models/Job");

/* ================= SEED JOBS ================= */

router.get("/seed", async (req, res) => {

    try{

        await Job.deleteMany();

        await Job.insertMany([

            {

                title:"Frontend Developer",

                company:"Google",

                location:"Remote",

                type:"Full Time",

                description:
                "React.js developer role"
            },

            {

                title:"Backend Engineer",

                company:"Microsoft",

                location:"Hybrid",

                type:"Full Time",

                description:
                "Node.js backend development"
            },

            {

                title:"UI/UX Designer",

                company:"Adobe",

                location:"Remote",

                type:"Internship",

                description:
                "Figma and UI design role"
            }
        ]);

        res.json({

            message:"Jobs seeded successfully"
        });

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
});

/* ================= GET ALL JOBS ================= */

router.get("/", async (req, res) => {

    try{

        const jobs =
        await Job.find();

        res.status(200).json(jobs);

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
});

/* ================= GET SINGLE JOB ================= */

router.get("/:id", async (req, res) => {

    try{

        const job =
        await Job.findById(req.params.id);

        res.status(200).json(job);

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
});

/* ================= ADD JOB ================= */

router.post("/add", async (req, res) => {

    try{

        const job =
        await Job.create(req.body);

        res.status(201).json({

            message:"Job added successfully",

            job
        });

    }catch(error){

        res.status(500).json({

            message:error.message
        });
    }
});

/* EXPORT */

module.exports = router;