
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '--SP';
client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['SPEED PERMIUM','GOMING SOON'];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
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
