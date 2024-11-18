import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function SellLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: Platform.OS === 'web' ? false : true,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sell-form" />
    </Stack>
  );
}
