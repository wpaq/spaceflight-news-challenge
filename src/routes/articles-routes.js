import { Router } from 'express'
import ArticleController from '../controllers/ArticleController';

const router = new Router()

router.get('/', ArticleController.index);
router.get('/articles', ArticleController.getAllArticles);
router.get('/articles/:id', ArticleController.getOneArticle);
router.post('/store', ArticleController.createArticle);
router.put('/articles/:id', ArticleController.updateArticle);
router.delete('/articles/:id', ArticleController.deleteArticle);

export default router;
