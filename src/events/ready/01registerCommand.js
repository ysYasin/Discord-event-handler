const { ysyasinerver } = require("../../../config.json");
const areCommandDeffarent = require("../../utils/areCommandDeffarent");
const getApplicationCommands = require("../../utils/getApplicationCommands")
const getLocalCommands = require("../../utils/getLocalCommands")

module.exports = async function (client) {
    const localCommands = await getLocalCommands();
    const appCommands = await getApplicationCommands(client, ysyasinerver);

    try {
        for (let localCommand of localCommands) {
            const existingCommand = await appCommands.cache.find(
                (command) => command.name === localCommand.name
            )
            if (existingCommand) {
                if (localCommand.deleted) {
                    console.log(`existing command ${existingCommand.id}`);
                    await appCommands.delete(existingCommand.id)
                    console.log(`deleted ${existingCommand.name} successfully`);
                    continue;
                }
                if (areCommandDeffarent(existingCommand, localCommand)) {
                    await appCommands.edit(
                        existingCommand.id, {
                        name: localCommand.name,
                        description: localCommand.description,
                        options: localCommand.options
                    }
                    )
                }
            } else {
                if (localCommand.deleted) {
                    console.log(`${localCommand.name} deleted successfully`);
                    // Assuming you have a function to delete the command, replace it with the appropriate function
                    continue;
                }
                await appCommands.create({
                    name: localCommand.name,
                    description: localCommand.description,
                    options: localCommand.options
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}