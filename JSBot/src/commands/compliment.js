module.exports = {
	name: 'compliment',
	description: 'Give yourself a compliment :D',
	execute(message) {
		words = ['amazing', 'loved', 'pretty', 'cool', 'indipendent', 'brilliant', 'smart', 'endowed', 'funny', 'radiating big PP energy', 'good looking', 'loving', 'perfect', 'outmatched', 
		'awesome', 'delightful', 'kind', 'epic', 'magnificent', 'sexy', 'hot', 'off the charts', 'a good person', 'better than you think', 
		'great', 'mesmerising', 'outstanding']

		compliment = Math.floor(Math.random() * words.length)

		message.reply(`you're ${words[compliment]}!`)
	}
}