const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("FaxBot Information")
    .setColor("#00fff2")
    .setThumbnail(sicon)
    .addField("Bot Name", bot.user.username)
    .addField("Users", bot.users.length)
    .addField("Servers", bot.servers.length)
    .addField("Channels", bot.channels.length)
    .addField("Uptime", "Use Command: uptime")
    .addField("Bot Created On", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}