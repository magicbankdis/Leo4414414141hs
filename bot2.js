
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-CN'

client.on('ready', () => { //console.log
  console.log('--------------------------');
  console.log(' Bot Is Online')
  console.log('--------------------------')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('--------------------------')
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('--------------------------')
  console.log(`servers! * [ " ${client.guilds.size} " ]`);
  console.log('--------------------------')
  console.log(` Users! * [ " ${client.users.size} " ]`);
  console.log('--------------------------')
  console.log(`channels! * [ " ${client.channels.size} " ]`);
 
  });

 
 client.on("message", message => { //help
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "help"){ 
          const embed = new Discord.RichEmbed()
      .setTimestamp()
	  .setColor("#5016f3")
      .setThumbnail(client.user.avatarURL)
      .setDescription(` 
	  ***__General orders__***
	 
	 『$data / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
	 『$stats / يعرض لك صار للبوت كم شغال』
	 『قريبا』
	 『قريبا』
	 
	  ***__Bot orders__***
	  
	  『$ping / يعرض لك سرعه اتصال البوت』
	  『$member / حاله الاعضاء』
	  『$bot / معلومات عن البوت』
	  『$support / سيرفر الدعم القني و المساعده』
	  『قريبا』
	  『قريبا』
	  
	  ***__Administrative Orders__***
	  
	  『$mute /ميوت』
	  『$unmute /فك الميوت』
	  『$bc /برودكاست』
	  『$clear /يحذف 100 رسالة』
	  『قريبا』
	  『قريبا』
	  
	  ***__Games orders__***
	  
	  『قريبا』
	  『قريبا』
	  
	  
	  
	  
	  
	  
	  `)

 message.channel.send({embed});

}
}); 
 
 
client.on('message', msg => {//msg
  if (msg.content === 'السلام عليكم') {
    msg.channel.send('وعليكم السلام');
  }
});;



client.on('message', message => {
var prefix = "$!$";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;


if (message.content.startsWith(prefix + 'playing')) {
  if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Playing changed to`)
    message.react("ðŸ‘Œ")

} else

if (message.content.startsWith(prefix + 'setname')) {
  if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : done`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
client.user.setGame(argresult, "https://www.twitch.tv/0rzh0");
    message.channel.sendMessage(`**${argresult}** streem changed to`)
    message.react("ðŸ‘Œ")

} else

if (message.content.startsWith(prefix + 'watching')) {
  if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Watching changed to`)
 message.react("ðŸ‘Œ")

} else
	
if (message.content.startsWith(prefix + 'listening')) {
  if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
client.user.setActivity(argresult);
    message.channel.sendMessage(`**${argresult}** : listening changed to`)
    message.react("ðŸ‘Œ")
	
} else

if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '337629134371160065') return message.reply('**only for the botowner **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** :avatar changed to`);
	message.react("ðŸ‘Œ")
}
 });
 







//client.on('ready', () => {
   // setInterval(function(){
  //      client.guilds.get('328932248109842433').roles.find('name', 'big boos').edit({color: 'RANDOM'})
 //   },1);
//	});


//client.on('ready', () => {
 //   setInterval(function(){
      //  client.guilds.get('328932248109842433').roles.find('name', '⚔ ≺Captain≻⚔').edit({color: 'RANDOM'})
 //   },1);
//	});



client.on('message', message => { //bot
     if (message.content === prefix +  "bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('#5016f3')
  .addField("**:عدد السيرفرات الي فيها البوت**" , client.guilds.size)
  .addField("**:المستخدمين:**", client.users.size)
  .addField("**:غرف:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});


client.on('message', message => { //members
              if (!message.channel.guild) return;
      if(message.content == prefix + 'member')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      .setColor("#5016f3")
	  .setTimestamp()
	message.channel.send(IzRo);
	
    });

		
client.on('message', message => { //invite
    if (message.content.startsWith(prefix + "invite")) {
     if(!message.channel.guild) return;
if (message.author.bot) return;
        message.channel.createInvite({
        thing: true,
        maxUses: 0,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const Embed11 = new Discord.RichEmbed()
        .setColor("#5016f3")
        .setDescription("تم ارسالك في الخاص")
   .setFooter("اسم سيررك ",'رابط صوره سيرفرك')
                   .setTimestamp()
				message.channel.send('**تم الارسال رابط  سيرفر في الخاص**');


      message.channel.sendEmbed(Embed11).then(message => {message.delete(3000)})
      message.author.sendEmbed(Embed11)
    }
});	
	
	
	    client.on('message', message => { //ping
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
		message.channel.send({embed:embed});
                        }
                    });

					
	client.on('message', message => { //stats
    if (message.content.startsWith(prefix +"stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
			.setColor('#5016f3')
			.setTimestamp()
    })
}
});


function timeCon(time) { //+stats
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
	
	
client.on('message', message => { //times
         if (message.content === prefix + "data") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 0,
            hours2 = currentTime.getHours() + 1 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 2 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('#5016f3')
                //.setFooter(message.author.username, message.author.avatarURL)
                .addField('مصر',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('الامارات',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('تاريخ',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

			
                 message.channel.sendEmbed(Date15);
        }
    });	
	

  client.on("message", message => { //support
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "support"){ 
          const embed = new Discord.RichEmbed()
.setColor("#5016f3")
 .setThumbnail(client.user.avatarURL)     
 .setTimestamp()
 .setDescription("Pirates Gaming | هلا فيك في سيرفر  " + `
 **
support | رابط سيرفر    https://discord.gg/tVbVF4E
 **
`);


   message.channel.send({embed});
      }
  });

  
  client.on("message", message => { //mute
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor('#5016f3')
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});
  
  
  client.on("message", message => { //unmute
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor('#5016f3')
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});
  
  
  client.on("message", message => { //clear
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x5016f3, 
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });
  
  
  
  
  
  
  
  
  
  
client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**.bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField('** الـسيرفر**', `${message.guild.name}`,true)
                .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
                .addField(' **الرسالة** ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✔️ | جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📋| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
});

client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("471788143637430273").send(yumz)
            }
});





client.login(process.env.BOT_TOKEN);
