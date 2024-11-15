import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function CatalogScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Modulo de compra y busqueda de auto</Text>
      <Link href="/car-details">Detalles de auto</Link>
    </View>
  );
}