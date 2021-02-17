const express = require('express')
const router = express.Router()

const book = require('../controllers/book')

router.route('/test')
      .get(book.test)

router.route('/')
      .get(book.list)

router.route('/:id')
      .get(book.get)

router.route('/')
      .post(book.create)

router.route('/:id')
      .put(book.update)

router.route('/:id')
      .delete(book.delete)

module.exports = router