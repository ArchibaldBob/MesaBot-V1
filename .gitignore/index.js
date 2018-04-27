const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NDM5NDIwOTE5NDE3NjY3NTg0.DcTABQ.INouzG5nAhoB4IWFwWpEs-NU-wE')

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })
