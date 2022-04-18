const express = require('express');
const router = express.Router();
const { Client } = require('pg');

const client = new Client({
  user: 'valeria',
  host: 'localhost',
  database: 'steepingtea',
  password: 'password',
  port: 5432,
});
client.connect();

router.get('/', function(req, res) {
  client.query('SELECT * FROM songs', (err, results) => {
    if (err) {
      console.log(err.stack)
    } else {
      return res.json({songs: results.rows})
    }
  })
});

router.post('/', (req, res) => {
  const newSong = {
    artist: req.body.artist,
    title: req.body.title,
    url: req.body.url
  }
  client.query('INSERT INTO songs (artist, title, url) VALUES ($1, $2, $3)',
    [newSong.artist, newSong.title, newSong.url], (err, results) => {
      if (err) {
        console.log(err.stack)
      } else {
        res.status(201)
      }
  })
})

module.exports = router;
