import dotenv from 'dotenv';
dotenv.config();

//console.log('DB_USER:', process.env.DB_USER);
//console.log('DB_PASS:', process.env.DB_PASS);

import express from 'express';
import cors from 'cors';
import sql from 'mssql';
import { getConnection } from './conexion.js';
import routes from './routes/usuarios.routes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

// Test the database connection
getConnection().then(pool => {
  if (pool) {
      console.log("Conexion con la base de datos exitosa.");
  } else {
      console.log("Error conectandose con la base de datos.");
  }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});