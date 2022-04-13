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


router.get('/v1/songs', function(req, res, next) {
  client.query('SELECT * FROM songs', (err, response) => {
    if (err) {
      console.log(err.stack)
      // make me better eventually
    } else {
      return res.json({songs: response.rows})
    }
  })
});

module.exports = router;
