const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

// client hearing event listenars
// get the qr code to acces wpp

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', async (message) => {
	if (message.body === '!ping') {
		// client.sendMessage(message.from, 'pong');
        await message.reply('pong');
	}
});

client.initialize();