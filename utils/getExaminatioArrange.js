const config = require('../config');

function readInlcudeValue(arr){
  const newArr = config.include.reduce((result, index) => {
    result.push(arr[index]);

    return result;
  }, []);
  // 保留新增项
  newArr.push(...arr.slice(config.table.length));
  return newArr;
}

module.exports = (gradeData, arr) => {
  let data = []
	// 考场数：config.room
	for(let i=0;i<config.room;i++){
		let mm = []
		//班级数：config.gradeName.length
		for(let j=0;j< config.gradeName.length;j++){
			let an = gradeData[config.gradeName[j]];
			for(let n=0;n<arr[j][i];n++){
        // 偏移量
				let offset = arr[j].reduce((result, item, index) => {
					if(index<i){result += item;} return result;
				}, 0);
				mm[config.gradeName.length * n  + j] =  an[n + offset];
				// 班级
				mm[config.gradeName.length * n  + j].push(config.gradeName[j]);
				// 对象
				mm[config.gradeName.length * n  + j].push({
					banji: (j + 1), // 班级
					kaochang: i + 1 // 考场号
				});
			};
		}
		data[i] = mm.reduce((result, item)=> {
			item && result.push(readInlcudeValue(item));
			return result;
		},[]);
  }
  return data;
}