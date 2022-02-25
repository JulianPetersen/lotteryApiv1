import User from '../models/User';
import  jwt  from 'jsonwebtoken';


export const singUp = async (req,res) => {
    const {email, password, username} = req.body;
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

export const singIn = async  (req,res) => {
    const  { email, password,} = req.body
    const user = await User.findOne({email});
    if(!user) return res.status(401).send('el correo no existe');
    if(user.password !== password) return res.status(401).send('password incorrecto');

    const token = jwt.sign({_id: user._id}, 'secretKey')
    res.status(200).json({token});
}

//terminar el updater
export const updateUser = async (req,res) => {
    try{
        console.log(req.file.filename);
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
          email: req.body.email,
          password: req.body.password,
          imgProfile: `${'http://localhost'}:${'3000'}/public/${req.file.filename}`,
          username: req.body.username
          
      });
      res.json(updatedUser);
    }catch(error){
      res.status(500).json({
          message: error.message || "algo ocurrio mal al Actualizar una tarea."
      })
    }
  }
