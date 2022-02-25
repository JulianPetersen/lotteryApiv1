import  {Schema, model, Mongoose}  from "mongoose";

const Image = new Schema({
    fileName: {type:String},
    fileUrl: {type:String}   
})


export default model('Image', Image);