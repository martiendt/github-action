const express = require('express')
const app = express()
const port = 4999

app.get('/', (req, res) => {
  res.send('Hello to World!')
})

app.listen(port, () => {
  console.log(`Example to app listening on port ${port}`)
})
