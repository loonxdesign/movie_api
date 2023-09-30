const express = require('express'),
  morgan = require('morgan'),
  // import built in node modules fs and path 
  fs = require('fs'), 
  path = require('path');

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

// GET requests
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/', (req, res) => {
  res.send('Welcome to myFlix!');
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
