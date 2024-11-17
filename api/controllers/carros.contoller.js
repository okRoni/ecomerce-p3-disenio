import { getConnection } from '../conexion.js';
import sql from 'mssql';

// CUSTOMERS
export const getAllCarsWithFilters = async (req, res) => {
    try {
        const pool = await getConnection();
        const request = await pool.request();

        request.input('tipo_vehiculo', sql.VarChar(50), req.query.tipo_vehiculo);
        request.input('marca', sql.VarChar(50), req.query.marca);
        request.input('modelo', sql.VarChar(50), req.query.modelo);
        request.input('anno', sql.Int, req.query.anno);
        request.input('precio_min', sql.Decimal(18, 2), req.query.precio_min);
        request.input('precio_max', sql.Decimal(18, 2), req.query.precio_max);
        request.input('negociable', sql.Bit, req.query.negociable);
        request.input('recibe_otros_vehiculos', sql.Bit, req.query.recibe_otros_vehiculos);
        request.input('transmision_sencilla_o_4x4', sql.VarChar(10), req.query.transmision_sencilla_o_4x4);
        request.input('cantidad_puertas', sql.Int, req.query.cantidad_puertas);
        request.input('dimensiones_largo', sql.Decimal(5, 2), req.query.dimensiones_largo);
        request.input('dimensiones_ancho', sql.Decimal(5, 2), req.query.dimensiones_ancho);
        request.input('dimensiones_alto', sql.Decimal(5, 2), req.query.dimensiones_alto);
        request.input('material_asientos', sql.VarChar(50), req.query.material_asientos);
        request.input('motor', sql.VarChar(100), req.query.motor);
        request.input('vidrios_electricos', sql.Bit, req.query.vidrios_electricos);
        request.input('espejos_electricos', sql.Bit, req.query.espejos_electricos);
        request.input('sensores_proximidad_traseros', sql.Bit, req.query.sensores_proximidad_traseros);
        request.input('sensores_proximidad_delanteros', sql.Bit, req.query.sensores_proximidad_delanteros);
        request.input('camara_retroceso', sql.Bit, req.query.camara_retroceso);
        request.input('camara_360', sql.Bit, req.query.camara_360);
        request.input('sensores_proximidad_lateral', sql.Bit, req.query.sensores_proximidad_lateral);
        request.input('tablero_mando', sql.VarChar(100), req.query.tablero_mando);
        request.input('transmision', sql.VarChar(50), req.query.transmision);
        request.input('tapizado', sql.VarChar(50), req.query.tapizado);
        request.input('sistema_sonido', sql.VarChar(100), req.query.sistema_sonido);
        request.input('estado_vehiculo', sql.VarChar(50), req.query.estado_vehiculo);
        request.input('asociado_a_leasing', sql.Bit, req.query.asociado_a_leasing);

        const result = await request.execute('sp_get_vehiculos');

        return res.json(result.recordset);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
