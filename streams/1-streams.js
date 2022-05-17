const {createReadStream}= require('fs')

//this is for creating the file that is read using the stream
// const {writeFileSync}= require('fs')

// for (i=0;i<1000;i++){
//     writeFileSync('./content/subfolder/bigfile.txt',`line ${i}`,{flag:'a'})
// }

const stream=createReadStream('./content/subfolder/bigfile.txt')
stream.on('data',(result)=>{
    console.log(result)
})