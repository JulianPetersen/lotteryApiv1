import {Router} from "express";
const router = Router();
import upload from '../middlewares/multer'
import * as  authCrtl from '../controllers/auth.controller';


router.post('/', upload.single('image'), authCrtl.singUp, )

router.post('/singin', authCrtl.singIn)

router.put('/:id', upload.single('image'), authCrtl.updateUser )


export default router;