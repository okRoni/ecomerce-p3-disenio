import { getConnection } from '../conexion.js';
import sql from 'mssql';

// CUSTOMERS
export const getAllCarsWithFilters = async (req, res) => {
    try {
        const pool = await getConnection();
        const request = await pool.request();

        console.log(req.query);

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

export const getCarById = async (req, res) => {
    try {
        const pool = await getConnection();
        const request = await pool.request();

        request.input('id', sql.Int, req.params.id);

        const result = await request.execute('sp_get_vehiculo_by_id');

        return res.json(result.recordset[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const registrarVehiculo = async (req, res) => {
    const {
        tipo_vehiculo,
        marca,
        modelo,
        anno,
        placa,
        precio_colones,
        negociable,
        recibe_otros_vehiculos,
        fotos,
        transmision_sencilla_o_4x4,
        cantidad_puertas,
        dimensiones_largo,
        dimensiones_ancho,
        dimensiones_alto,
        material_asientos,
        motor,
        vidrios_electricos,
        espejos_electricos,
        sensores_proximidad_traseros,
        sensores_proximidad_delanteros,
        camara_retroceso,
        camara_360,
        sensores_proximidad_lateral,
        tablero_mando,
        transmision,
        tapizado,
        sistema_sonido,
        estado_vehiculo,
        asociado_a_leasing
    } = req.body;

    try {
        const pool = await sql.connect(getConnection());

        await pool.request()
            .input('tipo_vehiculo', sql.VarChar(50), tipo_vehiculo)
            .input('marca', sql.VarChar(50), marca)
            .input('modelo', sql.VarChar(50), modelo)
            .input('anno', sql.Int, anno)
            .input('placa', sql.VarChar(20), placa)
            .input('precio_colones', sql.Decimal(18, 2), precio_colones)
            .input('negociable', sql.Bit, negociable)
            .input('recibe_otros_vehiculos', sql.Bit, recibe_otros_vehiculos)
            .input('fotos', sql.VarBinary(sql.MAX), fotos) // Adjust as needed
            .input('transmision_sencilla_o_4x4', sql.VarChar(10), transmision_sencilla_o_4x4)
            .input('cantidad_puertas', sql.Int, cantidad_puertas)
            .input('dimensiones_largo', sql.Decimal(5, 2), dimensiones_largo)
            .input('dimensiones_ancho', sql.Decimal(5, 2), dimensiones_ancho)
            .input('dimensiones_alto', sql.Decimal(5, 2), dimensiones_alto)
            .input('material_asientos', sql.VarChar(50), material_asientos)
            .input('motor', sql.VarChar(100), motor)
            .input('vidrios_electricos', sql.Bit, vidrios_electricos)
            .input('espejos_electricos', sql.Bit, espejos_electricos)
            .input('sensores_proximidad_traseros', sql.Bit, sensores_proximidad_traseros)
            .input('sensores_proximidad_delanteros', sql.Bit, sensores_proximidad_delanteros)
            .input('camara_retroceso', sql.Bit, camara_retroceso)
            .input('camara_360', sql.Bit, camara_360)
            .input('sensores_proximidad_lateral', sql.Bit, sensores_proximidad_lateral)
            .input('tablero_mando', sql.VarChar(100), tablero_mando)
            .input('transmision', sql.VarChar(50), transmision)
            .input('tapizado', sql.VarChar(50), tapizado)
            .input('sistema_sonido', sql.VarChar(100), sistema_sonido)
            .input('estado_vehiculo', sql.VarChar(50), estado_vehiculo)
            .input('asociado_a_leasing', sql.Bit, asociado_a_leasing)
            .query(`
                INSERT INTO Vehiculo (tipo_vehiculo, marca, modelo, anno, placa, precio_colones, negociable, recibe_otros_vehiculos, fotos, 
                                      transmision_sencilla_o_4x4, cantidad_puertas, dimensiones_largo, dimensiones_ancho, dimensiones_alto, 
                                      material_asientos, motor, vidrios_electricos, espejos_electricos, sensores_proximidad_traseros, 
                                      sensores_proximidad_delanteros, camara_retroceso, camara_360, sensores_proximidad_lateral, 
                                      tablero_mando, transmision, tapizado, sistema_sonido, estado_vehiculo, asociado_a_leasing)
                VALUES (@tipo_vehiculo, @marca, @modelo, @anno, @placa, @precio_colones, @negociable, @recibe_otros_vehiculos, @fotos, 
                        @transmision_sencilla_o_4x4, @cantidad_puertas, @dimensiones_largo, @dimensiones_ancho, @dimensiones_alto, 
                        @material_asientos, @motor, @vidrios_electricos, @espejos_electricos, @sensores_proximidad_traseros, 
                        @sensores_proximidad_delanteros, @camara_retroceso, @camara_360, @sensores_proximidad_lateral, 
                        @tablero_mando, @transmision, @tapizado, @sistema_sonido, @estado_vehiculo, @asociado_a_leasing)
            `);

        res.status(201).send('Vehículo registrado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registrando el vehículo');
    }
};

