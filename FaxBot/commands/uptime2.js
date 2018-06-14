const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let totalSeconds = (process.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;


    let uptimeEmbed = new Discord.RichEmbed()
        .setDescription("**FaxBot Uptime**")
        .setColor("#00fff2")
        .addField("Hours", hours)
        .addField("Minutes", minutes)
        .addField("Seconds", seconds);

        return message.channel.send(uptimeEmbed);
}

module.exports.help = {
    name: "uptime"
}