const express = require('express');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const mc = require("./controllers/message_controller");

const messagesBaseUrl = '/api/messages'
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);



app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`);
})
