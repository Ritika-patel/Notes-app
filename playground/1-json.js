const fs = require('fs')
//const book = {
//    title: "Ego is the enemy",
//    author: "Rhyan holiday"
//}

//const bookJSON = JSON.stringify(book)//convert into json string
//fs.writeFileSync('1-json.json', bookJSON)

//const databuffer = fs.readFileSync('1-json.json')
//const dataJSON = databuffer.toString()
//const data = JSON.parse(dataJSON)
//console.log(data.title)

const databuffer = fs.readFileSync('1-json.json')
//console.log(databuffer)
const dataJSON = databuffer.toString()
//console.log(dataJSON)
const output = JSON.parse(dataJSON)//changing toh JS
//console.log(output)

output.name = "ritiii"
output.planet = "pluto"
const outputJSON = JSON.stringify(output)//Changing to JSON
fs.writeFileSync('1-json.json', outputJSON)
