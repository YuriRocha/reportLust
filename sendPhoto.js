const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const config = require('./config.json');

const BOT_TOKEN = config.BOT_TOKEN;  // Substitua pelo seu token
const CHAT_ID = config.CHAT_ID;  // Substitua pelo chat ID do canal

const photoPath = process.argv[2];  // Primeiro argumento é o caminho da foto
const caption = process.argv.slice(3).join(' ');  // O restante é a legenda (opcional)

if (!photoPath) {
    console.error('Erro: Nenhuma imagem fornecida.');
    process.exit(1);
}

// Criar um objeto FormData para envio do arquivo
const formData = new FormData();
formData.append('chat_id', CHAT_ID);
formData.append('photo', fs.createReadStream(photoPath));
if (caption) formData.append('caption', caption);

axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, formData, {
    headers: formData.getHeaders() // Agora correto!
})
.then(response => {
    console.log('📸 Foto enviada com sucesso:', response.data);
})
.catch(error => {
    console.error('❌ Erro ao enviar foto:', error.response ? error.response.data : error.message);
});


