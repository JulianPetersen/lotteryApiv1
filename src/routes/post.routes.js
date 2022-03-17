import { Router } from "express";

import * as  postCtrl from '../controllers/post.controller';
import * as verify from '../middlewares/verifytoken'
import upload from '../middlewares/multer'


const router = Router();

router.post('/', verify.verifyToken, upload.single('image') ,postCtrl.createPost,)

router.get('/', verify.verifyToken, postCtrl.findAllPost);

router.get('/:id', postCtrl.findOnePost);

router.delete('/:id', verify.verifyToken, postCtrl.deletePost);

router.put('/:id', postCtrl.updatePost);

router.get('/categoryFiltrer/:categoryId', postCtrl.findPosByCategory);

router.get('/userfiltrer/:id', postCtrl.findPostByUser);



export default router;