const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`Your not in a ticket channel you spud.`).then(msg => msg.delete(5000));
        // Confirm delete - with timeout (Not command)
        message.channel.send(`Are you sure you want to close this ticket? Type ***yes*** if you do.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === 'yes', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        c.send('***Ticket close timed out, the ticket was not closed.***')
                    });
            });
}

module.exports.help = {
    name: "close"
}