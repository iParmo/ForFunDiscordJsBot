const Jimp = require('jimp');
const path = require('path')
const Discord = require('discord.js')

module.exports = {
	name: 'invert',
	description: 'Invert the color of someones profile picture',
	usage: '[@user]',
	async execute(message, args) {
		var pfpPath = path.basename('../pfp.png')
		const user = message.mentions.users.first();
		let image = await Jimp.read(user.displayAvatarURL().replace('.webp', '.png'));
		let pfp = image.invert().write('pfp.png');
		attach = new Discord.MessageAttachment(pfpPath, `InvertedPFP${user}.png`);
		message.channel.send(`Inverted by ${message.author}`, attach);
	}
}