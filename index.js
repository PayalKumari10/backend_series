require('dotenv').config()
const express = require('express')     // simple express js style
// import express from "express"     -  module express js style 

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('payalkumaridotcom')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>please click here link for watch this youtube videos</h1>')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login here</h1>')
})





app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})