CREATE DATABASE AutosUsados

CREATE TABLE Usuario (
    tipo_identificacion VARCHAR(50) NOT NULL,
    cedula VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido1 VARCHAR(100) NOT NULL,
    apellido2 VARCHAR(100),
    nacionalidad VARCHAR(50),
    fecha_nacimiento DATE,
    correo_electronico VARCHAR(100),
    telefono VARCHAR(20),
    provincia VARCHAR(50),
    canton VARCHAR(50),
    distrito VARCHAR(50)
);

CREATE TABLE Vehiculo (
    id INT PRIMARY KEY IDENTITY(1,1),
    tipo_vehiculo VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    anno INT,
    placa VARCHAR(20) UNIQUE,
    precio_colones DECIMAL(18,2) NOT NULL,
    negociable BIT,
    recibe_otros_vehiculos BIT,
    fotos VARBINARY(MAX),
    transmision_sencilla_o_4x4 VARCHAR(10),
    cantidad_puertas INT,
    dimensiones_largo DECIMAL(5,2),
    dimensiones_ancho DECIMAL(5,2),
    dimensiones_alto DECIMAL(5,2),
    material_asientos VARCHAR(50),
    motor VARCHAR(100),
    vidrios_electricos BIT,
    espejos_electricos BIT,
    sensores_proximidad_traseros BIT,
    sensores_proximidad_delanteros BIT,
    camara_retroceso BIT,
    camara_360 BIT,
    sensores_proximidad_lateral BIT,
    tablero_mando VARCHAR(100),
    transmision VARCHAR(50),
    tapizado VARCHAR(50),
    sistema_sonido VARCHAR(100),
    estado_vehiculo VARCHAR(50),
    asociado_a_leasing BIT
);

USE AutosUsados;

-- Insertar usuarios en la tabla Usuario
INSERT INTO Usuario (tipo_identificacion, cedula, nombre, apellido1, apellido2, nacionalidad, fecha_nacimiento, correo_electronico, telefono, provincia, canton, distrito)
VALUES
('Cédula Nacional', '101010101', 'Carlos', 'Martínez', 'Jiménez', 'Costarricense', '1985-06-15', 'carlos.martinez@example.com', '8888-5555', 'San José', 'Central', 'Carmen'),
('Pasaporte', 'P123456', 'Ana', 'González', 'Rodríguez', 'Nicaragüense', '1990-08-22', 'ana.gonzalez@example.com', '8877-6666', 'Alajuela', 'Central', 'San José'),
('Cédula Nacional', '202020202', 'Luis', 'Ramírez', 'Soto', 'Costarricense', '1975-12-03', 'luis.ramirez@example.com', '8866-7777', 'Heredia', 'Central', 'Heredia');

-- Insertar vehículos en la tabla Vehiculo
INSERT INTO Vehiculo (tipo_vehiculo, marca, modelo, anno, placa, precio_colones, negociable, recibe_otros_vehiculos, transmision_sencilla_o_4x4, cantidad_puertas, dimensiones_largo, dimensiones_ancho, dimensiones_alto, material_asientos, motor, vidrios_electricos, espejos_electricos, sensores_proximidad_traseros, sensores_proximidad_delanteros, camara_retroceso, camara_360, sensores_proximidad_lateral, tablero_mando, transmision, tapizado, sistema_sonido, estado_vehiculo, asociado_a_leasing)
VALUES
('SUV', 'Toyota', 'RAV4', 2020, 'ABC123', 15000000, 1, 1, '4x4', 5, 4.60, 1.85, 1.70, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 0, 0, '100% táctil', 'Automática', 'Tela', 'Estéreo 7.1', '3', 0),
('Sedán', 'Honda', 'Civic', 2018, 'DEF456', 12000000, 0, 0, 'Sencilla', 4, 4.50, 1.75, 1.45, 'Cuero', 'Diesel', 1, 1, 0, 0, 1, 0, 0, 'Analógo', 'Manual', 'Cuero', 'Estándar', '2', 1),
('Camioneta', 'Ford', 'Ranger', 2022, 'GHI789', 22000000, 1, 1, '4x4', 4, 5.35, 1.90, 1.80, 'Tela', 'Híbrido', 1, 1, 1, 1, 1, 1, 1, 'Analógo', 'Dual', 'Plástico', 'Estándar', '1', 0);
