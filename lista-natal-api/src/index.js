const express = require('express');
const cors = require('cors')

const giftRouter = require('./routes/giftRoute')

const app = express();

app.use(express.json())
app.use(cors())
app.use(giftRouter)


app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})