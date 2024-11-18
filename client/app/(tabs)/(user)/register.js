import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Registrar = () => {
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
    const [focusedField, setFocusedField] = useState('');

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField('');
    };

    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        handleChange('fecha_nacimiento', formattedDate);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_IP}:3000/api/registrar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Alert.alert('Exito', 'Usuario registrado correctamente');
            } else {
                Alert.alert('Error', 'Error al registrar al usuario');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Ha ocurrido un error');
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={formData.tipo_identificacion}
                onValueChange={(value) => handleChange('tipo_identificacion', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de identificación" value="null" />
                <Picker.Item label="Cédula Nacional" value="Cédula Nacional" />
                <Picker.Item label="Pasaporte" value="Pasaporte" />
                <Picker.Item label="Licencia de Conducir" value="Licencia de Conducir" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'cedula' ? '' : 'Número de Identificación'}
                onFocus={() => handleFocus('cedula')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('cedula', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'nombre' ? '' : 'Nombre'}
                onFocus={() => handleFocus('nombre')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('nombre', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'apellido1' ? '' : 'Primer Apellido'}
                onFocus={() => handleFocus('apellido1')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('apellido1', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'apellido2' ? '' : 'Segundo Apellido'}
                onFocus={() => handleFocus('apellido2')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('apellido2', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'nacionalidad' ? '' : 'Nacionalidad'}
                onFocus={() => handleFocus('nacionalidad')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('nacionalidad', value)}
            />

            <Text style={styles.label}>Fecha de Nacimiento</Text>
            <DatePicker
                selected={formData.fecha_nacimiento ? new Date(formData.fecha_nacimiento) : null}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                customInput={<TextInput style={styles.input} />}
            />

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'correo_electronico' ? '' : 'Correo Electrónico'}
                onFocus={() => handleFocus('correo_electronico')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('correo_electronico', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'telefono' ? '' : 'Número de Teléfono'}
                onFocus={() => handleFocus('telefono')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('telefono', value)}
            />

            <Picker
                selectedValue={formData.provincia}
                onValueChange={(value) => handleChange('provincia', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione la provincia" value="null" />
                <Picker.Item label="Limón" value="Limón" />
                <Picker.Item label="San José" value="San José" />
                <Picker.Item label="Guanacaste" value="Guanacaste" />
                <Picker.Item label="Heredia" value="Heredia" />
                <Picker.Item label="Alajuela" value="Alajuela" />
                <Picker.Item label="Puntarenas" value="Puntarenas" />
                <Picker.Item label="Cartago" value="Cartago" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'canton' ? '' : 'Cantón'}
                onFocus={() => handleFocus('canton')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('canton', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'distrito' ? '' : 'Distrito'}
                onFocus={() => handleFocus('distrito')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('distrito', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'password' ? '' : 'Contraseña'}
                secureTextEntry
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
                onChangeText={value => handleChange('password', value)}
            />

            <Button title="Registrar" onPress={handleSubmit} color="#007BFF" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    input: {
        width: '100%',
        padding: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    picker: {
        width: '100%',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    label: {
        width: '100%',
        textAlign: 'left',
        fontSize: 16,
        color: '#333',
        marginVertical: 8,
    },
});

export default Registrar;
