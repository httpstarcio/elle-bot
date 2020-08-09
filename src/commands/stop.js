const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {
    const queue = bot.queues.get(msg.guild.id);
    if (!queue) {
      return msg.reply("não existe nenhuma música sendo reproduzida");
    }
    queue.songs = [];
    bot.queues.set(msg.guild.id, queue);
    queue.dispatcher.end();

    const embed = new MessageEmbed()
    .setColor("#0099ff")
    .setTitle(
      `Acabou a musica!`
    )
    .setDescription("Que pena, o pancadão acabou");
  msg.channel.send({ embed });
  };


  module.exports = {
    name: "stop",
    help: "Para a reprodução de músicas no servidor",
    execute,
  };