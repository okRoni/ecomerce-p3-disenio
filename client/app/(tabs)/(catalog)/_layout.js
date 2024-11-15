import { Stack } from 'expo-router';

export default function CatalogLayout() {
  return (
    <Stack
      screenOptions={{
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
      <Stack.Screen name="car-details" />
    </Stack>
  );
}
