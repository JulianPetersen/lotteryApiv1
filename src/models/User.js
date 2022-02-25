import  {Schema, model}  from "mongoose";
import config from '../config';


const userSchema = new Schema ({
    email:{
      type:String,  
    },
    username:{
        type:String,
    },
    password:{
       type : String,
    },
    imgProfile:{
        type:String,
    }
},{
    timestamps:true,
})


userSchema.methods.setImgUrl = function setImgUrl(filename){
    this.imgProfile = `${config.host}:${config.port}/public/${filename}`
}

userSchema.methods.isNotImg = function isNotImg(){
    this.imgProfile = `${config.host}:${config.port}/public/${'profileImg.png'}`
}


export default model('User', userSchema);