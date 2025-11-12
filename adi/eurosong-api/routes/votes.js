// -------------------------
// Import packages
// -------------------------
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// -------------------------
// [GET] Votes 
// return list of votes
// -------------------------
router.get('/', async(req, res) => {
    const votes = await prisma.votes.findMany();

    res.json(votes);
})
// -------------------------
// [POST] Votes 
// return id (id kan ook null zijn, niet gelukt )
// -------------------------
router.post('/', async (req, res) => {
    const song_id = req.body.song_id;
    const points = req.body.points;

    const newVote = await prisma.votes.create({
        data: {
            song_id: song_id,
            points
        }
    })
    
    res.json(newVote);
})

module.exports = router;
