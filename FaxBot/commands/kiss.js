const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Your hot so :kissing_heart: .");
}

module.exports.help = {
    name: "kiss"
}