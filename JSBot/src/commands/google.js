const Discord = require('discord.js');

module.exports = {
	name: 'google',
	description: 'Google something',
	usage: '[what-you-want-to-google]',
	execute(message, args) {
		search_query = args.toString().replace(/,/g, "+")
		const embed = new Discord.MessageEmbed()
			.setTitle("Google Search")
			.setColor(0x76ff03)
			.setDescription(`[\`${args.toString().replace(/,/g, " ")}\`](https://www.google.com/search?q=${search_query})`)
			.setFooter(`Search by ${message.author.tag}`)
		message.channel.send(embed)
	}
}