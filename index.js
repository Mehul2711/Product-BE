const express = require('express')
const { globalRouter } = require('./routes/global.routes')
const app = express()
app.use(express.json());
const port = 3000

app.use("/", globalRouter)

app.listen(port, () => {
    console.log(`Our app listening on port.. ${port}`)
})