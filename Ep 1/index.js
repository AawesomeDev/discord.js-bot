const Discord = require('discord.js')
const client = new Discord.Client()

let token = 'NzI0NjUwNjgwMTMxOTExNjgw.XvDRnw.PJd2EZwo160chfXNDjq_HqdzRR4'

client.login(token)

client.on("ready", () => {

  
    client.user.setActivity(`!help || ${client.guilds.size} servers!`, {
      type: "WATCHING"
    })
  console.log('Ready!')
});

client.on('message', async message => {
    const args = message.content.substring(" ").split(" ");
    
    switch(args[0]){
        case '!help':
            let help = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL, 'https://discord.gg/fAHJjf')
            .setTitle('Help Command')
            .setColor(0x237168)
            .addField('Moderation 🔨', '`!help moderation`', true)
            .addField('Currrency 💰', '`!help money`', true)
            .addField('Fun 🧇', '`!help fun`')
            .addField('Info ℹ️', '`!help info`', true)
            message.channel.send(help)
            break;
    }
})