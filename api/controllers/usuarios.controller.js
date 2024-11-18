import { getConnection } from '../conexion.js';
import sql from 'mssql';
import bcrypt from 'bcrypt';

// Registrar usuario
export const registrarUsuario = async (req, res) => {
    const { tipo_identificacion, cedula, nombre, apellido1, apellido2, nacionalidad, fecha_nacimiento, correo_electronico, telefono, provincia, canton, distrito, password } = req.body;

    try {
        // Hash the password
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // Insert user data into database
        const pool = await sql.connect(getConnection());
        await pool.request()
            .input('tipo_identificacion', sql.VarChar(50), tipo_identificacion)
            .input('cedula', sql.VarChar(20), cedula)
            .input('nombre', sql.VarChar(100), nombre)
            .input('apellido1', sql.VarChar(100), apellido1)
            .input('apellido2', sql.VarChar(100), apellido2)
            .input('nacionalidad', sql.VarChar(50), nacionalidad)
            .input('fecha_nacimiento', sql.Date, fecha_nacimiento)
            .input('correo_electronico', sql.VarChar(100), correo_electronico)
            .input('telefono', sql.VarChar(20), telefono)
            .input('provincia', sql.VarChar(50), provincia)
            .input('canton', sql.VarChar(50), canton)
            .input('distrito', sql.VarChar(50), distrito)
            .input('password_hash', sql.VarChar(100), passwordHash)  // Store as VARCHAR
            .query(`INSERT INTO Usuario (tipo_identificacion, cedula, nombre, apellido1, apellido2, nacionalidad, fecha_nacimiento, correo_electronico, telefono, provincia, canton, distrito, password_hash) 
                    VALUES (@tipo_identificacion, @cedula, @nombre, @apellido1, @apellido2, @nacionalidad, @fecha_nacimiento, @correo_electronico, @telefono, @provincia, @canton, @distrito, @password_hash)`);

        res.status(201).send('Usuario registrado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error registrando al usuario');
    }
};

export const loginUsuario = async (req, res) => {
    const { correo_electronico, password } = req.body;

    try {
        // Conexion con la base de datos
        const pool = await sql.connect(getConnection());

        // Query para encontrar al usuario por email
        const result = await pool.request()
            .input('correo_electronico', sql.VarChar(100), correo_electronico)
            .query(`SELECT * FROM Usuario WHERE correo_electronico = @correo_electronico`);

        if (result.recordset.length === 0) {
            // Usuario no encontrado
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Extraer datos de usuario
        const user = result.recordset[0];
        const storedHash = user.password_hash;

        // Comparar contrasenna usando bcrypt
        const isPasswordValid = await bcrypt.compare(password, storedHash);

        if (isPasswordValid) {
            // Exclude password hash from user data in the response
            const { password_hash, ...userData } = user;
            res.status(200).json({
                message: 'Inicio de sesión exitoso',
                user: userData,  // Send user data (excluding password)
            });
            // Optionalmente, generar un token aqui si se esta usando JWT para el manejo de sesion
        } else {
            res.status(401).json({ message: 'Contraseña incorrecta' });
        }
    } catch (error) {
        console.error('Error durante login:', error);
        res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
};
