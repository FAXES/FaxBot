const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Moderator")) return message.channel.send(`This server doesn't have a \`Moderator\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`).then(msg => msg.delete(15000));
        if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open. Please use that ticket`).then(msg => msg.delete(10000));
        message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Moderator");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: ***<@${message.author.id}> Your ticket has been created, <#${c.id}>.***`).then(msg => msg.delete(15000));
            const embed = new Discord.RichEmbed()
                .setColor('#fef836')
                .setDescription(`**Dear <@${message.author.id}>!**\n\nThank you for reaching out to our support team! \n\n We will get back to you as soon as possible.\n To close this ticket use \`.close\`.`)
                .setTimestamp()
                .setFooter("© 2018 FAXES")
            c.send({
                embed: embed
            });
        }).catch(console.error); // Send errors to console
}

module.exports.help = {
    name: "new"
}