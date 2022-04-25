


const fetchInstagram = require("webscraper_for_instagram");


export const getcomment = async (req,res,reject) => {
    try{
        const post = await fetchInstagram(`https://www.instagram.com/p/${req.params.id}/`);
        res.send(post);
    }catch(error){
        res.status(500).json({message:'su link no corresponde a un sorteo de instagram'});
    }
    
}