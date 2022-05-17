//this peice of code demonstrates how a blocking code can make the whole system wait till the blocking code finishes executing

const http = require('http')

const server= http.createServer((req,res)=>{

if (req.url=== '/'){
    res.end('home page')
}

if (req.url=== '/about'){
    for(i=0;i<10000;i++){
        for (j=0;j<1000;j++){

            console.log(`${i}, ${j}`)
        }
    }
    res.end('about page')
}
    res.end('404 not found')
})

server.listen(5000,()=>{
    console.log('server listening at prot 5000')
})