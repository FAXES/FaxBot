const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Could not file coomads.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Displays the message in console
bot.on("ready", async () => {
    console.log(`${bot.user.username} is online and ready to kill!`);
    bot.user.setActivity("You.", {type: "WATCHING"});

    bot.user.setStatus('Online') // Online, idle, invisible & dnd
});
// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

// Hello Command
    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello Mate!");
    }

});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find("name", "Visitor");

    member.addRole(role)
});

bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the FAXES Gaming Discord Server ${member}. Enjoy your stay, also be sure to check <#358072894867111967>`);
});


bot.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Thanks for stopping by, ${member}. `);
});

bot.on("messageDelete", message => {
    // messageDelete.channel.send(`The message : "${messageDelete.content}" by ${messageDelete.author.tag} was deleted.`)

    let deleteEmbed = new Discord.RichEmbed()
    .setDescription("User Removed A Message")
    .setColor("#00fff2")
    .addField("Message Content", message.content)
    .addField("Channel", message.channel)
    .addField("Message By", message.author.tag)
    .setFooter("© Example", message.createdAt)
    let deleteschannel = message.guild.channels.find(`name`, "log-channel");
    message.deleteschannel.send(deleteEmbed);
});

bot.login(botconfig.token);