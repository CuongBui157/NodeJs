const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const data = [
    { id: 1, name: "Mouse", price: "100" },
    { id: 2, name: "Keyboard", price: "200" },
    { id: 3, name: "Screen", price: "500" },
]

//Routings
app.get('/', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8")
    res.send(html)
})

app.get('/products', (req, res) => {
    res.send(data)
})

// Get product by ID
app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const product = data.find((item) => item.id == id)
    if (product) {
        res.send(product)
    } else {
        res.status(400).send("San pham khong ton tai!")
    }
})

// Add
app.get('/product/add', (req, res) => {
    const html = fs.readFileSync(path.join(__dirname, "productAdd.html"), "utf-8")
    res.send(html)
})

app.post('/products', (req, res) => {
    const newData = req.body
    data.push(newData)
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server is running with port ${port}`)
})