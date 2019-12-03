const fs = require('fs');
const path = require('path');
const defaultConfig = require('../config/default.js');
const folder = path.join(__dirname, '../', defaultConfig.result);

module.exports = () => {
  const isExist = fs.existsSync(folder);
  if(!isExist){
    fs.mkdirSync(folder);
  }
}