// Import modules
const express = require('express'),
  morgan = require('morgan'),
  // import built in node modules fs and path 
  fs = require('fs'), 
  path = require('path'),
  // import body-parser & uuid
  bodyParser = require('body-parser'),
  uuid = require('uuid');

const app = express();


// a ‘log.txt’ file is created in root directory
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

// Morgan log all requests
app.use(morgan('combined', {stream: accessLogStream}))

// Serving Static Files
app.use(express.static('public'));

// Top 10 Movies
let topMovies = [
  {
    title: 'Castle in the Sky',
    director: 'Hayao Miyazaki',
  },
  {
    title: 'Kiki\'s Delivery Service',
    director: 'Hayao Miyazaki',
  },
  {
    title: 'Whisper of the Heart',
    director: 'Yoshifumi Kondō',
  },
  {
    title: 'Princess Mononoke',
    director: 'Hayao Miyazaki',
  },
  {
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
  },
  {
    title: 'Howl\'s Moving Castle',
    director: 'Hayao Miyazaki',
  },
  {
    title: 'Tales from Earthsea',
    director: 'Gorō Miyazaki',
  },
  {
    title: 'Ponyo',
    director: 'Hayao Miyazaki',
  },
  {
    title: 'Arrietty',
    director: 'Hiromasa Yonebayashi',
  },
  {
    title: 'From Up on Poppy Hill',
    director: 'Gorō Miyazaki',
  },
];

// Return Welcome Page
app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
});

// Return a list of ALL movies
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// Return data about a single movie by title
app.get('/movies/:title', (req, res) => {
  res.json(topMovies.find((movie) =>
  { return movie.title === req.params.title}));
});

// Return data about a genre by name
app.get('movies/genres/:genreName', (req, res) => {
  res.send('A JSON object holding data about a genre containing name and description properties.');
});

// Return data about a director by director's name
app.get('movies/directors/:directorName', (req, res) => {
  res.send('A JSON object holding data about a director containing name, bio, birth year, and death year properties.');
});

// Allow new users to register
app.post('/users', (req, res) => {
  res.send('A JSON object holding user data containing id, username, password, email, and birthday properties and an array for placing favourite movies.');
});

// Allow users to update their user info
app.put('/users/:username', (req, res) => {
  res.send('A JSON object holding updated user data containing id, username, password, email, and birthday properties and an array for placing favourite movies.');
});

// Allow users to add a movie to their list of favourites
app.post('/users/:username/movies/:title', (req, res) => {
  res.send('A JSON object holding updated user data containing id, username, password, email, and birthday properties and an array for placing favourite movies.');
});

// Allow users to remove a movie from their list of favourites
app.delete('/users/:username/movies/:title', (req, res) => {
  res.send('A JSON object holding updated user data containing id, username, password, email, and birthday properties and an array for placing favourite movies.');
});

// Allow existing users to deregister
app.delete('/users/:username', (req, res) => {
  res.send('A text message indicating whether a user was successfully removed.');
});

// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// listen for requests
app.listen(8080, () => {
  console.log('The movie app is listening on port 8080.');
});
