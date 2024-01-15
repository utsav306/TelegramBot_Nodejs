import TelegramBot from 'node-telegram-bot-api';
import Bard from 'bard-ai';

// Replace with your Telegram bot token and Bard API token
const botToken = '5418101414:AAGxGL7ihpb9PDD83KyQp4ZeSetDomw_F_A';
const bardToken = 'fQjI_Gq22iYSEDFiNubdeoi6OPyXVOWUgusopye38cC3hGCnhAS9U9zdNQj7yHM5OnamLg.';

const bot = new TelegramBot(botToken, { polling: true }); // Use polling for reliability
const bard = new Bard(bardToken);


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Welcome to the AI-powered Chatbot! Send me a message, and I will respond using AI.');
  });
  
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  try {
    const response = await bard.ask(text);
    await bot.sendMessage(chatId, response);
  } catch (error) {
    console.error('Error handling Bard request:', error);
    await bot.sendMessage(chatId, 'Sorry, I encountered an error processing your request. Please try again later.');
  }
});
