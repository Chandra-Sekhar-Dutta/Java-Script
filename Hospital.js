const { json } = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

const user = [{
    name: "John",
    kidney: [{
        healthy: true
    }]
}];


app.get('/', (req, res) => {
    const JohnKidneys = user[0].kidney;
    const JohnName = user[0].name
    const JohnHealthyKidney = user[0].kidney[0].healthy
    console.log(JohnName);
    console.log(JohnKidneys);
    console.log(JohnHealthyKidney)

    res.json({
        JohnName,
        JohnKidneys,
        JohnHealthyKidney
    })
})


app.use(express.json())
app.post('/', (req, res) => {
    console.log(req.body)

    const isHealthy = req.body.isHealthy //isHealthy is from the browser, which can also be another name.
    user[0].kidney.push({
        healthy: isHealthy
    })

    res.json({
        msg: "done"
    })
})

app.put('/', (req, res) => {
    for (let i = 0; i < user[0].kidney.length; i++) {
        user[0].kidney[i].healthy = true
    }

    res.json({
        mesg: "Done"
    })
})

app.delete('/', (req, res) => {
    const NewKidney = []
    for (let i = 0; i < user[0].kidney.length; i++) {
        if (user[0].kidney[i].healthy) {
            NewKidney.push({
                healthy: true
            })
        }
    }
    user[0].kidney = NewKidney;

    res.json({
        msg: "done"
    })
})

app.listen(port, () => {
    console.log("Listening")
})