const { prefix } = require('../config.json');

module.exports = {
	name: 'kick',
	description: 'Kicks a given user',
	guildOnly: true,
	usage: `[@user]`,
	execute(message, args) {
		const reason = args.slice(1).join(' ')
		const user = message.mentions.users.first();

		if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You do not have permission to use that command!")

	    if (user) {
	      const member = message.guild.member(user);
	      if (member) {
	        member
	          .kick({
	          	reason: reason
	          })
	          .then(() => {
	            message.reply(`Successfully kicked ${user.tag} for reason: ${reason}`);
	          })
	          .catch(err => {
	            message.reply('I was unable to kick that member');
	            console.error(err);
	          });
	      } else {
	        message.reply("That user isn't in this server!");
	      }
	    } else {
	      message.reply("You didn't mention a user to kick!");
	    }
	}
}