import { Text, View, Switch } from 'react-native';

export default function BoolInputWithLabel({ label, value, onChange, name }) {
  return (
    <View className="flex flex-row mt-2 items-center">
      <Switch 
        className="mr-2"
        value={value}
        onValueChange={(val) => onChange(name, val)}
        />
      <Text className="text-sm text-gray-600">{label}</Text>
    </View>
  )
}