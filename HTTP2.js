const express = require('express');
const BodyParser = require('body-parser')
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('<b>Hi there</b>');
});

app.post('/', (req, res) => {
    console.log(req.headers)
    console.log(req.headers["authorization"]);
    res.send("2+2=4")
})

app.listen(port, () => {
    console.log("Listening on port", port);
});