module.exports = {
  noUseConfigFile: true,
	name: '9', //几年级
	time: '19127', // 9年级1班19年12月7号16考场01考号
  dir: 'test', // 成绩表目录（导入目录）
  result: '七年级月考考场编排', // 导出文件名:七年级月考考场编排-1.xls
	// 工作簿名称 (或 文件名)
	gradeName: ['1班', '2班', '3班', '4班', '5班', '6班', '7班', '8班', '9班'],
  table: ['学号', '姓名', '语文', '数学', '英语', '总分', '校名次', '班名次'],
  // 导入结果
  resultTable: ['姓名', '班级', '考号', '考场号', '座位号'],
  // 读取的文件后缀名
	fileType: ['.xls', '.xlsx'],
	// 包含项
	include: [1],
	// 排除项
	excludeKeyWord: '平均分',
	// 考场数
	room: 16
};