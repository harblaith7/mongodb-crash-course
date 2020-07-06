const router = require('express').Router()
const db = require("../database/database")

// Inserting one document
router.post('/insertOne', async (req, res) => {
    let results = await db
    .getDb()
    .collection('players')
    .insertOne({
        name: "Kawhi",
        number: 2,
        isInjuried: false,
        stats: {
            ppg: 25.4,
            rbg: 12.2,
            apg: 5.2
        }
    })

    res.json(results)
})

// Inserting many documents
router.post('/insertMany', async (req, res) => {
    let results = await db
    .getDb()
    .collection("players")
    .insertMany([
        {
            name: "Lou Williams",
            number: 13,
            team: "LA Clippers",
            stats : {
                ppg: 20.33,
                rbg: 5.5,
                apg: 7.5
            },
            gamesPlayed: [
                {
                    opponent: "LA Lakers",
                    points: 22,
                    rebounds: 5,
                    assist: 5
                },
                {
                    opponent: "OKC Thunder",
                    points: 15,
                    rebounds: 5,
                    assist: 8
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 16,
                    rebounds: 4,
                    assist: 6
                },
                {
                    opponent: "Houston Rockets",
                    points: 28,
                    rebounds: 3,
                    assist: 7
                }
            ]
        },
        {
            name: "CJ Mccollum",
            number: 0,
            team: "Portland Trailblazers",
            stats : {
                ppg: 22.43,
                rbg: 10.5,
                apg: 7.5
            },
            gamesPlayed: [
                {
                    opponent: "Washington Wizards",
                    points: 26,
                    rebounds: 4,
                    assist: 6
                },
                {
                    opponent: "Orlando Magic",
                    points: 18,
                    rebounds: 12,
                    assist: 5
                },
                {
                    opponent: "Miami Heat",
                    points: 25,
                    rebounds: 4,
                    assist: 4
                },
                {
                    opponent: "Houston Rockets",
                    points: 28,
                    rebounds: 4,
                    assist: 10
                }
            ]
        },
        {
            name: "Chris Paul",
            number: 0,
            team: "OKC Thunder",
            stats : {
                ppg: 18.33,
                rbg: 4.5,
                apg: 10.5
            },
            gamesPlayed: [
                {
                    opponent: "Washington Wizards",
                    points: 25,
                    rebounds: 0,
                    assist: 15
                },
                {
                    opponent: "Orlando Magic",
                    points: 12,
                    rebounds: 3,
                    assist: 7
                },
                {
                    opponent: "LA Clippers",
                    points: 20,
                    rebounds: 4,
                    assist: 12
                },
                {
                    opponent: "GSW",
                    points: 28,
                    rebounds: 4,
                    assist: 7
                }
            ]
        },
        {
            name: "Pat Bev",
            number: 0,
            team: "LA Clippers",
            stats : {
                ppg: 13.33,
                rbg: 5.5,
                apg: 6.5
            },
            gamesPlayed: [
                {
                    opponent: "LA Lakers",
                    points: 2,
                    rebounds: 5,
                    assist: 5
                },
                {
                    opponent: "OKC Thunder",
                    points: 15,
                    rebounds: 2,
                    assist: 5
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 23,
                    rebounds: 3,
                    assist: 4
                },
                {
                    opponent: "Houston Rockets",
                    points: 8,
                    rebounds: 6,
                    assist: 2
                }
            ]
        },
        {
            name: "Carmelo Anthony",
            number: 13,
            team: "Portland Trailblazers",
            stats : {
                ppg: 24.33,
                rbg: 6.7,
                apg: 4.5
            },
            gamesPlayed: [
                {
                    opponent: "Washington Wizards",
                    points: 23,
                    rebounds: 2,
                    assist: 5
                },
                {
                    opponent: "Orlando Magic",
                    points: 12,
                    rebounds: 2,
                    assist: 2
                },
                {
                    opponent: "Miami Heat",
                    points: 20,
                    rebounds: 4,
                    assist: 4
                },
                {
                    opponent: "Houston Rockets",
                    points: 18,
                    rebounds: 4,
                    assist: 7
                }
            ]
        },
        {
            name: "Andre Igudala",
            number: 0,
            team: "Miami Heat",
            stats : {
                ppg: 9.33,
                rbg: 3.5,
                apg: 3.5
            },
            gamesPlayed: [
                {
                    opponent: "LA Lakers",
                    points: 6,
                    rebounds: 6,
                    assist: 5
                },
                {
                    opponent: "Detroit Pistons",
                    points: 12,
                    rebounds: 4,
                    assist: 5
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 4,
                    rebounds: 3,
                    assist: 4
                },
                {
                    opponent: "Atlanta Hawks",
                    points: 19,
                    rebounds: 8,
                    assist: 2
                }
            ]
        },
        {
            name: "Stephen Curry",
            number: 0,
            team: "GSW",
            stats : {
                ppg: 29.33,
                rbg: 13.5,
                apg: 7.5
            },
            gamesPlayed: [
                {
                    opponent: "OKC Thunder",
                    points: 27,
                    rebounds: 4,
                    assist: 12
                },
                {
                    opponent: "Sacremento Kings",
                    points: 23,
                    rebounds: 5,
                    assist: 7
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 29,
                    rebounds: 2,
                    assist: 7
                },
                {
                    opponent: "Houston Rockets",
                    points: 31,
                    rebounds: 0,
                    assist: 14
                }
            ]
        },
        {
            name: "Klay Thompson",
            number: 0,
            team: "GSW",
            stats : {
                ppg: 22.33,
                rbg: 6.5,
                apg: 1.5
            },
            gamesPlayed: [
                {
                    opponent: "OKC Thunder",
                    points: 22,
                    rebounds: 2,
                    assist: 5
                },
                {
                    opponent: "Sacremento Kings",
                    points: 60,
                    rebounds: 5,
                    assist: 3
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 22,
                    rebounds: 3,
                    assist: 4
                },
                {
                    opponent: "Houston Rockets",
                    points: 18,
                    rebounds: 4,
                    assist: 7
                }
            ]
        },
        {
            name: "Draymond Green",
            number: 0,
            team: "GSW",
            stats : {
                ppg: 13.33,
                rbg: 13.5,
                apg: 7.5
            },
            gamesPlayed: [
                {
                    opponent: "OKC Thunder",
                    points: 12,
                    rebounds: 12,
                    assist: 7
                },
                {
                    opponent: "Sacremento Kings",
                    points: 6,
                    rebounds: 10,
                    assist: 6
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 7,
                    rebounds: 5,
                    assist: 4
                },
                {
                    opponent: "Houston Rockets",
                    points: 12,
                    rebounds: 12,
                    assist: 7
                }
            ]
        },
        {
            name: "Anthony Davis",
            number: 2,
            team: "LA Lakers",
            stats : {
                ppg: 29.33,
                rbg: 13.5,
                apg: 7.5
            },
            gamesPlayed: [
                {
                    opponent: "LA Clippers",
                    points: 26,
                    rebounds: 12,
                    assist: 3
                },
                {
                    opponent: "Chicago Bulls",
                    points: 27,
                    rebounds: 12,
                    assist: 2
                },
                {
                    opponent: "Portland Trailblazers",
                    points: 27,
                    rebounds: 15,
                    assist: 6
                },
                {
                    opponent: "Miami Heat",
                    points: 19,
                    rebounds: 12,
                    assist: 3
                }
            ]
        },
        {
           name: "Russell Westbrook",
           number: 0,
           team: "Houston Rockets",
           stats : {
            ppg: 24.33,
            rbg: 10.5,
            apg: 10.5
          },
          gamesPlayed: [
            {
                opponent: "Milwaukee Bucks",
                points: 22,
                rebounds: 10,
                assist: 13
            },
            {
                opponent: "Phoenix Suns",
                points: 18,
                rebounds: 12,
                assist: 21
            },
            {
                opponent: "Portland Trailblazers",
                points: 47,
                rebounds: 15,
                assist: 6
            },
            {
                opponent: "Cleveland Cavaliers",
                points: 9,
                rebounds: 2,
                assist: 3
            }
        ]
        }
    ], {ordered: false})

    res.json(results)

})


module.exports = router