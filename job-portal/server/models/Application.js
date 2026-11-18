const mongoose = require("mongoose");

/* APPLICATION SCHEMA */

const applicationSchema =
new mongoose.Schema({

    userId:{

        type:String,

        required:true
    },

    jobId:{

        type:String,

        required:true
    },

    resume:{

        type:String,

        required:true
    }

},{

    timestamps:true
});

module.exports =
mongoose.model(
    "Application",
    applicationSchema
);