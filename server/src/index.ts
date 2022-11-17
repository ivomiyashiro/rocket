import express from 'express';
import { config } from 'dotenv'; config();
import cors from 'cors';

import AuthRouter from './routes/auth.route';

const app = express();

// DB Conn


// Config
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
app.get('/auth', AuthRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running in port ${ process.env.PORT }`);
});
