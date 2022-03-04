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
    this.imgProfile = `https://firebasestorage.googleapis.com/v0/b/lotteryapp-7d8e0.appspot.com/o/Usuarios%2FprofileImg.png?alt=media&token=e28f1155-ea1a-406d-a628-677f65ac0232`
}


export default model('User', userSchema);