const {MongoClient} = require('mongodb');
const keys = require('../config/keys');

let database;

// Initialize the database 
const initDb = (callback) => {
    if(database) return callback(null, database)

    MongoClient.connect(keys.MongoURI, {useUnifiedTopology: true})
    .then(client => {
        database = client.db()
        console.log("Connected to the database")
        return callback(null, database)
    })
    .catch(err => {
        return callback(err)
    })
}


// Get database
const getDb = () => {
    if(!database) throw new Error("Database is not initialized")
    return database
}


module.exports = {
    initDb,
    getDb
}