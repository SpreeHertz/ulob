/* eslint-disable no-unused-vars */
const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
	name: "ping",
	/**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
	run: async (client, message, interaction) => {

          const embed = new MessageEmbed()
          .setTitle('Ping')
          .addField(`<:432499879844:894247293350477844> ${client.ws.ping}ms`, '<:037989972582:894264223763406908> ')
          .setColor('#2F3136')
          .setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};