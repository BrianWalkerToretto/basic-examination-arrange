const xlsx = require('node-xlsx');
const config  = require('../config.js');

function exclude(arr){
	if(!config.excludeKeyWord){
		return true;
	}
	if(arr.length !== config.table.length){
		return false;
	}
	if(arr.toString().includes(config.excludeKeyWord)){
		return false;
	}
	return true;
}

module.exports = execlPath => {
	let sheets = xlsx.parse(execlPath);
	let execlData = {};
	// 遍历 sheet
	sheets.forEach(function(sheet){
		// 读取那些
	   	if(!config.gradeName.includes(sheet['name'])) return;
	   	let results = [];
	   	const data = sheet['data'];
	   	// 第一行：描述（不要）
	   	data.shift();
	   	// 第二行：表th；col：几大列
	   	const tableLenth = config.table.length;
	   	const col = data[0].length / tableLenth;
	   	if(col%1 !== 0) throw new Error('config的字段table不匹配');
	   	// 第二行：表头（不要）
	   	data.shift();
	   	// 行：有效数据
	   	const row = data.length;
	   	data.forEach((item, index) => {
	       	for(let i=0;i<col;i++){
	       		const arr = item.slice(i * tableLenth, (i + 1) * tableLenth);
	       		if(exclude(arr)){
	       			results[i * row + index] = arr;
	       		}
	       	}
	   	});
	   	execlData[sheet['name']] = results;
	});
	return execlData;
}