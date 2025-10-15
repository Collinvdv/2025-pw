const express = require('express');
const router = express.Router();

// ------------
// Post a vote
// ------------
router.post('/', (req, res) => {
  // @todo: link to database
  res.send("[POST] a vote");
})

module.exports = router;
