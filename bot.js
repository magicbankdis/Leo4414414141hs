
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


client.login(process.env.BOT_TOKEN2);
