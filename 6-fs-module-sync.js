const fs= require('fs')
const file1=fs.readFileSync('./content/subfolder/file1.txt','utf-8')
const file2=fs.readFileSync('./content/subfolder/file2.txt','utf-8')

console.log(`the contents of file1 are: ${file1}`)

fs.writeFileSync('./content/subfolder/file3.txt',`${file1+file2}`)
const contentfile3=fs.readFileSync('./content/subfolder/file3.txt','utf-8')
console.log(contentfile3)