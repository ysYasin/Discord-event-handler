/* -------------------------------------------------------------------------- */
/*             getting all command files from local -- biolarplate            */
/* -------------------------------------------------------------------------- */
const path = require("path");
const getAllFiles = require("./getAllFiles");
module.exports = async function (exceptions = []) {
    let localCommands = []

    const commandsFolders = getAllFiles(path.join(__dirname, "../Commands"), true);
    for (const commandfolder of commandsFolders) {
        try {


            const commandFiles = getAllFiles(commandfolder);

            for (const commandFile of commandFiles) {

                const commandObject = require(commandFile)

                if (exceptions.includes(commandObject.name)) {

                    continue;

                }

                localCommands.push(commandObject)


            }




        } catch (error) {
            console.log(error);
        }
        return localCommands;
    }
}