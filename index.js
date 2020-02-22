const algoliasearch = require("algoliasearch");

const client = algoliasearch("02OKY2C6R2", "01c815a955a2b685b26f21de9c2ab8b3");
const index = client.initIndex("demo");

const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001
app.use(cors())

app.get('/', (req, res) => {
    const { text } = req.query;
    index
        .search(text)
        .then(({ hits }) => {
            res.send(hits)
        })
        .catch(err => {
            console.log(err);
        });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))