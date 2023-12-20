module.exports = {
    name: "ping",
    description: "Reply with a Pong!",
    // onlyDevs: true,
    // onlyserver: true,
    //options:{}
    callback: (client, interaction) => {
        interaction.reply("Pong!")
    }
}