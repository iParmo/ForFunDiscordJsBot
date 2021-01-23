const Discord = require('discord.js')

module.exports = {
	name: 'say',
	description: 'Use the bot to say something',
	usage: '[title (no spaces)] [message]',
	execute(message, args) {
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("You do not have permission to use that command!")

		const embed = new Discord.MessageEmbed()
			.setTitle(args[0])
			.setDescription(args.slice(1).join(' '))
			.setColor(0x009DFF)
		message.delete()
		message.channel.send(embed)
	}
}