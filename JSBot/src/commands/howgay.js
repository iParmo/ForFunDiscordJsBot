const Discord = require('discord.js')

module.exports = {
	name: 'howgay',
	description: 'Gives a % of how gay a person is',
	guildOnly: true,
	usage: `[@user]`,
	execute(message, args) {
		let gay = Math.floor(Math.random() * 100)
		const user = message.mentions.users.first();

		if (user.id === '677979517989683214') {
			gay = 100
		} else if (user.id === '712227220294205440') {
			gay = 0
		}

		msg = `**${user.tag}** is ${gay}% gay :rainbow_flag: `

		const embed = new Discord.MessageEmbed()
			.setTitle(`How Gay?`)
			.setDescription(msg)
			.setFooter(`Command by ${message.author.tag}`, message.author.displayAvatarURL())
			.setTimestamp()
			.setColor(0x009DFF)
		message.channel.send(embed)
	}
}