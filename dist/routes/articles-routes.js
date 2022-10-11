"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ArticleController = require('../controllers/ArticleController'); var _ArticleController2 = _interopRequireDefault(_ArticleController);

const router = new (0, _express.Router)()

router.get('/', _ArticleController2.default.index);

exports. default = router;
