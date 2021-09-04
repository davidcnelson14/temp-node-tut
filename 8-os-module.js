// Modules



//const names = require('./4-names')
//const sayHi = require('./5-utils')
//const data = require('./6-alternative-flavor')
//require('./7-mindgrenade')
//console.log(data)
//console.log(names)

//sayHi('susan')
//sayHi(names.john)
//sayHi(names.peter)

const os = require('os')

//info about current user

const user = os.userInfo()


//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)