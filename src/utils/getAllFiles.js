const fs = require('fs');
const path = require('path');

module.exports = function (directory, onlyDeractory = false) {
    const allFiles = [];

    // Read The Directory
    const files = fs.readdirSync(directory, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(directory, file.name);

        if (onlyDeractory) {
            if (file.isDirectory()) {
                allFiles.push(filePath)
            }
        } else {
            if (file.isFile()) {
                allFiles.push(filePath)
            }
        }
    }
    return allFiles;
}