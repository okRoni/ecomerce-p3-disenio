import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function UserLayout() {
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
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
