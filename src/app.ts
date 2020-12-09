import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { middlewareController } from './useCases/Middleware';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1', (request, response, next) => {
    return middlewareController.handle(request, response, next);
});

app.use(routes);

export { app }