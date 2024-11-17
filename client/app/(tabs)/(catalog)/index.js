import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import LinkButton from '../../../components/LinkButton';
import CatalogItem from '../../../components/CatalogItem';
import CatalogItemList from '../../../components/CatalogItemList';
import FiltersMenu from '../../../components/FiltersMenu';
import dbRequest from '../../../utils/DbRequest.js';

export default function CatalogScreen() {
  const [carItems, setCarItems] = useState(
    dbRequest.getAllCarsWithFilters()
  );

  function printFilters(filters) {
    for (const key in filters) {
      console.log(`${key}: ${filters[key]}`);
    }
  }

  return (
    <ScrollView>
    <View className="flex-1 max-w-5xl w-full self-center md:flex-row">
      {/* <LinkButton href="/car-details">Detalles de auto</LinkButton> */}
      <FiltersMenu onFiltersChange={printFilters} />
      <View className="flex flex-1 flex-col ml-4">
        {/* <CatalogItemList items={carItems} /> */}
      </View>
    </View>
    </ScrollView>
  );
}