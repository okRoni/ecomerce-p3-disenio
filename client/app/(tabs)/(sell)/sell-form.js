import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { VehiclePrototype } from './VehiclePrototype'; // Import the prototype

export default function SellFormScreen() {
    // Clone the prototype to initialize form data
    const [formData, setFormData] = useState({ ...VehiclePrototype });
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (field) => {
        setFocusedField(field);
    };

    const handleBlur = () => {
        setFocusedField(null);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://${process.env.EXPO_PUBLIC_API_IP}:3000/api/sell`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Alert.alert('Éxito', 'Vehículo registrado correctamente');
                setFormData({ ...VehiclePrototype }); // Reset form data after submission
            } else {
                Alert.alert('Error', 'Error al registrar el vehículo');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Ha ocurrido un error');
        }
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
            <Picker
                selectedValue={formData.tipo_vehiculo}
                onValueChange={(value) => handleChange('tipo_vehiculo', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de vehiculo" value="null" />
                <Picker.Item label="Sedán" value="Sedán" />
                <Picker.Item label="Camioneta" value="Camioneta" />
                <Picker.Item label="Sedán de lujo" value="Sedán de lujo" />
                <Picker.Item label="SUV" value="SUV" />
                <Picker.Item label="Miniván" value="Miniván" />
            </Picker>
            
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'marca' ? '' : 'Marca'}
                onFocus={() => handleFocus('marca')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('marca', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'modelo' ? '' : 'Modelo'}
                onFocus={() => handleFocus('modelo')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('modelo', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'anno' ? '' : 'Año'}
                keyboardType="numeric"
                onFocus={() => handleFocus('anno')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('anno', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'placa' ? '' : 'Placa'}
                onFocus={() => handleFocus('placa')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('placa', value)}
            />
            <TextInput
                style={styles.input}
                placeholder={focusedField === 'precio_colones' ? '' : 'Precio en Colones'}
                keyboardType="numeric"
                onFocus={() => handleFocus('precio_colones')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('precio_colones', value)}
            />

            <View style={styles.switchContainer}>
                <Text>¿Es Negociable?  </Text>
                <Switch
                    value={formData.negociable}
                    onValueChange={(value) => handleChange('negociable', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>¿Se reciben otros vehiculos a cambio?  </Text>
                <Switch
                    value={formData.recibe_otros_vehiculos}
                    onValueChange={(value) => handleChange('recibe_otros_vehiculos', value)}
                />
            </View>

            <Picker
                selectedValue={formData.transmision_sencilla_o_4x4}
                onValueChange={(value) => handleChange('transmision_sencilla_o_4x4', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione transmision sencilla o 4x4" value="null" />
                <Picker.Item label="Sencilla" value="Sencilla" />
                <Picker.Item label="4x4" value="4x4" />
            </Picker>

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'cantidad_puertas' ? '' : 'Cantidad de puertas'}
                keyboardType="numeric"
                onFocus={() => handleFocus('cantidad_puertas')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('cantidad_puertas', value)}
            />

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'dimensiones_largo' ? '' : 'Dimensiones del largo'}
                keyboardType="numeric"
                onFocus={() => handleFocus('dimensiones_largo')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('dimensiones_largo', value)}
            />

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'dimensiones_ancho' ? '' : 'Dimensiones del ancho'}
                keyboardType="numeric"
                onFocus={() => handleFocus('dimensiones_ancho')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('dimensiones_ancho', value)}
            />

            <TextInput
                style={styles.input}
                placeholder={focusedField === 'dimensiones_alto' ? '' : 'Dimensiones del alto'}
                keyboardType="numeric"
                onFocus={() => handleFocus('dimensiones_alto')}
                onBlur={handleBlur}
                onChangeText={(value) => handleChange('dimensiones_alto', value)}
            />

            <Picker
                selectedValue={formData.material_asientos}
                onValueChange={(value) => handleChange('material_asientos', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el material de los asientos" value="null" />
                <Picker.Item label="Tela" value="Tela" />
                <Picker.Item label="Cuero" value="Cuero" />
            </Picker>

            <Picker
                selectedValue={formData.motor}
                onValueChange={(value) => handleChange('motor', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de motor" value="null" />
                <Picker.Item label="Gasolina" value="Gasolina" />
                <Picker.Item label="Diesel" value="Diesel" />
                <Picker.Item label="Gas Licuado" value="Gas Licuado" />
                <Picker.Item label="Eléctrico" value="Eléctrico" />
                <Picker.Item label="Híbrido" value="Híbrido" />
            </Picker>

            <View style={styles.switchContainer}>
                <Text>Vidrios Eléctricos  </Text>
                <Switch
                    value={formData.vidrios_electricos}
                    onValueChange={(value) => handleChange('vidrios_electricos', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Espejos Eléctricos  </Text>
                <Switch
                    value={formData.espejos_electricos}
                    onValueChange={(value) => handleChange('espejos_electricos', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Sensores de proximidad traseros  </Text>
                <Switch
                    value={formData.sensores_proximidad_traseros}
                    onValueChange={(value) => handleChange('sensores_proximidad_traseros', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Sensores de proximidad delanteros  </Text>
                <Switch
                    value={formData.sensores_proximidad_delanteros}
                    onValueChange={(value) => handleChange('sensores_proximidad_delanteros', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Camara de retroceso  </Text>
                <Switch
                    value={formData.camara_retroceso}
                    onValueChange={(value) => handleChange('camara_retroceso', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Camara 360  </Text>
                <Switch
                    value={formData.camara_360}
                    onValueChange={(value) => handleChange('camara_360', value)}
                />
            </View>

            <View style={styles.switchContainer}>
                <Text>Sensores de proximidad lateral  </Text>
                <Switch
                    value={formData.sensores_proximidad_lateral}
                    onValueChange={(value) => handleChange('sensores_proximidad_lateral', value)}
                />
            </View>

            <Picker
                selectedValue={formData.tablero_mando}
                onValueChange={(value) => handleChange('tablero_mando', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de tablero de mando" value="null" />
                <Picker.Item label="100% Táctil" value="100% Táctil" />
                <Picker.Item label="Análogo" value="Análogo" />
                <Picker.Item label="Ambos" value="Ambos" />
            </Picker>

            <Picker
                selectedValue={formData.transmision}
                onValueChange={(value) => handleChange('transmision', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de transimisión" value="null" />
                <Picker.Item label="Manual" value="Manual" />
                <Picker.Item label="Automático" value="Automático" />
                <Picker.Item label="Dual" value="Dual" />
            </Picker>

            <Picker
                selectedValue={formData.tapizado}
                onValueChange={(value) => handleChange('tapizado', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de tapizado" value="null" />
                <Picker.Item label="Cuero" value="Cuero" />
                <Picker.Item label="Plástico" value="Plástico" />
                <Picker.Item label="Tela" value="Tela" />
            </Picker>

            <Picker
                selectedValue={formData.sistema_sonido}
                onValueChange={(value) => handleChange('sistema_sonido', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el tipo de sistema de sonido" value="null" />
                <Picker.Item label="Estéreo 7.1" value="Estéreo 7.1" />
                <Picker.Item label="Estándar" value="Estándar" />
            </Picker>

            <Picker
                selectedValue={formData.estado_vehiculo}
                onValueChange={(value) => handleChange('estado_vehiculo', value)}
                style={styles.input}
            >
                <Picker.Item label="Seleccione el estado del vehículo" value="null" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
            </Picker>

            <View style={styles.switchContainer}>
                <Text>Asociado a un leasing  </Text>
                <Switch
                    value={formData.asociado_a_leasing}
                    onValueChange={(value) => handleChange('asociado_a_leasing', value)}
                />
            </View>

            <Button title="Registrar Vehículo" onPress={handleSubmit} color="#007BFF" />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
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
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    }
});
