const { prefix } = require('../config.json');

module.exports = {
	name: 'ban',
	description: 'Bans a given user',
	guildOnly: true,
	usage: `[@user]`,
	execute(message, args) {
		const reason = args.slice(1).join(' ')
		const user = message.mentions.users.first();

		if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("You do not have permission to use that command!")

	    if (user) {
	      const member = message.guild.member(user);
	      if (member) {
	        member
	          .ban({
	          	reason: 'no'
	          })
	          .then(() => {
	            message.reply(`Successfully banned ${user.tag} for reason: ${reason}`);
	          })
	          .catch(err => {
	            message.reply('I was unable to ban that member');
	            console.error(err);
	          });
	      } else {
	        message.reply("That user isn't in this server!");
	      }
	    } else {
	      message.reply("You didn't mention a user to ban!");
	    }
	}
}