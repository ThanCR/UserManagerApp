const express = require('express')
const authorizationRouter = require('./routes/authorization.routes')
const app = express()
const port = 3000

//middlewares
app.use(express.json()); //accepts application/json

app.use('/', authorizationRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
