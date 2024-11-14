const sql = require('mssql');  // Usa require en vez de import

// Configuracion de la base de datos
const dbSettings = {
  user: "sa",
  password: "VhFhRsY2900",
  server: "localhost",
  database: "AutosUsados",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
};

// Funcion para conseguir el pool de conexion
const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Error con la conexion a la base de datos:', error);
  }
};

module.exports = { getConnection };  // Usa module.exports en vez de export
