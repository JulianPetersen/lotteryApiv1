import {Router} from "express";
const router = Router();
import * as  igcomment from '../controllers/igcomment.controller';

router.get('/:id', igcomment.getcomment );




export default router;