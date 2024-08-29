const express = require('express')
const app = express()
const port = 3000

app.get("/route-handler", (req, res) => {
    res.json({
        name: "Chandra",
        age: 23
    })
})

app.listen(port, () => {
    console.log("Listening");
})