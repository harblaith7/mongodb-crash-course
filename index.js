const express = require('express')
const db = require('./database/database')

const app = express()


app.get("/", (req, res) => {
    res.send("Bye there!!!")
})




db.initDb((err, db) => {
    if(err){
        console.log(err)
    } else {
        app.listen(5000, () => {
            console.log("Now listening to port 5000")
        })
    }
})