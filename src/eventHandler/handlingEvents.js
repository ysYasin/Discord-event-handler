const getAllFiles = require("../utils/getAllFiles")
const path = require("path")

module.exports = async function (client) {
    const eventFolders = await getAllFiles(path.join(__dirname, "../events"), true);
    for (const eventFolder of eventFolders) {
        const eventFiles = await getAllFiles(eventFolder);

        const eventName = eventFolder.replace(/\\/g, "/").split("/").pop();

        client.on(eventName, async (arg) => {
            for (const eventFile of eventFiles) {

                const eventFuction = require(eventFile);
                await eventFuction(client, arg);
            }
        })
    }
}