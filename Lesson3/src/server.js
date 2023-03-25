import express from "express"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import productRouter from "./router/product.js"
import fileRouter from './router/file.js'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const app = express()
// Body-parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Static file
app.use(express.static("src/public"))

// Router
app.use('/api', productRouter)
app.use('/upload', fileRouter)

// Connect MongoDB
// 1. Cài đặt mongoose
// 2. Connect với MongoDB
// 3. Tạo model
// 4. Query trong controller
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => console.log("Connect to db sucessfully"))

app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "/view/home.html"), "utf-8")
    res.send(html)
    res.end()
})


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})
