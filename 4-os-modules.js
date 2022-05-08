const os= require('os')

//info on the user

const user =os.userInfo()
console.log(user)

//System uptime
console.log(os.uptime())

const osInfo={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

}
console.log(osInfo)