import express from 'express'
import config from './config.mjs'

const app = express()
const port = config.port

app.get('/', (req, res) => {
  res.send('success')
})

app.get('/:name/:width/:height/:path', (req, res) => {
  const { name, width, height, path } = req.params
})

app.listen(port, () => {
  console.log('The server has been run!')
})
