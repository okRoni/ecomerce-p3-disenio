import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import LinkButton from '../../../components/LinkButton';

export default function SellScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Modulo de registro/venta de auto</Text>
      <LinkButton href="/sell-form">Vender un auto</LinkButton>
    </View>
  );
}