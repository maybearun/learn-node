const {readFile}= require('fs')

readFile('./content/subfolder/file1.txt', 'utf8', (err,result)=>{

    if (err){
        console.log(err)
        return
    }
    console.log(result)
}
)
console.log("starting next task")
