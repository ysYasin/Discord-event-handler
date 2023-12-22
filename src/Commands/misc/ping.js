module.exports = {
    deleted: true,
    name: "ping",
    description: "Reply me a Pong!",
    onlyDevs: true,
    // onlyserver: true,
    //options:{}
    callback: (client, interaction) => {
        interaction.reply("Pong!")
    }
}