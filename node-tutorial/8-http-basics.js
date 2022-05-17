const http = require('http')

const server= http.createServer((req,res)=>{
    console.log(req)
    if (req.url==='/home'){
        res.end('this is the home page')
    }
    if (req.url==='/'){

        res.end('Welcome to node web')
    }
})

server.listen(5000)