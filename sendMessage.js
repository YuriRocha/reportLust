const axios = require('axios');
const config = require('./config.json');

const BOT_TOKEN = config.BOT_TOKEN;  // Substitua pelo seu token
const CHAT_ID = config.CHAT_ID;  // Substitua pelo chat ID do canal

const message = process.argv.slice(2).join(' ');  // Pega a mensagem do terminal

if (!message) {
    console.error('Erro: Nenhuma mensagem fornecida.');
    process.exit(1);
}

const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

axios.post(url, {
    chat_id: CHAT_ID,
    text: message
})
.then(response => {
    console.log('Mensagem enviada com sucesso:', response.data);
})
.catch(error => {
    console.error('Erro ao enviar mensagem:', error.response ? error.response.data : error.message);
});

