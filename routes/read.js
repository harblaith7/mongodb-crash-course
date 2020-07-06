const router = require('express').Router()
const db = require('../database/database')
const {ObjectID} = require('mongodb')

// Find one
router.get('/findOne', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .findOne(
        {
           name: "kawhi"
        }
    )

    res.json(results)
})

// Find one with ID
router.get('/findOne', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .findOne(
        {
           _id: ObjectID("5effa7562e5c305c90e34cb4")
        }
    )

    res.json(results)
})

// Finding all documents where isInjuried is false
router.get('/find', async (req, res) => {
    let results = await db
    .getDb()
    .collection("players")
    .find(
        {
            isInjuried: false
        }
    )
    .toArray()

    res.json(results)
})

// Finding players averaging greater than 20 points per game
router.get('/greaterThan', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        "stats.ppg" : {$gt: 20}
    })
    .toArray()

    res.json(results)
})

// Finding players averaging greater than or equal to 20 points per game
router.get('/greaterThanOrEqual', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        "stats.ppg" : {$gte: 20}
    })
    .toArray()

    res.json(results)
})

// Finding players averaging less than 20 points per game
router.get('/lessThan', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        "stats.ppg" : {$lt: 20}
    })
    .toArray()

    res.json(results)
})

// Finding players averaging less than or equal to 20 points per game
router.get('/lessThanOrEqual', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        "stats.ppg" : {$lte: 20}
    })
    .toArray()

    res.json(results)
})

// Finding players where the team value matches anything in the array
router.get('/in', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        team : {$in : ['LA Lakers', 'LA Clippers']}
    })
    .toArray()

    res.json(results)
})

// Finding players where the team value doesn't matches anything in the array
router.get('/notIn', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        team : {$nin : ['LA Lakers', 'LA Clippers']}
    })
    .toArray()

    res.json(results)
})

// Finding all players that are averaging greater than 20 points per game 
// and greater than 10 assists per game
router.get('/and', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        $and: [
            {"stats.ppg": {$gt: 20}},
            {"stats.apg": {$gt: 10}}
        ]
    })
    .toArray()

    res.json(results)
})

// Finding all players that are averaging greater than 20 points per game 
// or greater than 10 assists per game
router.get('/or', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        $or: [
            {"stats.ppg": {$gt: 20}},
            {"stats.apg": {$gt: 10}}
        ]
    })
    .toArray()

    res.json(results)
})

// Finding all players that are not averaging greater than 20 points per game 
// or greater than 10 assists per game
router.get('/nor', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        $nor: [
            {"stats.ppg": {$gt: 20}},
            {"stats.apg": {$gt: 10}}
        ]
    })
    .toArray()

    res.json(results)
})

router.get('/elemMatch', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        gamesPlayed: {
            $elemMatch : {
                opponent: "LA Lakers",
                points: {$gte: 20}
            }
        }
    })
    .toArray()

    res.json(results)
})

module.exports = router