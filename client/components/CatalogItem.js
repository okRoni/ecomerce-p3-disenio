import { Image, Text, View } from "react-native";
import LinkButton from "./LinkButton.js";

export default function CatalogItem({ id, model, brand, year, price, image }) {
  image = image || require('../assets/car-placeholder.jpg');
  const formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CRC' }).format(price || 99999999.99);

  return (
    <View 
      className="flex flex-row items-center my-2 p-2 rounded-lg
        bg-white border-b-2 border-indigo-200">
      <View className="flex rounded-lg overflow-hidden w-32 h-28 justify-center items-center">
        <Image 
          source={image} 
          className="w-full h-full flex-1" 
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-col ml-4 flex-1">
        <Text className="text-lg font-bold text-indigo-900">{model}</Text>
        <View className="flex flex-row">
          <Text className="text-sm text-gray-600 italic font-semibold">{brand || "NombreMarca"} </Text>
          <Text className="text-sm text-gray-600 font-bold">{year || 2024}</Text>
        </View>
        <Text className="text-xl font-semibold text-black">{formattedPrice}</Text>
      </View>
      <View className="ml-auto">
        <LinkButton href={`/car-details/${id}`}>Ver más</LinkButton>
      </View>
    </View>
  )
}
