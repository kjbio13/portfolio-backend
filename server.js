import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import designRoutes from './routes/design.js';
import developmentRoutes from './routes/development.js';
import personalRoutes from './routes/personal.js';
import hobbiesRoutes from './routes/hobbies.js';

const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());

app.use(`/design`, designRoutes);
app.use(`/development`, developmentRoutes);
app.use(`/personal`, personalRoutes);
app.use(`/hobbies`, hobbiesRoutes);

app.get('/', (req, res) => {
    res.send(`hello`);
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})