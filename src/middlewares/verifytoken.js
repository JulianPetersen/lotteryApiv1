import  jwt  from 'jsonwebtoken';

export const verifyToken = (req,res,next) => {
    if (!req.headers.authorization) {
       return res.status(401).send('no tienes acceso a este sitio');
    }
 
    const token = req.headers.authorization.split(' ')[1];
    if(token === 'null'){
     return res.status(401).send('no tienes acceso a este sitio');
    }
 
    const payload = jwt.verify(token, 'secretKey');
    req.userId = payload._id
    next();
 }