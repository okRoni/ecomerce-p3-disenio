import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const registrar = () => {
    const [formData, setFormData] = useState({
        tipo_identificacion: '',
        cedula: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        nacionalidad: '',
        fecha_nacimiento: '',
        correo_electronico: '',
        telefono: '',
        provincia: '',
        canton: '',
        distrito: '',
        password: ''
    });
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (date) => {
      const formattedDate = date.toISOString().split('T')[0];
      handleChange('fecha_nacimiento', formattedDate);
  };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://192.168.0.14:3000/api/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Alert.alert('Success', 'User registered successfully');
            } else {
                Alert.alert('Error', 'Failed to register user');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'An error occurred');
        }
    };

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            handleChange('fecha_nacimiento', formattedDate);
        }
    };

    return (
        <View>
            <Picker
                selectedValue={formData.tipo_identificacion}
                onValueChange={(value) => handleChange('tipo_identificacion', value)}
            >
                <Picker.Item label="Cédula" value="cedula" />
                <Picker.Item label="Pasaporte" value="pasaporte" />
                <Picker.Item label="Licencia de Conducir" value="licencia_de_conducir" />
            </Picker>

            <TextInput placeholder="Numero de Identificación" onChangeText={value => handleChange('cedula', value)} />
            <TextInput placeholder="Nombre" onChangeText={value => handleChange('nombre', value)} />
            <TextInput placeholder="Primer Apellido" onChangeText={value => handleChange('apellido1', value)} />
            <TextInput placeholder="Segundo Apellido" onChangeText={value => handleChange('apellido2', value)} />
            <TextInput placeholder="Nacionalidad" onChangeText={value => handleChange('nacionalidad', value)} />

            <Text>Fecha de Nacimiento</Text>
            <DatePicker
                selected={formData.fecha_nacimiento ? new Date(formData.fecha_nacimiento) : null}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
            />

            <TextInput placeholder="Correo Electrónico" onChangeText={value => handleChange('correo_electronico', value)} />
            <TextInput placeholder="Teléfono" onChangeText={value => handleChange('telefono', value)} />

            <Picker
                selectedValue={formData.provincia}
                onValueChange={(value) => handleChange('provincia', value)}
            >
                <Picker.Item label="Limón" value="Limón" />
                <Picker.Item label="San José" value="San José" />
                <Picker.Item label="Guanacaste" value="Guanacaste" />
                <Picker.Item label="Heredia" value="Heredia" />
                <Picker.Item label="Alajuela" value="Alajuela" />
                <Picker.Item label="Puntarenas" value="Puntarenas" />
                <Picker.Item label="Cartago" value="Cartago" />
            </Picker>

            <TextInput placeholder="Cantón" onChangeText={value => handleChange('canton', value)} />
            <TextInput placeholder="Distrito" onChangeText={value => handleChange('distrito', value)} />
            <TextInput placeholder="Contraseña" secureTextEntry={true} onChangeText={value => handleChange('password', value)} />

            <Button title="Register" onPress={handleSubmit} />
        </View>
    );
};

export default registrar;
