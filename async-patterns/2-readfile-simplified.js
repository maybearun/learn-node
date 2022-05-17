const {readFile, writeFile}= require('fs').promises

const readAsyncAwait=async()=>{
    try {
        let firstFile= await readFile('./content/subfolder/file1.txt','utf-8')
        let secondFile= await readFile('./content/subfolder/file2.txt','utf-8')
        await writeFile('./content/subfolder/file3.txt','this is .promises async await dude and its awesome',{'flag':'a'})
        let thirdFile= await readFile('./content/subfolder/file3.txt','utf-8')

        console.log(firstFile, secondFile, thirdFile)
    } catch (error) {
        console.log(error)
    }
}

readAsyncAwait()


// this method uses the utils method for async file read and write
// const util= require('util')

// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

// const readAsyncAwait=async()=>{
//     try {
//         let firstFile= await readFilePromise('./content/subfolder/file1.txt','utf-8')
//         let secondFile= await readFilePromise('./content/subfolder/file2.txt','utf-8')
//         await writeFilePromise('./content/subfolder/file3.txt','this is built in async await dude and its awesome',{'flag':'a'})
//         let thirdFile= await readFilePromise('./content/subfolder/file3.txt','utf-8')

//         console.log(firstFile, secondFile, thirdFile)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readAsyncAwait()

// this is the method using promises

// const read=(path)=>{
//    return new Promise((resolve,reject)=>{

//        readFile(path,'utf8',(err,result)=>{
//            if (err){
//                reject(err)
//            }else{
//                resolve(result)
//            }
       
//        })
//     })
// }

// read('./content/subfolder/file1.txt').then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })