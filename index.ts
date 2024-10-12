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

    if (message.toLowerCase() === "oi") {
      sendMessage(
        `Olá ${contact.firstName}! Como posso te ajudar? Digite 1 para Menu.`
      );
    } else if (message === "1") {
      sendMessage(
        `Menu de opções:\n1. Opção A\n2. Opção B\n3. Opção C\nEscolha uma opção (1, 2 ou 3):`
      );
    } else if (message === "2") {
      sendMessage(
        `Você escolheu a Opção B. Aqui estão mais informações sobre a Opção B.`
      );
    } else if (message === "3") {
      sendMessage(
        `Você escolheu a Opção C. Aqui estão mais informações sobre a Opção C.`
      );
    } else {
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
