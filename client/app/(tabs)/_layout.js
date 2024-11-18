import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icon library

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarPosition: Platform.OS === 'web' ? 'top' : 'bottom',
            tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
                elevation: 5,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
            },
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
                textTransform: 'uppercase',
            },
            tabBarActiveTintColor: '#224fe3',
            tabBarInactiveTintColor: '#3730a3',
        }}>
      <Tabs.Screen 
        name="(catalog)" 
        options={{ 
          tabBarLabel: 'Catalogo',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen 
        name="(sell)" 
        options={{ 
          tabBarLabel: 'Vender',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="(user)" 
        options={{ 
          tabBarLabel: 'Usuario',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} 
      />
    </Tabs>
  );
}
