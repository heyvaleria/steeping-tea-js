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
router.post('/', function(request, response) {
  getAudioDurationInSeconds(request.body.url)
  .then(duration => buildSong(request.body, duration))
  .then(postNewSong)
  .catch(e => console.error(e.stack))
})

// async await version
// router.post('/', async (request, response) => {
//   const duration = await getAudioDurationInSeconds(request.body.url)
//   const song = buildSong(request.body, duration)
//   await postNewSong(song)
//   response.send('song added')
// })

module.exports = router;
