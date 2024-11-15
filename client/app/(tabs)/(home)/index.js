import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <Link href="/details">View details</Link>
    </View>
  );
}