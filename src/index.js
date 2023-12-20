const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,

    ]
});

client.login(process.env.DISCORD_KEY)