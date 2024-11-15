import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function CarDetailsScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Detalles de auto</Text>
      <Link href="/reserve/">Reservar</Link>
    </View>
  );
}