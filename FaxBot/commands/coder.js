const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete().catch(O_o=>{});
    return message.channel.send("The best coder in this whole discord is <@236064682505404416> He knows python 10/10 ~ IGN");
}

module.exports.help = {
    name: "whocancode"
}