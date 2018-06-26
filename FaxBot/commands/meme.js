const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

var memes = [
    "A meme? You",
    "Meme? Frameworks",
    "Meme? Theres a thing called ESX which is funny :laughing:",
    "A meme? Anti:cheese: :laughing:",
    "What memes are good now days?",
    "Your a waste of life <@242902218204774400> because YOUR A SNITCH",
    "Darkzy's pretty funny \n and hot. . . :eyes: ",
    "Fuck off mate, Jeeeezz.",
];

var getMemes = memes[Math.floor(Math.random() * memes.length)];

    message.delete()
    return message.channel.send(getMemes);
}

module.exports.help = {
    name: "meme"
}