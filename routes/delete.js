const router = require('express').Router()
const db = require('../database/database')

router.delete('/deleteOne', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
     .deleteOne({
         name: "Pat Bev"
     })

    res.json({
        results
    })
})

router.delete('/deleteMany', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
     .deleteMany({})

    res.json({
        results
    })
})



module.exports = router