const fs = require('fs')
const http = require('http')
const formBody = require('body/form')

const postHTML = fs.readFileSync('./input.html')

http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end(postHTML)
    }

    formBody(req, res, function (err, body){
        if (err) {
            res.statusCode = 500
            return res.end('ERR')
        }
        console.log(body.fname)
        res.writeHead(200)
        res.write(`<p>${body.fname} ${body.lname}</p>`)
        res.end(postHTML)
    })
    
}).listen(8080, () => console.log('success...'))