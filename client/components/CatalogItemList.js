import { View, Text } from 'react-native';
import CatalogItem from './CatalogItem';

export default function CatalogItemList({ items }) {
  return (
    <View className="flex flex-1 flex-col">
      {(!items || items.length === 0) ?
        <Text className="text-center text-lg text-gray-600 mt-4">
          Sin resultados
        </Text> :
        items.map((item, index) => (
        <CatalogItem 
          key={index} 
          id={item.id}
          model={item.modelo} 
          year={item.anno} 
          brand={item.marca} 
          image={item.fotos} 
          price={item.precio_colones} 
        />
      ))}
    </View>
  );
}