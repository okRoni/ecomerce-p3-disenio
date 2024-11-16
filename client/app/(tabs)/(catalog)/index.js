import { View, Text } from 'react-native';
import LinkButton from '../../../components/LinkButton';
import CatalogItem from '../../../components/CatalogItem';

export default function CatalogScreen() {
  const car = {
    model: 'Carro de ejemplo',
    year: 2024,
    brand: 'Marca Ejemp',
    price: 9999999.99,
    image: null
  };
  return (
    <View className="flex-1">
      <LinkButton href="/car-details">Detalles de auto</LinkButton>
      <CatalogItem model={car.model} year={car.year} brand={car.brand} image={car.image} price={car.price} />
    </View>
  );
}