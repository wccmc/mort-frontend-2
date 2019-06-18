const express = require('express')
const app = express()

// app.use() // Add static file here
app.use(express.static(`${__dirname}/../build`))

const PORT = 4545;
app.listen(PORT, () => console.log(`serving up on ${PORT}`))