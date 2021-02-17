const db = require('../models')
const book = db.Book

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
    
  },

  get: async(req, res) => {
    
  },

  create: async(req, res) => {
    
  },

  update: async(req, res) => {
    
  },

  delete: async(req, res) => {
    
  }
}