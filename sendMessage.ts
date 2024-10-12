import axios from "axios";

const sendMessage = (message: any) => {
  axios
    .post(
      "https://api.zenvia.com/v2/channels/whatsapp/messages",
      {
        from: process.env.REMETENTE, 
        to: process.env.DESTINATARIO,
        contents: [
          {
            type: "text",
            text: message,
          },
        ],
      },
      {
        headers: {
          "X-API-TOKEN": process.env.TOKEN,
        },
      }
    )
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    });
};

export default sendMessage;
