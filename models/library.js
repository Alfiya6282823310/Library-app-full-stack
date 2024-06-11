const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
            "booktitle":String,
            "category":String,
            "publishyear":Number,
            "authorname":String,
            "price":Number,
            "edition":Number
    }
)
let librarymodel=mongoose.model("library",schema);
module.exports={librarymodel}