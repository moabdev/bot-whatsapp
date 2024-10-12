import express, { Request, Response } from "express";
import sendMessage from "./sendMessage";
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/hook", (req: Request, res: Response) => {
  try {
    const contact = req.body.message.visitor;
    const message = req.body.message.contents[0].text;

    // Resposta inicial
    if (message.toLowerCase() === "oi") {
      sendMessage(
        `Olá ${contact.firstName}! Como posso te ajudar? Digite 1 para Menu.`
      );
    } 
    // Menu principal
    else if (message === "1") {
      sendMessage(
        `Menu de opções:\n1. Opção A\n2. Opção B\n3. Opção C\n4. Falar com um atendente\n5. Sair\nEscolha uma opção (1, 2, 3, 4 ou 5):`
      );
    } 
    // Opção A
    else if (message === "1") {
      sendMessage(
        `Você escolheu a Opção A. Aqui estão algumas informações sobre a Opção A:\n- Informações sobre A1.\n- Informações sobre A2.\n\nSe precisar de mais assistência, digite "menu" para voltar ao menu principal.`
      );
    } 
    // Opção B
    else if (message === "2") {
      sendMessage(
        `Você escolheu a Opção B. Aqui estão algumas informações sobre a Opção B:\n- Informações sobre B1.\n- Informações sobre B2.\n\nSe precisar de mais assistência, digite "menu" para voltar ao menu principal.`
      );
    } 
    // Opção C
    else if (message === "3") {
      sendMessage(
        `Você escolheu a Opção C. Aqui estão algumas informações sobre a Opção C:\n- Informações sobre C1.\n- Informações sobre C2.\n\nSe precisar de mais assistência, digite "menu" para voltar ao menu principal.`
      );
    } 
    // Falar com um atendente
    else if (message === "4") {
      sendMessage(
        `Você escolheu falar com um atendente. Um de nossos atendentes irá ajudá-lo em breve.`
      );
      // Aqui você poderia adicionar lógica para encaminhar a conversa para um atendente humano
    } 
    // Sair
    else if (message === "5") {
      sendMessage(
        `Você escolheu sair. Se precisar de ajuda novamente, digite "oi" para iniciar.`
      );
    } 
    // Mensagem para voltar ao menu
    else if (message.toLowerCase() === "menu") {
      sendMessage(
        `Menu de opções:\n1. Opção A\n2. Opção B\n3. Opção C\n4. Falar com um atendente\n5. Sair\nEscolha uma opção (1, 2, 3, 4 ou 5):`
      );
    } 
    // Mensagem não reconhecida
    else {
      sendMessage(
        'Me desculpe, não entendi. Digite "oi" para iniciar ou "1" para Menu.'
      );
    }

    res.status(200).end();
  } catch (error) {
    console.error("Erro ao processar a mensagem:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Execute o ngrok para expor o servidor: ngrok http 3000
