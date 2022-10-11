import { Router } from 'express';
import ArticleController from '../controllers/ArticleController'

const routes = Router();

routes.get('/', ArticleController.index);

/*
router.get('/articles', new ArticleController().showAll);
router.get('/articles/:id', new ArticleController().showOne);
router.post('/articles', new ArticleController().store);
router.put('/articles/:id', new ArticleController().update);  
router.delete('/articles/:id', new ArticleController().delete);
*/

export { routes };