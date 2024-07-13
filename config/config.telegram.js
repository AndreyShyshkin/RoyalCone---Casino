import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

// Load environment variables
dotenv.config()

// Use process.env to access environment variables
const token = process.env.TELEGRAM_token
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true })

// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', msg => {
	const chatId = msg.chat.id

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, 'Received your message')
})
