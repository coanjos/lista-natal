const express = require('express');

const giftRouter = require('./routes/giftRoute')

const app = express();

app.use(express.json())
app.use(giftRouter)

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})