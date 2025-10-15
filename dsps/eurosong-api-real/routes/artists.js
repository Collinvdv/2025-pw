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
// [POST ]Add artist
// Accept JSON { "name" : "dj name"}
// return succes
// ------------
router.post('/', async(req, res) => {
  // Check if artist with a name is already in the database
  // similar as SELECT * FROM Artists WHERE name LIKE 'dj ghost'
  const checkArtist = await prisma.artists.findMany({
    where: {
      name: req.body.name
    }
  });

  // If multiple artists it means it is already existing and I don't want to create a new one 
  if (checkArtist.length > 0) {
    res.json(
      {
        "status": "Artist name already existing"
      }
    )
  } else {
      const newArtist = await prisma.artists.create({
        data: {
          name: req.body.name
        }
      });

      res.json(newArtist);
  }
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
