const express = require('express')
const router = require('./config/routes')
const cors = require('cors')

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

router(app)

app.listen(port, () => {
    console.log(`m8nodemongodb app running. Listening on ${port}`);
});