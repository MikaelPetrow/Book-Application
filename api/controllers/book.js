const db = require('../models')
const Book = db.Book

module.exports = {
  test: async(req, res) => {
    try {
      await db.sequelize.authenticate();
      let message = 'Connection has been established successfully.'
      console.log('Connection has been established successfully.');
      res.json(message)

    } catch (error) {
      console.error('Unable to connect to the database:', error);
      res.json(error)
    }
  },

  list: async(req, res) => {
    const books = await Book.findAll({})
    res.json(books)
  },

  get: async(req, res) => {
    const { id } = req.params
    const book = await Book.findOne({
      where: { id: id }
    })
    res.json(book)
  },

  create: async(req, res) => {
    const { title, author, description } = req.body
    const newBook = await Book.create({
      title: title,
      author: author,
      description: description
    })
    const book = await Book.findOne({
      where: { id: newBook.id }
    })
    res.json(book)
  },

  update: async(req, res) => {
    const { title, author, description } = req.body
    const { id } = req.params
    await Book.update({
      title: title,
      author: author,
      description: description
    }, { where: { id: id } })
    const book = await Book.findOne({
      where: { id: id }
    })
    res.json(book)
  },

  delete: async(req, res) => {
    const { id } = req.params
    await Book.destroy({
      where: { id: id }
    })
    res.json({message: 'deleted'})
  }
}