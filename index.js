const path = require('path');
// 此方法用于生成导出文件夹
const generateFolder = require('./method/generateFolder.js');
generateFolder();

// 配置文件
const config = require('./config.js');

// 方法：
const readFile = require('./utils/readFiles.js');
const execl = require('./method/execl.js');
const files = readFile(path.join(`${__dirname}/${config.dir}`), config.fileType); // execl路径
const gradeData = execl(files); // execl数据

// 计算：每个班级在每个考场的人数安排
const readArrange = require('./utils/readArrange');
const getClassArrange = require('./utils/getClassArrange'); 
const arr = config.noUseConfigFile ? getClassArrange(gradeData) : readArrange(path.join(`${__dirname}/arrange.xls`));
console.log(arr);

// 计算：每个考场的学生安排
const getExaminatioArrange = require('./utils/getExaminatioArrange'); 
const resultData = getExaminatioArrange(gradeData, arr);

// 生成考场安排
const generateFolderExecl = require('./method/generateExecl'); 
generateFolderExecl(resultData);












