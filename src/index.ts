

import express, {Express, Request, Response, Router} from 'express';
import { PORT } from './secrets';
import rootRouter from './routes/rootRouter';

const app: Express = express();

app.use('/api', rootRouter);

app.listen(5000, () => {
    console.log('server is working')
})