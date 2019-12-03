const fs = require('fs');
const xlsx = require('node-xlsx');
const defaultConfig = require('../config/default.js');
const config = require('../config');
const candidateNumber = require('./candidateNumber');

module.exports = data => {
  // 考生安排json数据
  // fs.writeFile(`./${defaultConfig.result}/result.json`, JSON.stringify(data), function (err){
  //   if (err) throw err;
  //   console.log('Write to xls has finished');
  // });
  Array(config.room).fill(1).forEach((item, index) => {
    let xlsxData = {
      name: '' + (index + 1),
      data: [
        config.resultTable,
        ...(data[index] || []).map((item, i) => {
          let arr = [...item];
          let obj = arr.pop();
          // 考号 生成
          arr.push(
            candidateNumber({
              nianji: config.name, 
              banji: obj.banji, 
              time: config.time, 
              kaochang: obj.kaochang, 
              zuowei: i + 1
            })
          );
          arr.push(obj.kaochang)
          arr.push(i + 1);
  
          return arr;
        })
      ]
    };
    const buffer = xlsx.build([xlsxData]);
    const filename = `./${defaultConfig.result}/${config.result}-${index + 1}.xls`;

    fs.writeFile(filename, buffer, function (err){
      if (err) throw err;
      console.log('Write to xls has finished');
    });
  });
}