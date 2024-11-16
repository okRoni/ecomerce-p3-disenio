import { View, Text } from 'react-native';
import LinkButton from '../../../components/LinkButton';
import CatalogItem from '../../../components/CatalogItem';

export default function CatalogScreen() {
  const car = {
    name: 'Carro de ejemplo',
    image: null
  };
  return (
    <View className="flex-1">
      <LinkButton href="/car-details">Detalles de auto</LinkButton>
      <CatalogItem car={car} />
    </View>
  );
}