import express from 'express';
import UserRoute from './routes/UserRoute';
import LanceRoute from './routes/LanceRoute';
import LeilaoRoute from './routes/LeilaoRoute';

const app = express();
const serverPort = 8080;

app.listen(serverPort, () => console.log('Server na porta: ' + serverPort));

app.use("/user", UserRoute)
app.use("/lance", LanceRoute)
app.use("/leilao", LeilaoRoute)