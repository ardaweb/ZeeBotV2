const fs = require("fs")


exports.ban = JSON.parse(fs.readFileSync('./database/banned.json'))
