const {writeFileSync}= require('fs')

for (i=0;i<1000;i++){
    writeFileSync('./content/subfolder/bigfile.txt',`line ${i}`,{flag:'a'})
}