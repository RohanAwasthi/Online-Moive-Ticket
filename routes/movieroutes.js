const express = require('express')
const router = express.Router()
const {
  getallmovies,
  createMovies
  
  
} = require('../controller/movieControler')
router.post('/add', createMovies)
router.get('/show', getallmovies)

module.exports = router