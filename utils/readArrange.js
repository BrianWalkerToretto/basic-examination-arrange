const xlsx = require('node-xlsx');

module.exports = execlPath => {
  let sheets = xlsx.parse(execlPath);
  let results = [];
	// 遍历 sheet
	sheets.forEach(function(sheet){
    const data = sheet['data'];
    // 第一行：描述（不要）
    data.shift();
    // 行：有效数据
    data.forEach((item) => {
      results.push(item.slice(1));
    });
	});
	return results;
}