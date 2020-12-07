import { Router } from 'express';
import { createMovieController } from './useCases/CreateMovie';
import { deleteMovieController } from './useCases/DeleteMovie';
import { readMovieController } from './useCases/ReadMovie';
import { updateMovieController } from './useCases/UpdateMovie';

const routes = Router();

routes.get('/movie', (request, response) => {
    return readMovieController.handle(request, response);
});

routes.post('/movie', (request, response) => {
    return createMovieController.handle(request, response);
});

routes.put('/movie/:id', (request, response) => {
    return updateMovieController.handle(request, response);
});

routes.delete('/movie/:id', (request, response) => {
    return deleteMovieController.handle(request, response);
});

export { routes };