class ArticleController {
  async index (req, res) {
    return res.status(200).json({
      "message": "Back-end Challenge 2021 🏅 - Space Flight News"
    })
  }
}

export default new ArticleController();
