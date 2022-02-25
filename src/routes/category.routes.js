import { Router } from "express";

import * as  categoryCtrl from '../controllers/category.controller';
const router = Router();


router.get('/', categoryCtrl.findAllCategory);

router.post('/',categoryCtrl.CreateCategory,);

router.get('/:id', );

router.delete('/:id', );

router.put('/:id',);





export default router;