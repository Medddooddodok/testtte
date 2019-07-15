const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600348640476659764")
setInterval(function() {
channel.send(`ted ted ted ted ted ted ted`);
}, 30)
})

client.login(process.env.BOT_TOKEN);