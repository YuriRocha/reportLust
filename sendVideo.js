const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const config = require('./config.json');

const BOT_TOKEN = config.BOT_TOKEN;  // Substitua pelo seu token
const CHAT_ID = config.CHAT_ID;  // Substitua pelo chat ID do canal

const videoPath = process.argv[2];  // Primeiro argumento é o caminho do vídeo
const caption = process.argv.slice(3).join(' ');  // O restante é a legenda (opcional)

if (!videoPath) {
    console.error('Erro: Nenhum vídeo fornecido.');
    process.exit(1);
}

// Criar um objeto FormData para envio do arquivo
const formData = new FormData();
formData.append('chat_id', CHAT_ID);
formData.append('video', fs.createReadStream(videoPath));
if (caption) formData.append('caption', caption);

axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendVideo`, formData, {
    headers: formData.getHeaders() // Define os headers corretamente
})
.then(response => {
    console.log('🎥 Vídeo enviado com sucesso:', response.data);
})
.catch(error => {
    console.error('❌ Erro ao enviar vídeo:', error.response ? error.response.data : error.message);
});

