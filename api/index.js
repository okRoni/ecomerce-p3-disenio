import dotenv from 'dotenv';
dotenv.config();

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);

import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import { getConnection } from './conexion.js';
import routes from './routes/carros.routes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

// Funcion de prueba para obtener todos los usuarios de la base de datos
const getAllUsuarios = async () => {
    try {
      // Obtiene el pool de conexion con la base de datos
      const pool = await getConnection();
  
      // Ejecuta el query
      const result = await pool.request().query('SELECT * FROM Usuario');
  
      // Muestra las filas
      console.log(result.recordset);
    } catch (err) {
      console.error('Error al consultar la base de datos:', err);
    }
};

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });