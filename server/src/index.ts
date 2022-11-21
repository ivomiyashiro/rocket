import express from 'express';
import { config } from 'dotenv'; config();
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { AuthRouter, ProductsRouter } from './routes';
import { dbConnection } from './database/config';

const app = express();

// DB Conn
dbConnection();

// Config
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', AuthRouter);
app.use('/api/products', ProductsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${ process.env.PORT }`);
});
