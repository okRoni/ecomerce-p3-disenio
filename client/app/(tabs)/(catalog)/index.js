import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import LinkButton from '../../../components/LinkButton';

export default function CatalogScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Modulo de compra y busqueda de auto</Text>
      <LinkButton href="/car-details">Detalles de auto</LinkButton>
    </View>
  );
}