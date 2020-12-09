import { Router } from 'express';
import { createMovieController } from './useCases/Movie/CreateMovie';
import { deleteMovieController } from './useCases/Movie/DeleteMovie';
import { readMovieController } from './useCases/Movie/ReadMovie';
import { updateMovieController } from './useCases/Movie/UpdateMovie';
import { createUserController } from './useCases/User/CreateUser';
import { readUserController } from './useCases/User/ReadUser';

const routes = Router();

// Movie
routes.post('/v1/movie', (request, response) => {
    return createMovieController.handle(request, response);
});

routes.get('/v1/movie', (request, response) => {
    return readMovieController.handle(request, response);
});

routes.put('/v1/movie/:id', (request, response) => {
    return updateMovieController.handle(request, response);
});

routes.delete('/v1/movie/:id', (request, response) => {
    return deleteMovieController.handle(request, response);
});

// User
routes.post('/v1/user', (request, response) => {
    return createUserController.handle(request, response);
});

routes.post('/v1/login', (request, response) => {
    return readUserController.handle(request, response);
});

export { routes };