const http= require('http')
let port= 5000
const server=http.createServer((req,res)=>{
    console.log('server')
    res.end('serving')
})

server.listen(port,()=>{
    console.log(`server running on port ${port}` )
})