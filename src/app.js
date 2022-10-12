import express from 'express';
import { articlesRoutes } from './routes';

import './config/database'

const app = express();
const port = process.env.PORT || 3333;

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json());
app.use(articlesRoutes);


app.listen(port, () => console.log(`Running in http://localhost/${port}`));
