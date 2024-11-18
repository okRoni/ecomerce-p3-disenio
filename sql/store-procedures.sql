USE AutosUsados;
GO

CREATE OR ALTER PROCEDURE sp_get_vehiculos (
  @tipo_vehiculo VARCHAR(50) = NULL,
  @marca VARCHAR(50) = NULL,
  @modelo VARCHAR(50) = NULL,
  @anno INT = NULL,
  @precio_min DECIMAL(18,2) = NULL,
  @precio_max DECIMAL(18,2) = NULL,
  @negociable BIT = NULL,
  @recibe_otros_vehiculos BIT = NULL,
  @transmision_sencilla_o_4x4 VARCHAR(10) = NULL,
  @cantidad_puertas INT = NULL,
  @dimensiones_largo DECIMAL(5,2) = NULL,
  @dimensiones_ancho DECIMAL(5,2) = NULL,
  @dimensiones_alto DECIMAL(5,2) = NULL,
  @material_asientos VARCHAR(50) = NULL,
  @motor VARCHAR(100) = NULL,
  @vidrios_electricos BIT = NULL,
  @espejos_electricos BIT = NULL,
  @sensores_proximidad_traseros BIT = NULL,
  @sensores_proximidad_delanteros BIT = NULL,
  @camara_retroceso BIT = NULL,
  @camara_360 BIT = NULL,
  @sensores_proximidad_lateral BIT = NULL,
  @tablero_mando VARCHAR(100) = NULL,
  @transmision VARCHAR(50) = NULL,
  @tapizado VARCHAR(50) = NULL,
  @sistema_sonido VARCHAR(100) = NULL,
  @estado_vehiculo VARCHAR(50) = NULL,
  @asociado_a_leasing BIT = NULL
)
AS 
BEGIN TRY
  SELECT 
    id,
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
    
  FROM Vehiculo
  WHERE
    (@tipo_vehiculo IS NULL OR tipo_vehiculo = @tipo_vehiculo) AND
    (@marca IS NULL OR marca = @marca) AND
    (@modelo IS NULL OR modelo = @modelo) AND
    (@anno IS NULL OR anno = @anno) AND
    (@precio_min IS NULL OR precio_colones >= @precio_min) AND
    (@precio_max IS NULL OR precio_colones <= @precio_max) AND
    (@negociable IS NULL OR negociable = @negociable) AND
    (@recibe_otros_vehiculos IS NULL OR recibe_otros_vehiculos = @recibe_otros_vehiculos) AND
    (@transmision_sencilla_o_4x4 IS NULL OR transmision_sencilla_o_4x4 = @transmision_sencilla_o_4x4) AND
    (@cantidad_puertas IS NULL OR cantidad_puertas = @cantidad_puertas) AND
    (@dimensiones_largo IS NULL OR dimensiones_largo = @dimensiones_largo) AND
    (@dimensiones_ancho IS NULL OR dimensiones_ancho = @dimensiones_ancho) AND
    (@dimensiones_alto IS NULL OR dimensiones_alto = @dimensiones_alto) AND
    (@material_asientos IS NULL OR material_asientos = @material_asientos) AND
    (@motor IS NULL OR motor = @motor) AND
    (@vidrios_electricos IS NULL OR vidrios_electricos = @vidrios_electricos) AND
    (@espejos_electricos IS NULL OR espejos_electricos = @espejos_electricos) AND
    (@sensores_proximidad_traseros IS NULL OR sensores_proximidad_traseros = @sensores_proximidad_traseros) AND
    (@sensores_proximidad_delanteros IS NULL OR sensores_proximidad_delanteros = @sensores_proximidad_delanteros) AND
    (@camara_retroceso IS NULL OR camara_retroceso = @camara_retroceso) AND
    (@camara_360 IS NULL OR camara_360 = @camara_360) AND
    (@sensores_proximidad_lateral IS NULL OR sensores_proximidad_lateral = @sensores_proximidad_lateral) AND
    (@tablero_mando IS NULL OR tablero_mando = @tablero_mando) AND
    (@transmision IS NULL OR transmision = @transmision) AND
    (@tapizado IS NULL OR tapizado = @tapizado) AND
    (@sistema_sonido IS NULL OR sistema_sonido = @sistema_sonido) AND
    (@estado_vehiculo IS NULL OR estado_vehiculo = @estado_vehiculo) AND
    (@asociado_a_leasing IS NULL OR asociado_a_leasing = @asociado_a_leasing);

END TRY
BEGIN CATCH
  IF @@TRANCOUNT > 0
    ROLLBACK TRANSACTION;

  THROW;
END CATCH;
GO

CREATE OR ALTER PROCEDURE sp_get_vehiculo_by_id (
  @id INT
)
AS
BEGIN TRY
  SELECT 
    id,
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
  FROM Vehiculo
  WHERE id = @id;

END TRY
BEGIN CATCH
  IF @@TRANCOUNT > 0
    ROLLBACK TRANSACTION;

  THROW;
END CATCH;
GO
