/**
 * Module for defining Mongoose models and schemas
 */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * Schema for movies
 */
let movieSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Year: { type: String, required: true },
  Description: { type: String, required: true },
  Genres: {
    Name: String,
    Description: String,
  },
  Director: {
    Name: String,
    Bio: String,
    Birth: String,
    Death: String,
  },
  ImagePath: String,
});

/**
 * Schema for users
 */
let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

/**
 * Static method to hash a password
 */
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

/**
 * Method to validate a password
 */
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
};

// Models
let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;
