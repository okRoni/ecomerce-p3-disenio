const express = require('express');
const cors = require('cors');
const sql = require('mssql');
const { getConnection } = require('./conexion.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

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
  
// Call the function
getAllUsuarios();

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });