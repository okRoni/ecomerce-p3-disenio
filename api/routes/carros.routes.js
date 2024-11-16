import { Router } from 'express';
import { getAllCarsWithFilters } from '../controllers/carros.contoller.js';


const routes = Router();

// GET small table of customers
routes.get('/cars', getAllCarsWithFilters);

export default routes;