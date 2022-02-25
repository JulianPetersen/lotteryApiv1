import Category from '../models/category';

export const findAllCategory = async (req,res) => {
    try{
        const categorys = await Category.find()
        res.json(categorys);
    }catch (error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al recuperar Las categorias"
        })
    }
}

export const CreateCategory = async (req,res) => {
    try{
        const newCategory = new Category ({
            name: req.body.name,
        });
        const categorytSaved = await newCategory.save();
        res.json(categorytSaved)
        
    }catch(error){
        res.status(500).json({
            message: error.message || "algo ocurrio mal al Crear una categoria."
        })
    }
};