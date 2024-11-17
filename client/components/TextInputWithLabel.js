import { View, Text, TextInput } from 'react-native';

export default function TextInputWithLabel({ label, value, onChange, placeholder, name }) {
  return (
    <View className="flex flex-col mt-4">
      <Text className="text-sm text-gray-600">{label}</Text>
      <TextInput className="border border-gray-400 rounded-lg p-2 
      focus:outline-none focus:border-indigo-300"
        value={value}
        onChangeText={(text) => onChange(name, text)}
        placeholder={placeholder}
      />
    </View>
  );
}