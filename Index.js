const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log('Bot online!');
});

client.on('messageCreate', message => {
  if (message.content === '!oi') {
    message.reply('Oi 👋');
  }
});

client.login(process.env.TOKEN);
