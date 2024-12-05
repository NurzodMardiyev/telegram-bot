const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const TelegramBot = require("node-telegram-bot-api");

// Bot token
const token = "7674235740:AAH2oHuwBrUlT3c_YTuPmLNaRijBt_Zyxls";
const bot = new TelegramBot(token, { polling: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());

bot.on("message", (msg) => {
  console.log("Chat ID:", msg.chat.id);
});
// Frontenddan ma'lumot qabul qilish
app.post("/api/sendToBot", (req, res) => {
  const { name, email, message } = req.body;

  // Botga xabar yuborish
  bot.sendMessage(
    2052844797, // Bu yerga botingizga xabar yuboradigan Telegram chat ID yozing
    `Yangi forma ma'lumotlari:\n\nIsmi: ${name}\nEmail: ${email}\nXabar: ${message}`
  );

  res.status(200).send({ success: true });
});

// Serverni ishga tushirish
const PORT = 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishlayapti`));
