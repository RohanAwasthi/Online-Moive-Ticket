const mongoose = require('mongoose')

const movieSchema = mongoose.Schema(
  {
    name:{
      type:String,
      required: [true]
    },
    location: {
      type: String,
      required: [true],
    },
    theatre: {
      type: String,
      required: [true],
      unique: true,
    },
    date: {
      type: Date,
      required: [true],
    },
    price:{
        type:Number,
        required:[true],

    },
    count:{
      type:Number,
      required:[true],

    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('movie', movieSchema)