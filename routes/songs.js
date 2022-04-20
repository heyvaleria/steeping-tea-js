const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const { getAudioDurationInSeconds } = require('get-audio-duration');

const client = new Client({
  user: 'valeria',
  host: 'localhost',
  database: 'steepingtea',
  password: 'password',
  port: 5432,
});
client.connect();

const buildSong = (body, duration) => {
  return {
    artist: body.artist,
    title: body.title,
    url: body.url,
    duration: parseInt(duration, 10)
  }
}

const postNewSong = (song) => {
  client.query('INSERT INTO songs (artist, title, url, duration) VALUES ($1, $2, $3, $4)',
    [song.artist, song.title, song.url, song.duration])
}

const showAllSongs = (response) => {
  client
  .query('SELECT * FROM songs')
  .then(results => response.json({songs: results.rows}))
  .catch(e => console.error(e.stack))
}

router.get('/', (request, response) => {
  showAllSongs(response)
});

// promise version
router.post('/', function(req, res) {
  getAudioDurationInSeconds(req.body.url)
  .then(duration => buildSong(req.body, duration))
  .then(postNewSong)
  .catch(e => console.error(e.stack))
})

// async await version
// router.post('/', async (req, res) => {
//   const duration = await getAudioDurationInSeconds(req.body.url)
//   const song = buildSong(req.body, duration)
//   await postNewSong(song)
//   res.send('song added')
// })

module.exports = router;
