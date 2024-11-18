import dotenv from 'dotenv';
dotenv.config();

//console.log('DB_USER:', process.env.DB_USER);
//console.log('DB_PASS:', process.env.DB_PASS);

import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import { getConnection } from './conexion.js';
import carrosRoutes from './routes/carros.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(carrosRoutes);
app.use(usuariosRoutes);

// Test the database connection
getConnection().then(pool => {
  if (pool) {
      console.log("Conexion con la base de datos exitosa.");
  } else {
      console.log("Error conectandose con la base de datos.");
  }
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});