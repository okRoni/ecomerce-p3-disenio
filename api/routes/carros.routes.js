import { Router } from 'express';
import { getAllCarsWithFilters, getCarById, saveReservation } from '../controllers/carros.contoller.js';

const routes = Router();

// GET small table of customers
routes.get('/cars', getAllCarsWithFilters);

routes.get('/cars/:id', getCarById);

routes.post('/reservations', saveReservation);

export default routes;