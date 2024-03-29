const mongoose = require ("mongoose");

const CodeSubSection = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
        codeSubSection: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "codeSubSection", 
        }],
    }
)

module.export = mongoose.model("codeSubSection", CodeSubSection);