const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();

    let sicon = message.guild.iconURL;
    let ipembed = new Discord.RichEmbed()
    .setDescription("FAXES Development Server Information")
    .setColor("#fef836")
    .setThumbnail(sicon)
    .addField("Server Name", "FAXES Development Server | Public Server")
    .addField("Server IP", "45.56.94.110:30120")
    .addField("Join The Server", "<fivem://connect/45.56.94.110:30120> \n Click the above only once.")

    message.channel.send(ipembed).then(msg => msg.delete(15000));
}

module.exports.help = {
    name: "ip"
}