/* -------------------------------------------------------------------------- */
/*          getting all command files from application -- biolarplate         */
/* -------------------------------------------------------------------------- */
module.exports = async function (client, guildId) {
    let applicationGuilds;

    try {
        if (guildId) {
            const guilds = await client.guilds.fetch(guildId);
            applicationGuilds = guilds.command;
        } else {
            applicationGuilds = await client.application.commands;
        }
    } catch (error) {
        console.log("error from getApplicationCommans.js" + " " + error);
        return applicationGuilds = undifiend;
    }


    return applicationGuilds;
}