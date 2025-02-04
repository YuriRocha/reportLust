Clone o projeto para a sua máquina e dentro do diretório raíz do projeto rode o comando npm install para instalar as dependências.


## Passo 1
+ Crie um bot no telegram
+ Salve o token desse bot

## Passo 2
+ Salve o id do canal que você vai utilizar

## Passo 3
+ Adicione esse bot no canal como administrador

## Passo 4
+ Crie um arquivo config.json e preencha BOT_TOKEN com o token do bot e CHAT_ID com o id do canal

```
{
  "BOT_TOKEN": "SEU_BOT_TOKEN_AQUI",
  "CHAT_ID": "SEU_CHAT_ID_AQUI"
}
```

# Utilizando o script pelo terminal

## Mandar mensagem
node sendMessage.js "Sua mensagem aqui!"

## Mandar imagem
node sendPhoto.js /home/username/Imagens/example.jpg "Legenda da imagem"

## Mandar video
node sendVideo.js /home/username/Videos/video.mp4 "Legenda do video"


