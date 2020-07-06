const router = require('express').Router()
const db = require('../database/database')

router.patch('/updateOne', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .updateOne(
        {name: "Pat Bev"},
        {$inc : {"stats.ppg": -2}}
    )

    res.json({
        results
    })
})


router.patch('/updateMany', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .updateMany(
        {},
        {$unset : {championships: "championshiasdjasdaps"}}
    )

    res.json({
        results
    })
})



module.exports = router