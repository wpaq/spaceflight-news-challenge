import { Router } from 'express'
import ArticleController from '../controllers/ArticleController';

const router = new Router()

router.get('/', ArticleController.index);

export default router;
