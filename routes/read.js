const router = require('express').Router()
const db = require('../database/database')
const {ObjectID} = require('mongodb')

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

router.get('/comparisonOperators', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        team : {$nin : ['LA Lakers', 'LA Clippers']}
    })
    .toArray()

    res.json(results)
})


router.get('/logicalOperators', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .find({
        $or: [
            {$and: [
                {"stats.ppg": {$gte: 10}},
                {"stats.apg": {$gte: 10}}
            ]},
            {$and: [
                {"stats.ppg": {$gte: 10}},
                {"stats.rbg": {$gte: 10}}
            ]},
            {$and: [
                {"stats.apg": {$gte: 10}},
                {"stats.rbg": {$gte: 10}}
            ]}
        ]
    })
    .toArray()

    res.json(results)
})

module.exports = router