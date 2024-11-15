import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import LinkButton from '../../../components/LinkButton';

export default function CarDetailsScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">Detalles de auto</Text>
      <LinkButton href="/reserve/">Reservar</LinkButton>
    </View>
  );
}