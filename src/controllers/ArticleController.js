class ArticleController {
  async index (req, res) {
    return res.status(200).json({
      "message": "Back-end Challenge 2021 🏅 - Space Flight News"
    })
  }
  
  async showAll (req, res) {
    const articles = await Article.findAll();
    
    return res.status(200).json(articles)
  }
}

export default new ArticleController();
