const fs = require('fs')
const data = fs.readFileSync('./sample.json')
// console.log(data)

const dataObj = JSON.parse(data)
// console.log(dataObj)
let users = dataObj.users

users.map(x => {
    if (x.lastName === "mac"){
        x.lastName = "apple"
    }
    // console.log(x)
});
// console.log(dataObj)

const dataStr = JSON.stringify(dataObj);
// console.log(dataStr)
fs.writeFileSync('./outputData.json', dataStr)
