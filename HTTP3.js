const express = require('express');
const port = 3000;

function Add(a, b) {
    return a + b;
}

const app = express();

app.get('/', (req, res) => {
    const A = parseInt(req.query.n, 10); //req.query.n is popular for get request
    const B = parseInt(req.query.m, 10);
    if (!isNaN(A) && !isNaN(B)) {
        const sum = Add(A, B);
        res.send(sum.toString());
        console.log(sum);
    } else {
        res.status(400).send('Invalid numbers provided');
    }
});

app.listen(port, () => {
    console.log("Listening on HTTP port", port);
});