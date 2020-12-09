import { Router } from 'express';
import { createMovieController } from './useCases/Movie/CreateMovie';
import { deleteMovieController } from './useCases/Movie/DeleteMovie';
import { readMovieController } from './useCases/Movie/ReadMovie';
import { updateMovieController } from './useCases/Movie/UpdateMovie';
import { createRentalController } from './useCases/Rental/CreateRental';
import { readRentalController } from './useCases/Rental/ReadRental';
import { updateRentalController } from './useCases/Rental/UpdateRental';
import { createUserController } from './useCases/User/CreateUser';
import { readUserController } from './useCases/User/ReadUser';

const routes = Router();
//--------------------------------------------------------
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

//----------------------------------------------------------
// User
routes.post('/user', (request, response) => {
    return createUserController.handle(request, response);
});

routes.post('/login', (request, response) => {
    return readUserController.handle(request, response);
});


//----------------------------------------------------------
// Rental
routes.post('/v1/rental', (request, response) => {
    return createRentalController.handle(request, response);
});

routes.get('/v1/rental', (request, response) => {
    return readRentalController.handle(request, response);
});

routes.put('/v1/rental', (request, response) => {
    return updateRentalController.handle(request, response);
});

export { routes };