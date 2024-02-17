import {mongoose} from "mongoose"

mongoose.connect("mongodb+srv://admin:OHp5uOrmqP7acYNo@cluster0.d9l2cqe.mongodb.net/Docs-clone")

const  documentSchema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    data:{
        type:Object,
        required:true
    }
});

const document = mongoose.model("Document" ,documentSchema)


export default document;