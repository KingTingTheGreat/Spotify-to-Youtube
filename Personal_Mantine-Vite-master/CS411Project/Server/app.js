const express     = require("express")
const app         = express()
const connnection = require("./database/db")
const routes      = require("./routes/routes")
const playlists   = require('./routes/playlists')

require("dotenv").config()
const port = process.env.PORT || 8081

app.use(express.json());

app.use('/api', routes)
app.use('/playlist', playlists)

connnection();

app.get('/', (req, res) => {
    res.send("hello world! Kashing out");
})

app.listen(port, () => console.log(`listening on port ${port}`));