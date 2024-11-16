import dotenv from 'dotenv';
dotenv.config();
import sql from 'mssql';

// Configuracion de la base de datos
const dbSettings = {
  user: process.env.DB_USER, // Usuario
  password: process.env.DB_PASS, // Contraseña
  server: "localhost",
  database: "AutosUsados",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

// Funcion para conseguir el pool de conexion
export const getConnection = async () => {
  console.log(dbSettings);
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Error con la conexion a la base de datos:', error);
  }
};
