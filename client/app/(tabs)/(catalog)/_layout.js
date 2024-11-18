import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function CatalogLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: Platform.OS === 'web' ? false : true,
        initialRouteName:"reserve",
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="car-details/[id]" />
    </Stack>
  );
}
