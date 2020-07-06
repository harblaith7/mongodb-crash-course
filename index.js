const express = require('express')
const db = require('./database/database')

const app = express()


// Routes
app.use('/api', require('./routes/create'))
app.use('/api', require('./routes/read'))
app.use('/api', require('./routes/update'))
app.use('/api', require('./routes/delete'))

db.initDb((err, db) => {
    if(err){
        console.log(err)
    } else {
        app.listen(5000, () => {
            console.log("Now listening to port 5000")
        })
    }
})