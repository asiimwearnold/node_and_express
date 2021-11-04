// working with built in modules Os module

const os = require('os')
// path module
const path = require('path')
// using the FS Module

const fs = require('fs')


// infor about the user

const user = os.userInfo()
console.log(user)

// info abt the current OS

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    CPU: os.cpus()
}
console.log(currentOS)

// Working with path

console.log(path.sep)

const filePath = path.basename()
console.log(filePath)

// the fs()