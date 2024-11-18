import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import LinkButton from '../../../../components/LinkButton';
import ComboBoxWithLabel from '../../../../components/ComboBoxWithLabel.js';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState, useCallback } from 'react';
import { TimePickerModal, DatePickerModal } from 'react-native-paper-dates';
import DbRequest from '../../../../utils/DbRequest.js';
import ApiBanco from '../../../../utils/ApiBanco.js';
import Toast from 'react-native-toast-message';

export default function ReserveCarScreen() {
  const { id } = useLocalSearchParams();
  const [car, setCar] = useState(null);
  const [valorDolares, setValorDolares] = useState(null);
  const [DatePickerOpen, setDatePickerOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [timePickerVisible, setTimePickerVisible] = useState(false);
  const [hours, setHours] = useState(undefined);
  const [minutes, setMinutes] = useState(undefined);
  const [lugar, setLugar] = useState('');

  const onDismissDatePicker = useCallback(() => {
    setDatePickerOpen(false);
  }, [setDatePickerOpen]);

  const onConfirmDatePicker = useCallback(({ date }) => {
    setDatePickerOpen(false);
    setDate(date);
  }, [setDatePickerOpen, setDate]);

  const onDismissTimePicker = useCallback(() => {
    setTimePickerVisible(false);
  }, [setTimePickerVisible]);

  const onConfirmTimePicker = useCallback(({ hours, minutes }) => {
    setTimePickerVisible(false);
    setHours(hours);
    setMinutes(minutes);
  }, [setTimePickerVisible]);

  useEffect(() => {
    async function getCar() {
      const car = await DbRequest.getCarById(id);
      setCar(car);
      const apiBanco = new ApiBanco();
      const cambio = await apiBanco.colonesToDolares(car.precio_colones);
      setValorDolares(cambio);
    }

    getCar();
  }, [id]);

  const handleDropdown = (name, value) => {
    setLugar(value);
  };

  return (
    <ScrollView className="flex-1 max-w-5xl w-full self-center">
      {car ? (
        <View className="">
          <Link href={`/car-details/${id}`} className='text-lg text-indigo-500 font-semibold'>
            ← Volver
          </Link>
          <View className="flex rounded-lg overflow-hidden w-full h-48 justify-center items-center bg-white mb-4">
            <Image 
              source={car.fotos || require('../../../../assets/car-placeholder.jpg')} 
              className="w-full h-full flex-1" 
              resizeMode="contain"
            />
          </View>          
          <View className="flex-1 p-4 bg-white rounded-lg border-b-2 border-indigo-300 mb-4">
            <Text className="text-3xl text-blue-700 font-bold mb-2">{car.marca} {car.modelo} ({car.anno})</Text>
            <Text className="text-lg font-semibold">₡{car.precio_colones} - ${valorDolares}</Text>
          </View>
        </View>
      ) : (
        <Text className="text-center text-lg">Cargando detalles del auto...</Text>
      )}
      <View className="flex-col md:flex-row md:space-x-4">
        <View className="flex-1 p-4 bg-white rounded-lg border-b-2 border-indigo-300 mb-4">
          <Text className="text-lg font-semibold">Reservar lugar de Cita</Text>
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-sm text-gray-500">
                Fecha: {date ? date.toDateString() : 'No seleccionada'}
              </Text>
              <TouchableOpacity onPress={() => setDatePickerOpen(true)}
                className="mr-4 bg-indigo-900 p-2 rounded-lg">
                <Text className="text-md text-white text-center">Seleccionar Fecha</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-1">
              <Text className="text-sm text-gray-500">
                Hora: {hours ? `${hours}:${minutes}` : 'No seleccionada'}
              </Text>
              <TouchableOpacity onPress={() => setTimePickerVisible(true)}
                className="bg-indigo-900 p-2 rounded-lg">
                <Text className="text-md text-white text-center">Seleccionar Hora</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DatePickerModal
            visible={DatePickerOpen}
            onDismiss={onDismissDatePicker}
            date={date}
            onConfirm={onConfirmDatePicker}
            locale="es"
            mode="single"
          />
          <TimePickerModal
            visible={timePickerVisible}
            onDismiss={onDismissTimePicker}
            onConfirm={onConfirmTimePicker}
            locale="es"
            mode="24h"
          />
          <ComboBoxWithLabel label="Lugar" 
            value={lugar}
            onChange={handleDropdown}
            items={[
              { label: 'San José', value: 'San José' },
              { label: 'Alajuela', value: 'Alajuela' },
              { label: 'Cartago', value: 'Cartago' },
              { label: 'Heredia', value: 'Heredia' },
            ]}
          />
        </View>
        <View className="flex-1 justify-center items-center">
          <TouchableOpacity className="p-4 bg-indigo-800 rounded-2xl w-32 justify-center items-center"
            onPress={() => {
              console.log('Reservar', car.id, date, hours, minutes, lugar);
              DbRequest.saveReservation({
                carId: car.id,
                date,
                hours,
                minutes,
                lugar
              });
            }}>
              <Text className="text-lg font-semibold text-white text-center">Reservar</Text>
          </TouchableOpacity>
          <Text className="flex-1 text-center italic">Costo de ₡2000</Text>
        </View>
      </View>
      <Toast/>
    </ScrollView>
  );
}