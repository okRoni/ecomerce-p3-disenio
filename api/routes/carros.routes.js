import { Router } from 'express';
import { getAllCarsWithFilters, getCarById, registrarVehiculo } from '../controllers/carros.contoller.js';


const routes = Router();

// GET small table of customers
routes.get('/cars', getAllCarsWithFilters);

routes.get('/cars/:id', getCarById);

routes.post('/api/sell', registrarVehiculo)

export default routes;