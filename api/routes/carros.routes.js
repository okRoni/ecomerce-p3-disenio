import { Router } from 'express';
import { getAllCarsWithFilters, getCarById, saveReservation, registrarVehiculo } from '../controllers/carros.contoller.js';


const routes = Router();

// GET small table of customers
routes.get('/cars', getAllCarsWithFilters);

routes.get('/cars/:id', getCarById);

routes.post('/reservations', saveReservation);

routes.post('/api/sell', registrarVehiculo)

export default routes;