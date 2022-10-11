"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ArticleController = require('../controllers/ArticleController'); var _ArticleController2 = _interopRequireDefault(_ArticleController);

const routes = _express.Router.call(void 0, );

routes.get('/', _ArticleController2.default.index);

/*
router.get('/articles', new ArticleController().showAll);
router.get('/articles/:id', new ArticleController().showOne);
router.post('/articles', new ArticleController().store);
router.put('/articles/:id', new ArticleController().update);  
router.delete('/articles/:id', new ArticleController().delete);
*/

exports.routes = routes;