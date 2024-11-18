import { Router } from 'express';
import { registrarUsuario } from '../controllers/usuarios.controller.js';


const routes = Router();

// Registrar un nuevo usuario
routes.post('/api/registrar', registrarUsuario);

export default routes;