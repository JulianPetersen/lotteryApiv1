import Post from '../models/post';

export const findAllPost = async (req,res) => {
    try{
        const posts = await Post.find().sort({createdAt: 'desc'})
        .populate('usuario')
        .populate('category')
        res.json(posts);
    }catch (error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al recuperar Los posteos"
        })
    }
}

export const createPost = async (req,res) => {
    try{
        console.log(req.file);
        const newPost = new Post ({
            description: req.body.description,
            socialLink: req.body.socialLink,
            usuario: req.userId,
            ciudad: req.body.ciudad,
            category: req.body.category,
            imgUrl: req.body.imgUrl
        });
        if(newPost.ciudad === ""){
            newPost.ciudad = "Valido para todas las ciudades"
        }

        const postSaved = await newPost.save();
        res.json(postSaved)
        
    }catch(error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al Crear una tarea."
        });
    }

}

export const findOnePost = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post); 

    }catch(error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al Buscar un posteo."
        })
    }
}


export const deletePost = async (req,res) => {
    try{
        await Post.findByIdAndDelete(req.params.id)
        res.json({
            message:'el posteo fue eliminado correctamente'
        })
    }catch(error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al eliminar la tarea"
        })
    }
}


export const updatePost = async (req,res) => {
    try{
      const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body);
      res.json(updatePost);
    }catch(error){
      res.status(500).json({
          message: error.message || "algo ocurrio mal al Actualizar un Post."
      })
    }
}

export const findPostByUser = async (req,res) => {
    try{
        console.log(req.params.id)
        const post = await Post.find({usuario: req.params.id})
        .populate('usuario');
        res.json(post);
    }catch(error){
        res.status(500).json({
            message:error.message || "algo ocurrio mal al intentar conseguir los post de un usuario"
        })
    }
}

export const findPosByCategory = async (req,res) => {
    try{
        const post = await Post.find({category: req.params.categoryId})
        .populate('category')
        .populate('usuario')
        res.json(post); 

    }catch(error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al Buscar un posteo."
        })
    }
}
