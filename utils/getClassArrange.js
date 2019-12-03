const config = require('../config.js');

module.exports = gradeData => {
  // 计算 
  let row = config.gradeName.length; // 行：该年级班级数
  let col = config.room; // 列：该年级考场数
  let arr = Array.from({length: row}); // 考试考场安排
  let i = 0;
  Object.entries(gradeData).forEach((item, index) => {
    let num = item[1].length / config.room | 0; // 某班平均考场人数（最低）
    let start = i;
    let end = i + item[1].length % config.room; // 剩余人数
    arr[index] = Array(col).fill(num).fill(num + 1, start, end);
    if(end > col){
      arr[index].fill(num+1, 0, end % col);
    }
    i = end % col;
    console.log(item[0], `${item[1].length}人`, `每考场：${item[1].length / config.room | 0}人`,`余：${item[1].length % config.room}`);
  });
  return arr;
}