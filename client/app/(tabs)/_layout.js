import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false
        }}>
      <Tabs.Screen 
        name="(catalog)" 
        options={{ tabBarLabel: 'Catalogo' }}
      />
      <Tabs.Screen 
        name="(sell)" 
        options={{ tabBarLabel: 'Vender' }} 
      />
      <Tabs.Screen 
        name="(user)" 
        options={{ tabBarLabel: 'Usuario' }} 
      />
    </Tabs>
  );
}
