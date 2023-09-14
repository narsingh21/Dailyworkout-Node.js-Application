const { json } = require('body-parser')
const fs = require('fs')

const saveToDatabase=(DB)=>{
  fs.writeFileSync('./src/database/db.json', json.stringify(DB,null,2),{encoding:"utf-8"})
}
module.export ={saveToDatabase}