class DbRequest {
  static instance = null;

  constructor() {
    if (DbRequest.instance) {
      return DbRequest.instance;
    }

    this.url = `http://${process.env.EXPO_PUBLIC_API_IP}:3000`;
    DbRequest.instance = this;
  }

  async getAllCars() {
    try {
      const requestUrl = `${this.url}/cars`;

      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error
      return null;
    }
  }

  async getAllCarsWithFilters(filters) {
    try {
      filters = this.adaptFiltersToApiFormat(filters) || {};
      const requestUrl = `${this.url}/cars?${new URLSearchParams(filters).toString()}`;

      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error
      return null;
    }
  }

  adaptFiltersToApiFormat(filters) {
    let adaptedFilters = {
      marca: filters.marca,
      modelo: filters.modelo,
      anno: filters.año,
      precio_min: filters.precioMin,
      precio_max: filters.precioMax,
      dimensiones_largo: filters.largo,
      dimensiones_ancho: filters.ancho,
      dimensiones_alto: filters.alto,
      negociable: filters.negociable,
      recibe_otros_vehiculos: filters.recibeOtrosVehiculos,
      sensores_proximidad_traseros: filters.sensoresTraseros,
      sensores_proximidad_delanteros: filters.sensoresDelanteros,
      camara_retroceso: filters.camaraRetroceso,
      camara_360: filters.camara360,
      sensores_proximidad_lateral: filters.sensoresLaterales,
      vidrios_electricos: filters.vidriosElectricos,
      espejos_electricos: filters.espejosElectricos,
      asociado_a_leasing: filters.leasing,
      tablero_mando: filters.tablero,
      cantidad_puertas: filters.puertas,
      material_asientos: filters.asientos,
      motor: filters.motor,
      transmision: filters.transmision,
      tapizado: filters.tapizado,
      sistema_sonido: filters.sonido,
      estado_vehiculo: filters.estado,
      transmision_sencilla_o_4x4: filters.transmisionTipo
    };

    // Remove filters with empty strings or false values
    Object.keys(adaptedFilters).forEach(key => {
      if (adaptedFilters[key] === '' || adaptedFilters[key] === false) {
        delete adaptedFilters[key];
      }
    });

    return adaptedFilters;
  }

}

const instance = new DbRequest();
Object.freeze(instance);

export default instance;