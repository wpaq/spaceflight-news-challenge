import express from 'express';
import mongoose from 'mongoose';
import { articlesRoutes } from './routes';

const app = express();
const port = process.env.PORT || 3333;

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json());
app.use(articlesRoutes);

// database connection
mongoose
  .connect(
    'mongodb://localhost:27017/spaceflight-news-challenge',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))

app.listen(port, () => console.log(`Running in http://localhost/${port}`));
