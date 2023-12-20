const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "ban",
    description: "Ban a Member!",
    // onlyDevs: true,
    // onlyserver: true,
    options: [{
        name: "mention",
        description: "Mention the Member you want to ban!",
        type: ApplicationCommandOptionType.Mentionable,
        required: true
    },
    {
        name: "reason",
        description: "Reason for the Ban!",
        type: ApplicationCommandOptionType.String,
    }
    ],
    callback: (client, interaction) => {
        interaction.reply("Pong!")
    }
}