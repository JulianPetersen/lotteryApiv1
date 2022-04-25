
import  {Schema, model}  from "mongoose";
import config from '../config';

const postSchema =  new Schema({
    imgUrl:{
        type:String,
        trim:true,
    },
    description: {
        type:String,
    },
    socialLink:{
        type:String,
     
    },
    usuario:{
        type: Schema.Types.ObjectId, ref: 'User',
    },
    ciudad:{
        type:String,
     
    },
    category:
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }
    
},{
    versionKey:false,
    timestamps:true
});


postSchema.methods.setImgUrl = function setImgUrl(filename){
    this.imgUrl = `${config.host}:${config.port}/public/${filename}`
}



export default model('Post', postSchema);
