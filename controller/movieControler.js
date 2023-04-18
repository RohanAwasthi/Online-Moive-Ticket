const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Movies = require('../model/movies')

 const createMovies = asyncHandler(async (req, res) => {
    const {name,location,theatre,date,price,count} = req.body
  
    if (!name|| !location || !theatre || !date || !date || !price || !count) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Check if user exists
    const movieExist = await Movies.findOne({name} && {location})
  
    if (movieExist) {
      res.status(400)
      throw new Error('Movie already exists')
    }
  
/*     // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) */
  
    // Create user
     const movie = await Movies.create({
      name,
      location,
      theatre,
      date,
      price,
      count
    })
  
    if (movie) {
      res.status(201).json({
        _id: movie.id,
        name: movie.name,
        location: movie.location,
        theatre: movie.theatre,
        date:movie.date,
        price:movie.price,
        
      })
    } else {
      res.status(400)
      throw new Error('Invalid movie data')
    }
  })
  

   const getallmovies=async(req,res,next)=>{
    let movie;
  try { 
    movie=await Movies.find();
    
  } catch (error) {
     console.log(error)
  }
  if(!movie){
     return res.status(404).json({message:"No Movies Found"})

  }
  return res.status(200).json({movie});
}




  
  module.exports = {
    getallmovies,
    createMovies
  }
  