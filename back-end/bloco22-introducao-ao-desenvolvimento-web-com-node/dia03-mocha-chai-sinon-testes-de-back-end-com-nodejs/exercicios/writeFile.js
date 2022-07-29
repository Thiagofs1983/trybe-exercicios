const fs = require('fs');

const writeFile = (fileName, text) => {
  fs.writeFile(`${__dirname}/${fileName}`, text);
  return 'OK';
}

module.exports = writeFile;