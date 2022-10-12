import { Router } from 'express'
import ArticleController from '../controllers/ArticleController';

const router = new Router()

router.get('/', ArticleController.index);
router.get('/articles', ArticleController.show);
router.get('/articles/:id', ArticleController.showOne);
router.post('/store', ArticleController.store);

export default router;
