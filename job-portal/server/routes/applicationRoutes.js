const express = require("express");

const router = express.Router();

const multer = require("multer");

const Application =
require("../models/Application");

/* STORAGE */

const storage =
multer.diskStorage({

    destination:function(req, file, cb){

        cb(null, "uploads/");
    },

    filename:function(req, file, cb){

        cb(

            null,

            Date.now() +
            "-" +
            file.originalname
        );
    }
});

const upload = multer({ storage });

/* APPLY JOB */

router.post(

    "/apply",

    upload.single("resume"),

    async (req, res) => {

        try{

            const application =
            await Application.create({

                userId:req.body.userId,

                jobId:req.body.jobId,

                resume:req.file.path
            });

            res.status(201).json({

                message:
                "Application submitted successfully",

                application
            });

        }catch(error){

            res.status(500).json({

                message:error.message
            });
        }
    }
);

module.exports = router;