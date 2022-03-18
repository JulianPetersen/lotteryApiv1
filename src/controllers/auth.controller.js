import User from '../models/User';
import  jwt  from 'jsonwebtoken';


export const singUp = async (req,res) => {
    const {email, password, username} = req.body;
    const user = await User.findOne({email})
    if(user){
        res.status(500).json({message: 'El correo electronico ya existe'})
    }else{
        const newUser = new User ({email,password, username});
    if(req.file){
        const{filename} = req.file
        newUser.setImgUrl(filename)
    }
    if(!req.file){
        newUser.isNotImg();
    }
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id }, 'secretKey')
    res.status(200).json({token})
    }
    
}

export const singIn = async  (req,res) => {
    const  { email, password,} = req.body
    const user = await User.findOne({email});
    if(!user) return res.status(401).send('el correo no existe');
    if(user.password !== password) return res.status(401).send('password incorrecto');

    const token = jwt.sign({_id: user._id}, 'secretKey')
    res.status(200).json({
                usuario:{
                    id: user._id
                },
                token});
}

//terminar el updater
export const updateUser = async (req,res) => {
    try{
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
      res.json(updatedUser);
    }catch(error){
      res.status(500).json({
          message: error.message || "algo ocurrio mal al Actualizar una tarea."
      })
    }
  }


  export const finduserById = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user); 

    }catch(error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al Buscar un posteo."
        })
    }
}