import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import productRouter from './routers/product'

const app = express()
const port = 8000

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Connect DB
mongoose.connect("mongodb://127.0.0.1:27017/assignment")
    .then(() => console.log("Connect to DB successfully"))

// Router
app.use('/api', productRouter)

app.listen(port, () => {
    console.log(`Server đang chạy trên port ${port}`)
})
