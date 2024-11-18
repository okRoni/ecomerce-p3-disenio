import { Router } from 'express';
import { registrarUsuario, loginUsuario } from '../controllers/usuarios.controller.js';


const routes = Router();

// Registrar un nuevo usuario
routes.post('/api/registrar', registrarUsuario);
routes.post('/api/login', loginUsuario);

export default routes;