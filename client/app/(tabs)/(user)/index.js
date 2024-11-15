import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function UserScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className='text-xl'>Info de Usuario</Text>
      <Text>tambien puede redirigirse a estos dos si se necesitara:</Text>
      <Link href="/login">Iniciar sesión</Link>
      <Link href="/register">Registrarse</Link>
    </View>
  );
}