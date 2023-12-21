const { Client, GatewayIntentBits } = require('discord.js');
const handlingEvents = require('./eventHandler/handlingEvents');
require("dotenv").config();


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,

    ]
});

handlingEvents(client)

client.login(process.env.DISCORD_KEY)