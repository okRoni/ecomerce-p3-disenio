import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

class DbRequest {
  static instance = null;

  constructor() {
    if (DbRequest.instance) {
      return DbRequest.instance;
    }

    this.url = `http://${process.env.EXPO_PUBLIC_API_IP}:3000`;
    this.user = null;
    DbRequest.instance = this;
  }

  setUser(user) {
    this.user = user;
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
      const data = await response.json();

      return data;
    } catch (error) {
      console.error
      return [];
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
      const data = await response.json();

      return data;
    } catch (error) {
      console.error
      return [];
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

  async getCarById(id) {
    try {
      const requestUrl = `${this.url}/cars/${id}`;

      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async saveReservation(reservation) {
    try {
      await this.validateUser();
      if (!this.user) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Debe iniciar sesión para reservar un vehículo'
        });
        return null;
      }
      const formatedReservation = await this.adaptReservationToApiFormat(reservation);

      const requestUrl = `${this.url}/reservations`;

      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formatedReservation)
      });
      const data = await response.json();
      if (response.status === 500) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: data.message || 'Ha ocurrido un error al guardar la reservación'
        });
        return null;
      }
      Toast.show({
        type: 'success',
        text1: 'Reservación exitosa',
        text2: 'Su reservación ha sido guardada exitosamente'
      });
      return data;
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Por favor verifique los datos ingresados'
      });
      console.error(error);
      return null;
    }
  }

  async adaptReservationToApiFormat(reservation) {
    const adaptedReservation = {
      cedula: this.user.cedula,
      id_vehiculo: reservation.carId,
      fecha: reservation.date,
      hora: (reservation.hours < 10 ? '0' : '') + reservation.hours + ':' + reservation.minutes + ':00',
      ubicacion: reservation.lugar
    };

    return adaptedReservation;
  }

  async validateUser() {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        this.user = JSON.parse(userData);
        return this.user;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

const instance = new DbRequest();

export default instance;