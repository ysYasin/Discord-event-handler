const { devs, ysyasinerver } = require("../../../config.json")
const getLocalCommands = require("../../utils/getLocalCommands")
module.exports = async function (client, interaction) {
    const localCommands = await getLocalCommands();
    try {
        if (localCommands) {
            const commandObj = await localCommands.find(
                (command) => command.name === interaction.commandName
            )
            console.log(localCommands);
            if (!commandObj) return;
            if (commandObj.onlyDevs && !devs.includes(interaction.member?.id)) {

                interaction.reply({
                    content: "You can't use this command",
                    ephemeral: true,
                });
                return;
            }

            if (commandObj.onlyserver && ysyasinerver !== interaction?.guild?.id) {

                interaction.reply({
                    content: "You can't use this command",
                    ephemeral: true,
                });
                return;
            }

            if (commandObj?.permissionRequired?.length) {
                for (const permission of commandObj.permissionRequired) {
                    if (!interaction.member.permission.has(permission)) {

                        interaction.reply({
                            content: "You can't use this command",
                            ephemeral: true,
                        });
                        return;
                    }
                }
            }

            if (commandObj.botPermission?.length) {
                const bot = interaction.guild.members.me;
                for (const permission of commandObj.botPermission) {
                    if (!bot.permissions.has(permission)) {

                        interaction.reply({
                            content: "You can't use this command",
                            ephemeral: true,
                        });
                        return;
                    }
                }
            }


            await commandObj.callback(client, interaction)
        }
    } catch (error) {
        console.log(error);
    }
}