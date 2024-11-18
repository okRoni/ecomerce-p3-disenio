import { View, Text, ScrollView, Image } from 'react-native';
import LinkButton from '../../../../components/LinkButton';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import DbRequest from '../../../../utils/DbRequest.js';

export default function CarDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function getCar() {
      const car = await DbRequest.getCarById(id);
      setCar(car);
    }
    console.log(car);

    getCar();
  }, [id]);

  return (
    <ScrollView className="flex-1 max-w-5xl w-full self-center">
      {car ? (
        <View className="">
          <Link href={`/`} className='text-lg text-indigo-500 font-semibold'>
            ← Volver
          </Link>
          <View className="flex rounded-lg overflow-hidden w-full h-96 justify-center items-center bg-white mb-4">
            <Image 
              source={car.fotos || require('../../../../assets/car-placeholder.jpg')} 
              className="w-full h-full flex-1" 
              resizeMode="contain"
            />
          </View>
          <View className="flex-col md:flex-row md:space-x-4">
            <View className="flex-1 p-4 bg-white rounded-lg border-b-2 border-indigo-300 mb-4">
              <Text className="text-3xl text-blue-700 font-bold mb-2">{car.marca} {car.modelo} ({car.anno})</Text>
              <Text className="text-lg font-semibold">₡{car.precio_colones}</Text>
              <Text className="text-sm text-gray-500">Negociable: {car.negociable ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Recibe otros vehículos: {car.recibe_otros_vehiculos ? 'Sí' : 'No'}</Text>
            </View>
            <View className="flex-1 p-4 bg-white rounded-lg border-b-2 border-indigo-300 mb-4">
              <Text className="text-lg font-semibold">Especificaciones</Text>
              <Text className="text-sm text-gray-500">Transmisión: {car.transmision}</Text>
              <Text className="text-sm text-gray-500">Motor: {car.motor}</Text>
              <Text className="text-sm text-gray-500">Material de asientos: {car.material_asientos}</Text>
              <Text className="text-sm text-gray-500">Cantidad de puertas: {car.cantidad_puertas}</Text>
              <Text className="text-sm text-gray-500">Dimensiones (LxAxH): {car.dimensiones_largo} x {car.dimensiones_ancho} x {car.dimensiones_alto}</Text>
            </View>
          </View>
          <View className="flex-col md:flex-row md:space-x-4">
            <View className="flex-1 p-4 bg-white rounded-lg border-b-2 border-indigo-300 mb-4">
              <Text className="text-lg font-semibold">Características</Text>
              <Text className="text-sm text-gray-500">Vidrios eléctricos: {car.vidrios_electricos ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Espejos eléctricos: {car.espejos_electricos ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Sensores de proximidad traseros: {car.sensores_proximidad_traseros ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Sensores de proximidad delanteros: {car.sensores_proximidad_delanteros ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Cámara de retroceso: {car.camara_retroceso ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Cámara 360: {car.camara_360 ? 'Sí' : 'No'}</Text>
              <Text className="text-sm text-gray-500">Sensores de proximidad lateral: {car.sensores_proximidad_lateral ? 'Sí' : 'No'}</Text>
            </View>
            <View className="flex-1 p-4 bg-white rounded-lg border-b-2 border-indigo-300 mb-4">
              <Text className="text-lg font-semibold">Adicionales</Text>
              <Text className="text-sm text-gray-500">Tablero de mando: {car.tablero_mando}</Text>
              <Text className="text-sm text-gray-500">Tapizado: {car.tapizado}</Text>
              <Text className="text-sm text-gray-500">Sistema de sonido: {car.sistema_sonido}</Text>
              <Text className="text-sm text-gray-500">Estado del vehículo: {car.estado_vehiculo}</Text>
              <Text className="text-sm text-gray-500">Asociado a leasing: {car.asociado_a_leasing ? 'Sí' : 'No'}</Text>
            </View>
          </View>
          <LinkButton href={`/reserve-car/${id}`}>Reservar</LinkButton>
        </View>
      ) : (
        <Text className="text-center text-lg">Cargando detalles del auto...</Text>
      )}
    </ScrollView>
  );
}