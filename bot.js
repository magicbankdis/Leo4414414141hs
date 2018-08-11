
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

client.on("message", message => {
    var prefix = "!"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });




client.login(process.env.BOT_TOKEN2);
