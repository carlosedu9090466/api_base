const express = require('express')
const cors = require('cors')
const router = require("./src/routes/")
const app = express()
const dotenv = require("dotenv")

app.use(cors())
app.use(express.json())
app.use(router)

dotenv.config()

app.listen(process.env.PORT_SERVER, () => {
    console.log(`Api rodando na porta ${process.env.PORT_SERVER}!`)
})


