const getAllFiles = require("../utils/getAllFiles")
const path = require("path")

module.exports = async function (client) {
    const eventFolders = getAllFiles(path.join(__dirname, "../events"), true);
    for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);

        const eventName = eventFolder.replace(/\\/g, "/").split("/").pop();

        client.on(eventName, async (org) => {
            for (const eventFile of eventFiles) {
                const eventFuction = require(eventFile);
                await eventFuction(client, org);
            }
        })
    }
}