const readExecl = require('../utils/readExecl.js');

module.exports = files => {
	let execlData = {};
	files.forEach(execlPath => {
		const data = readExecl(execlPath);
		execlData = {...execlData, ...data};
	});
	return execlData;
}