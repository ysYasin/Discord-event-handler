/* -------------------------------------------------------------------------- */
/*             getting all command files from local -- biolarplate            */
/* -------------------------------------------------------------------------- */
const path = require("path");
const getAllFiles = require("./getAllFiles");
module.exports = function (exceptions = []) {
    const localCommands = []
    try {
        const commandsFolders = getAllFiles(path.join(__dirname, "..", "commands"));
        for (const commandfolder of commandsFolders) {
            try {
                const commandFiles = getAllFiles(commandfolder);
                for (const commandFile of commandFiles) {
                    try {

                        const filePath = path.join(commandfolder, commandFile.name)

                        const commandObject = require(filePath)

                        if (exceptions.includes(commandObject.name)) {
                            continue;
                        }

                        localCommands.push(commandObject)

                    } catch (error) {
                        console.log(error);
                        return localCommands = [];
                    }
                }
            } catch (error) {
                console.log(error);
                return localCommands = [];
            }
        }
    } catch (error) {
        console.log(error);
        return localCommands = [];
    }
    return localCommands
}