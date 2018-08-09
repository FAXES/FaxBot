const Discord = require("discord.js")
const config = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
        .setDescription(`FaxBot full list of commands | Prefix ${config.prefix}`)
        .setColor("#00fff2")
        .addField("General", "**hello** - returns a hello message. \n **report** - Report a member to moderation, format: [@person] [reason]. \n **botinfo** - returns information about FaxBot \n")
        .addField("Memey", "**whosthesnitch** - returns a popular snitch which is in this Discord. \n **meme** - whats a meme? \n **kiss** - gives a kiss \n **whocancode** - tells us who can code \n")
        .addField("Misc", "**ping** - returns the bots ping \n **uptime** - Returns the bots uptime \n")
        .addField("Moderation", "**clear** - clears the amount of messages specified \n **ban** - ban a user \n **kick** - kick a user \n **tempmute** - mute a user temporary \n **addrole** - give a role to a user \n **removerole** - remove a role from a user \n **say** - make the bot say a message \n")
        .addField("Notice", "This bot (FaxBot) is still in development by FAXES, If you have any suggestions place them in the <#416213410695479317> channel.")
        .setFooter("© 2018 FAXES, All Rights Reserved");                

        return message.channel.send(botembed);
}

module.exports.help = {
    name: "cmds"
}
