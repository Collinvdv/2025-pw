const express = require('express');
const router = express.Router();

// ------------
// Get songs
// ------------
router.get('/', (req, res) => {
  // @todo: link to database
  res.send("[GET] all the songs");
})

// ------------
// Add sonog
// ------------
router.post('/', (req, res) => {
  // @todo: link to database
  res.send("[POST] add new song");
})

// ------------
// Delete song
// ------------
router.delete('/:id', (req, res) => {
  // @todo: link to database
  res.send("[DELETE] delete an song");
})

module.exports = router;
