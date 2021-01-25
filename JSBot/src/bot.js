const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const sqlite = require('sqlite3').verbose();

let db = new sqlite.Database('./db/rank.db', err => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to rank database.')
});

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

var xp = 0
var neededXp = 100
var level = 1

client.on('message', message => {
	xp += 10

	if (xp === neededXp) {
		xp = 0
		level++
		neededXp * 1.5
		const embed = new Discord.MessageEmbed()
			.setTitle('LEVEL UP!')
			.setDescription(`You just leveled up! You're now level ${level}`)
			.setThumbnail(message.author.avatarURL)
			.setFooter(message.author.tag)
			.setColor('BLUE')
		message.channel.send(message.author, embed)
	}
});

client.login(token);
