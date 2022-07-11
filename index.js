const express = require('express');
const cors = require('cors');
const app = express()

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const db = require('./models')

db.sequelize.sync().then(() => {
    console.log('Database has been synced')
}).catch(err => {
    console.log(err)
})

require('./routes/routes')(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})