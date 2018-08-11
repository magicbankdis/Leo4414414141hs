
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '--SP';
client.on('ready', () => {
  client.user.setActivity("--SPhelp",{type: 'WATCHING'})

});

client.on('message', message => {
    if (message.content.startsWith("--SAhelp")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **GOMING SOON** ' ,' **SpeedPermium** ')
.setColor('#24efbd')
message.channel.sendEmbed(embed);
}
});


module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}



client.login(process.env.BOT_TOKEN2);
