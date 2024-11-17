import { View } from 'react-native';
import TextInputWithLabel from './TextInputWithLabel';

export default function NumberInputWithLabel({ label, value, onChange, name, min, max, ...props }) {
  // limit the input with min and max values
  const handleChange = (text) => {
    let numericValue = parseFloat(text);
    if (!isNaN(numericValue)) {
      if (min !== undefined && numericValue < min) {
        numericValue = min;
      }
      if (max !== undefined && numericValue > max) {
        numericValue = max;
      }
    }
    onChange(name, numericValue);
  };

  return (
    <View>
      <TextInputWithLabel
        className="border border-gray-400 rounded-lg p-2 focus:outline-none focus:border-indigo-300"
        label={label}
        value={value !== undefined ? value.toString() : ''}
        onChangeText={(text) => onChange(name, text)}
        inputMode="numeric"
        {...props}
      />
    </View>
  );
}