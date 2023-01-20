const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { generateCompletion } = require("./test-generator");

// const localAuth = new LocalAuth();
// console.log(localAuth);

// const client = new Client({
//   authStrategy: localAuth,
// });

const client = new Client();

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("authentication", () => {
  console.log("AUTHED");
});

client.on("ready", () => {
  console.log("Client is ready");
});

client.on("message", async (message) => {
  const reply = await generateCompletion(message.body);

  console.log(message);
  console.log(reply);

  message.reply(reply);
});
