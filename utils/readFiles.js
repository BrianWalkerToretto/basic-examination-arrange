const path = require("path");
const fs = require("fs");

function isFileType(filename, fileType){
  return !fileType.some(type => filename.endsWith(type));
}

/*
未做处理的：fileType为空数组的情况下
*/
module.exports = (pathName, fileType = []) => {
  let dirs = [];
  let files = [];
  try{
    files = fs.readdirSync(pathName);
  }catch(err){
    return dirs;
  }
  files.forEach(file => {
    // 排除无用文件
    if(!file || file.startsWith('.')){
      return;
    }
    // 排除非fileType文件
    if(isFileType(file, fileType)){
      return;
    }
    const filePath = path.join(pathName, file);
    const fileInfo = fs.statSync(filePath);
    if(fileInfo.isFile()){               
      dirs.push(filePath);
    }
  });
  return dirs;
}