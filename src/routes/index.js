const express = require('express')

const router = express.Router();

router.get('/', function(request, response, next) {
  response.status(200).send({
    title: 'Node Express API',
    version: '1.0.0'
  });
});

module.exports = router;

