import { View } from 'react-native';
import TextInputWithLabel from './TextInputWithLabel';

export default function NumberInputWithLabel({ label, value, onChange, name, ...props }) {
  return (
    <View>
      <TextInputWithLabel
        className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-indigo-300"
        label={label}
        value={value !== undefined ? value.toString() : ''}
        onChangeText={(text) => {
          if (/^\d*$/.test(text)) {
            onChange(name, text);
          }
        }}
        inputMode="numeric"
        {...props}
      />
    </View>
  );
}