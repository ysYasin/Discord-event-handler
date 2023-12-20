const fs = require('fs');
const path = require('path');

module.exports = function (directory, onlyDeractory = false) {
    const fies = fs.readdirSync(directory, { withFileTypes: true });
    const allFiles = [];

    for (const file of fies) {
        const filePath = path.join(directory, file);
        if (onlyDeractory) {
            if (file.isDirectory()) {
                allFiles.push(filePath)
            }
        }
        else {
            if (file.isFile()) {
                allFiles.push(filePath)
            }
        }
    }
}