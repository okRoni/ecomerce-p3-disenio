USE AutosUsados;
GO

-- borron y cuenta nueva
DELETE FROM Vehiculo;
GO

INSERT INTO Vehiculo (tipo_vehiculo, marca, modelo, anno, placa, precio_colones, negociable, recibe_otros_vehiculos, transmision_sencilla_o_4x4, cantidad_puertas, dimensiones_largo, dimensiones_ancho, dimensiones_alto, material_asientos, motor, vidrios_electricos, espejos_electricos, sensores_proximidad_traseros, sensores_proximidad_delanteros, camara_retroceso, camara_360, sensores_proximidad_lateral, tablero_mando, transmision, tapizado, sistema_sonido, estado_vehiculo, asociado_a_leasing)
VALUES
('SUV', 'Toyota', 'RAV4', 2020, 'ABC123', 15000000, 1, 1, '4x4', 5, 4.60, 1.85, 1.70, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 0, 0, '100% tactil', 'Automática', 'Tela', 'Estéreo 7.1', '3', 0),
('Sedán', 'Honda', 'Civic', 2018, 'DEF456', 12000000, 0, 0, 'Sencilla', 4, 4.50, 1.75, 1.45, 'Cuero', 'Diesel', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Cuero', 'Estándar', '2', 1),
('Camioneta', 'Ford', 'Ranger', 2022, 'GHI789', 22000000, 1, 1, '4x4', 4, 5.35, 1.90, 1.80, 'Tela', 'Híbrido', 1, 1, 1, 1, 1, 1, 1, 'Analágo', 'Dual', 'Plástico', 'Estándar', '1', 0),
('SUV', 'Jeep', 'Wrangler', 2021, 'JKL101', 30000000, 1, 1, '4x4', 5, 4.80, 2.00, 2.10, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1),
('Sedán', 'Toyota', 'Corolla', 2019, 'MNO112', 14000000, 0, 0, 'Sencilla', 4, 4.50, 1.75, 1.45, 'Tela', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Tela', 'Estándar', '2', 0),
('Camioneta', 'Chevrolet', 'Silverado', 2020, 'PQR131', 25000000, 1, 1, '4x4', 4, 5.50, 2.00, 2.00, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1),
('SUV', 'Mitsubishi', 'Outlander', 2021, 'STU141', 18000000, 1, 1, '4x4', 5, 4.70, 1.90, 1.80, 'Tela', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Tela', 'Estéreo 7.1', '3', 0),
('Sedán', 'Hyundai', 'Elantra', 2017, 'VWX151', 10000000, 0, 0, 'Sencilla', 4, 4.40, 1.70, 1.40, 'Tela', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Tela', 'Estándar', '2', 1),
('Camioneta', 'Nissan', 'Frontier', 2022, 'YZA161', 23000000, 1, 1, '4x4', 4, 5.40, 1.95, 1.85, 'Cuero', 'Híbrido', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 0),
('SUV', 'Kia', 'Sportage', 2020, 'BCD171', 16000000, 1, 1, '4x4', 5, 4.65, 1.80, 1.75, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 0, 0, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1),
('Sedán', 'Volkswagen', 'Jetta', 2019, 'CDE181', 13000000, 0, 0, 'Sencilla', 4, 4.55, 1.80, 1.50, 'Cuero', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Cuero', 'Estéreo 7.1', '2', 0),
('Camioneta', 'Dodge', 'Ram', 2021, 'EFG191', 24000000, 1, 1, '4x4', 4, 5.60, 2.10, 2.10, 'Tela', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Tela', 'Estéreo 7.1', '3', 1),
('SUV', 'Subaru', 'Forester', 2021, 'GHI201', 19000000, 1, 1, '4x4', 5, 4.75, 1.85, 1.80, 'Tela', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Tela', 'Estéreo 7.1', '3', 0),
('Sedán', 'Mazda', '3', 2018, 'IJK211', 11000000, 0, 0, 'Sencilla', 4, 4.60, 1.75, 1.45, 'Cuero', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Cuero', 'Estéreo 7.1', '2', 1),
('Camioneta', 'GMC', 'Sierra', 2022, 'KLM221', 26000000, 1, 1, '4x4', 4, 5.70, 2.20, 2.20, 'Cuero', 'Híbrido', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 0),
('SUV', 'Audi', 'Q5', 2020, 'MNO231', 17000000, 1, 1, '4x4', 5, 4.85, 1.90, 1.85, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 0, 0, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1),
('Sedán', 'BMW', 'Serie 3', 2019, 'PQR241', 15000000, 0, 0, 'Sencilla', 4, 4.65, 1.85, 1.55, 'Tela', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Tela', 'Estéreo 7.1', '2', 0),
('Camioneta', 'Mercedes-Benz', 'Clase X', 2021, 'STU251', 27000000, 1, 1, '4x4', 4, 5.80, 2.30, 2.30, 'Tela', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Tela', 'Estéreo 7.1', '3', 1),
('SUV', 'Volvo', 'XC60', 2021, 'VWX261', 20000000, 1, 1, '4x4', 5, 4.90, 1.95, 1.90, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 0),
('SUV', 'Lexus', 'RX', 2020, 'XYZ271', 21000000, 1, 1, '4x4', 5, 4.80, 1.90, 1.75, 'Cuero', 'Híbrido', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1),
('Sedán', 'Mercedes-Benz', 'Clase C', 2018, 'ABC281', 16000000, 0, 0, 'Sencilla', 4, 4.60, 1.80, 1.45, 'Cuero', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Cuero', 'Estéreo 7.1', '2', 0),
('Sedán', 'Toyota', 'Corolla', 2021, 'DEF291', 23000000, 1, 1, '4x4', 4, 5.30, 1.85, 1.80, 'Tela', 'Diesel', 1, 1, 1, 1, 1, 1, 1, 'Analágo', 'Manual', 'Tela', 'Estándar', '1', 0),
('SUV', 'BMW', 'X5', 2019, 'GHI301', 25000000, 1, 1, '4x4', 5, 4.90, 1.95, 1.85, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1),
('Sedán', 'Audi', 'A4', 2020, 'JKL311', 17000000, 0, 0, 'Sencilla', 4, 4.70, 1.85, 1.50, 'Cuero', 'Gasolina', 1, 1, 0, 0, 1, 0, 0, 'Analágo', 'Manual', 'Cuero', 'Estéreo 7.1', '2', 0),
('Camioneta', 'Nissan', 'Titan', 2022, 'MNO321', 26000000, 1, 1, '4x4', 4, 5.60, 2.10, 2.10, 'Cuero', 'Gasolina', 1, 1, 1, 1, 1, 1, 1, '100% tactil', 'Automática', 'Cuero', 'Estéreo 7.1', '3', 1);
GO