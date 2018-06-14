const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let messageup = new Discord.RichEmbed()
    const totalSeconds = process.uptime();
    const days = Math.floor((totalSeconds % 31536000) / 86400);
    const hours = parseInt(totalSeconds / 3600) % 24;
    const minutes = parseInt(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    messageup += days >= 1 ? `${days}d ` : '';
    messageup += hours < 10 ? `0${hours}:` : `${hours}:`;
    messageup += minutes < 10 ? `0${minutes}:` : `${minutes}:`;
    messageup += seconds < 10 ? `0${seconds}` : `${seconds}`;


    let uptimeEmbed = new Discord.RichEmbed()
        .setDescription("**FaxBot Uptime**")
        .setColor("#00fff2")
        .addField("Hours", messageup.hours)
        .addField("Minutes", messageup.minutes)
        .addField("Seconds", messageup.seconds);

        message.channel.send(uptimeEmbed);
}

module.exports.help = {
    name: "uptime"
}