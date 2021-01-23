const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Command that lists all commands',
	execute(message, args) {
		let data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push(commands.map(command => `\`\`\`${command.name} - ${command.description}\`\`\``));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info about a specific command!`)

			data = data.toString().replace(/,/g, "")
			const embed = new Discord.MessageEmbed()
				.setTitle('Commands:')
				.setTimestamp()
				.setColor(0x009DFF)
				.setDescription(data);

			return message.author.send(embed)
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply("I've sent you a DM with all my commands!");
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply("It looks like I can't DM you. Is your have Dms disabled?")
				});
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!commands) {
			return message.reply("That's not a valid command.");
		}

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}\n`);
		if (command.description) data.push(`**Description:** ${command.description}\n`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}\n`);

		data = data.toString().replace(/,/g, "")
		const embed = new Discord.MessageEmbed()
			.setTitle(`Help for ${command.name}`)
			.setDescription(data)
			.setTimestamp()
			.setColor(0x009DFF)
		message.channel.send(embed)
;	}
}