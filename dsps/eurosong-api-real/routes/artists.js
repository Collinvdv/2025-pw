const express = require('express');
const router = express.Router();

// ------------
// Get artist
// ------------
router.get('/', (req, res) => {
  // @todo: link to database
  res.send("[GET] all the artists");
})

// ------------
// Add artist
// ------------
router.post('/', (req, res) => {
  // @todo: link to database
  res.send("[POST] add new artist");
})

// ------------
// Delete artist
// ------------
router.delete('/:id', (req, res) => {
  // @todo: link to database
  res.send("[DELETE] delete an artist");
})

// ------------
// Update artist
// ------------
router.put('/:id', (req, res) => {
  // @todo: link to database
  res.send("[PUT] update an artist");
})

module.exports = router;
