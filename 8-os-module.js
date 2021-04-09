const os=require('os')   //built in module dont require ./

//info about curr info

const user=os.userInfo()

console.log(user)

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime} seconds`)

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);