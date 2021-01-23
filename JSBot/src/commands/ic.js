const fs = require('fs')
const Discord = require('discord.js')

module.exports = {
	name: 'ic',
	description: 'This command can only be used by the owner of the bot.',
	execute(message, args) {
		fs.readFile('ideas.txt', 'utf8', function(err, contents) {
			const embed = new Discord.MessageEmbed()
				.setTitle('Idea Check')
				.setDescription(`\`\`\`${contents}\`\`\``)
				.setTimestamp()
				.setColor(0x009DFF)
			message.channel.send(embed)
		})
	}
}