import Articles from '../models/Articles'

class ArticleController {
  async index (req, res) {
    return res.status(200).json({
      "message": "Back-end Challenge 2021 🏅 - Space Flight News"
    })
  }
  
  async createArticle (req, res) {
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
  
  async getAllArticles (req, res) {
    const articles = await Articles.find()
    
    return res.status(200).json(articles)
  }
  
  async getOneArticle (req, res) {
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
  
  async updateArticle (req, res) {
    const id = req.params.id
    
    if (!id) {
      return res.status(400).json({
        "message": "Provide the ID"
      })
    }
    
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        "message": "Provide camps"
      })
    }
    
    const article = await Articles.findOne({ _id: id })
    
    if (!article) {
      return res.status(400).json({
        "message": "ID not found"
      })
    }
    
    await Articles.findByIdAndUpdate({ _id: id }, req.body)
    
    return res.status(200).json({
      "message": "Successfully Updated"
    })
  }
  
  async deleteArticle (req, res) {
    const id = req.params.id
    
    if (!id) {
      return res.status(400).json({
        "message": "Provide ID"
      })
    }
    
    await Articles.findByIdAndDelete({ _id: id })

    return res.status(200).json({
      "message": "Successfully Deleted"
    })
  }
}

export default new ArticleController();
