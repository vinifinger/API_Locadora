import { Router } from 'express';
import { createMovieController } from './useCases/CreateMovie';
import { readMovieController } from './useCases/ReadMovie';

const routes = Router();

routes.post('/movie', (request, response) => {
    return createMovieController.handle(request, response);
});

routes.get('/movie', (request, response) => {
    return readMovieController.handle(request, response);
});

export { routes };