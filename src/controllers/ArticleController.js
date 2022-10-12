import Articles from '../models/Articles'

class ArticleController {
  async index (req, res) {
    return res.status(200).json({
      "message": "Back-end Challenge 2021 🏅 - Space Flight News"
    })
  }
  
  async store (req, res) {
    if (!req.body.title) {
      return res.status(400).json({
        "message": "Preencha os dados"
      })
    }
    
    await Articles.create(req.body);
    
    return res.status(200).json({
      "message": "Criado com sucesso"
    })
  }
  
  async show (req, res) {
    const articles = await Articles.find()
    
    return res.status(200).json(articles)
  }
  
  async showOne (req, res) {
    const id = req.params.id
    
    if (!id) {
      return res.status(400).json({
        "message": "Informe o ID"
      })
    }
    
    const article = await Articles.findOne({ _id: id })
    
    if (!article) {
      return res.status(400).json({
        "message": "ID não encontrado"
      })
    }
    
    return res.status(200).json(article)
  }
}

export default new ArticleController();
