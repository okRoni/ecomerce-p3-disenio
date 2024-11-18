import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data) {
          setUserData(JSON.parse(data));
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error('Error haciendo fetch de los datos del usuario:', error);
        setUserData(null);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userData');
    setUserData(null);
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil del Usuario</Text>

      {userData ? (
        <ScrollView contentContainerStyle={styles.profileContainer}>
          <Text style={styles.profileInfo}>Nombre: {userData.nombre} {userData.apellido1} {userData.apellido2}</Text>
          <Text style={styles.profileInfo}>{userData.tipo_identificacion}: {userData.cedula}</Text>
          <Text style={styles.profileInfo}>Nacionalidad: {userData.nacionalidad}</Text>
          <Text style={styles.profileInfo}>Fecha de nacimiento: {userData.fecha_nacimiento}</Text>
          <Text style={styles.profileInfo}>Correo electrónico: {userData.correo_electronico}</Text>
          <Text style={styles.profileInfo}>Numero de teléfono: {userData.telefono}</Text>
          <Text style={styles.profileInfo}>Provincia: {userData.provincia}</Text>
          <Text style={styles.profileInfo}>Cantón: {userData.canton}</Text>
          <Text style={styles.profileInfo}>Distrito: {userData.distrito}</Text>

          <Button title="Cerrar Sesion" onPress={handleLogout} color="#ff4d4d" />
        </ScrollView>
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>Porfavor inicie sesión o registrese si no tiene cuenta.</Text>
          <Button title="Iniciar Sesión" onPress={() => router.push('/login')} />
          <Button title="Registrarse" onPress={() => router.push('/register')} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileInfo: {
    fontSize: 18,
    marginVertical: 8,
    color: '#555',
    textAlign: 'left',
    width: '100%',
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noDataText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
  },
});
