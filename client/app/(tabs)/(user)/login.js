import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';  // Import the useRouter hook
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function LoginScreen() {
  const [correo_electronico, setCorreoElectronico] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  // Use the router hook for navigation


  const handleLogin = async () => {
    try {
      //const response = await fetch('http://'+process.env.EXPO_PUBLIC_API_IP+':3000/api/login', {
      const response = await fetch('http://192.168.0.14:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo_electronico, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User data:', data);  // Log the user data
        await AsyncStorage.setItem('userData', JSON.stringify(data.user));  // Save the user data
        
        // Show success alert
        Alert.alert('Inicio de sesión exitoso', 'Bienvenid@ de vuelta, ha iniciado sesión');
        Toast.show({
          type: 'success',
          text1: 'Inicio de sesión exitoso',
          text2: 'Bienvenid@ de vuelta, ha iniciado sesión',
        });
        
        // Navigate to the index screen
        router.push('./');  // Use router.push() to navigate to the index screen
      } else {
        console.error('Error iniciando sesión', data.message);
        Alert.alert('Error de inicio de sesión', data.message); // Display an alert if login fails
        Toast.show({
          type: 'error',
          text1: 'Error de inicio de sesión',
          text2: data.message,
        });
      }
    } catch (error) {
      console.error('Error iniciando sesión', error);
      Alert.alert('Error', 'Ha ocurrido un error al iniciar sesión'); // Alert on error
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Ha ocurrido un error al iniciar sesión',
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo_electronico}
        onChangeText={setCorreoElectronico}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#007BFF" />
      <Toast/>
    </View>
  );
}

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
});
