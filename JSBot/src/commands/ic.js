const fs = require('fs')
const Discord = require('discord.js')

module.exports = {
	name: 'ic',
	description: 'This command can only be used by the owner of the bot.',
	execute(message, args) {
		if (message.author.id !== '712227220294205440') return message.reply("only my owner can use this command!")
		
		fs.readFile('ideas.txt', 'utf8', function(err, contents) {
			const embed = new Discord.MessageEmbed()
				.setTitle('Idea Check')
				.setDescription(`\`\`\`${contents}\`\`\``)
				.setTimestamp()
				.setColor('BLUE')
			message.channel.send(embed)
		})
	}
}
