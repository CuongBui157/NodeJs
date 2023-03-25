//Modules
const fs = require('fs')
const http = require('http')

//Create a webserver
const server = http.createServer((request, response) => {
    //Header
    response.writeHead(200, {
        "Content-Type": "text/plain",
    })
    response.write("Hello mấy cưng")
    response.end()
})

server.listen(8000, () => {
    console.log("Server running at port 8000")
})