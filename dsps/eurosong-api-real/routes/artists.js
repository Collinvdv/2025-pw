const express = require('express');
const router = express.Router();

// we will use the prisma client to connect with the database
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// ------------
// Get artist
// ------------
router.get('/', async (req, res) => {
  let artists = await prisma.artists.findMany();
  res.json(artists);
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
