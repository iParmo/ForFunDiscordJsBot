const fs = require('fs')

module.exports = {
	name: 'idea',
	description: 'Give Parmo#1619 (the creator of me) an idea for something to add to me :D',
	usage: '[idea]',
	execute(message, args) {
		idea = args.slice(0).join(' ')

		fs.appendFile('ideas.txt', `-${idea} - submitted by ${message.author.tag}\n`, function (err) {
			if (err) return message.channel.send('An error occured.'), console.log(err)
		})
		message.reply('your idea has been submitted!')
		
	}
}