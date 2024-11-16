import { Image, Text, View } from "react-native";

export default function CatalogItem({ car }) {
  car.image = car.image || require('../assets/car-placeholder.jpg');
  const formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CRC' }).format(car.precio || 99999999.99);

  return (
    <View 
      className="flex flex-row items-center my-2 p-2 rounded-lg
        bg-slate-300 hover:bg-slate-400">
      <View className="flex rounded-lg overflow-hidden w-32 h-28">
        <Image 
          source={car.image} 
          className="w-full h-full flex-1 object-cover" 
          resizeMode="cover"
        />
      </View>
      <View className="flex flex-col ml-4">
        <Text className="text-lg font-bold">{car.name}</Text>
        <Text className="text-sm text-gray-600">Año: {car.anno || 2024}</Text>
        <Text className="text-sm text-gray-600">Marca: {car.marca || "NombreMarca"} </Text>
        <Text className="text-sm text-gray-600">Precio: {formattedPrice}</Text>
      </View>
    </View>
  )
}
