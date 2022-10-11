"use strict";Object.defineProperty(exports, "__esModule", {value: true});class ArticleController {
  async index (req, res) {
    return res.status(200).json({
      "message": "Back-end Challenge 2021 🏅 - Space Flight News"
    })
  }
}

exports. default = new ArticleController();
