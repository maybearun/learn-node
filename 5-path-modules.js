const path=require('path')

console.log(path.sep)

//join the given arguments into a filepath
const filePath=path.join('content/','subfolder/','test.txt')
console.log(filePath)

//retrive the basename of the file
const basename=path.basename(filePath)
console.log(basename)

//print the absolute path 
console.log(path.join(__dirname,filePath))