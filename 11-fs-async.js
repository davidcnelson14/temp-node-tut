
//seems to indicate that we only needed two methods from this module
const { readFile, writeFile} = require('fs')

//This callback function states that after the file is read, the callback function will be executed
readFile('./content/first.txt', 'utf8', (err,result)=>{
if(err) {
    console.log(err)
    return
} 

    console.log(result)

})