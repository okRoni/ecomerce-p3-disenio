import { View } from 'react-native';
import CatalogItem from './CatalogItem';

export default function CatalogItemList({ items }) {
  return (
    <View className="flex flex-1 flex-col">
      {items.map((item, index) => (
        <CatalogItem 
          key={index} 
          model={item.model} 
          year={item.year} 
          brand={item.brand} 
          image={item.image} 
          price={item.price} 
        />
      ))}
    </View>
  );
}