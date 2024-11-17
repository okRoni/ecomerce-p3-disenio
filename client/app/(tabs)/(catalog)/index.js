import { View, Text, ScrollView } from 'react-native';
import LinkButton from '../../../components/LinkButton';
import CatalogItem from '../../../components/CatalogItem';
import CatalogItemList from '../../../components/CatalogItemList';
import FiltersMenu from '../../../components/FiltersMenu';

export default function CatalogScreen() {
  const carItems = [
    {
      model: 'Carro de ejemplo',
      year: 2024,
      brand: 'Marca Ejemp',
      price: 9999999.99,
      image: null
    },{
      model: 'Carro de ejemplo 2',
      year: 2025,
      brand: 'Marca Ejemp 2',
      price: 9999999.99,
      image: null
    },{
      model: 'Carro de ejemplo 3',
      year: 2026,
      brand: 'Marca Ejemp 3',
      price: 9999999.99,
      image: null
    },{
      model: 'Carro de ejemplo 4',
      year: 2027,
      brand: 'Marca Ejemp 4',
      price: 9999999.99,
      image: null
    }
  ];
  return (
    <ScrollView>
    <View className="flex-1 max-w-5xl w-full self-center md:flex-row">
      {/* <LinkButton href="/car-details">Detalles de auto</LinkButton> */}
      <FiltersMenu />
      <View className="flex flex-1 flex-col ml-4">
        <CatalogItemList items={carItems} />
      </View>
    </View>
    </ScrollView>
  );
}