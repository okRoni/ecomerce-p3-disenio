import { getConnection } from '../conexion.js';
import sql from 'mssql';

// CUSTOMERS
export const getAllCarsWithFilters = async (req, res) => {
    try {
        const pool = await getConnection();
        const request = await pool.request();

        // const customerName = req.query.customerName || '';

        // request.input('CustomerName', sql.VarChar(50), customerName);

        const result = await request.query('SELECT * FROM Vehiculo');
        // const result = await request.execute('GetAllCarsWithFilters');

        return res.json(result.recordset);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
