import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react';

export default function ComboBoxWithLabel({ label, value, onChange, items, name }) {
  const [isFocus, setIsFocus] = useState(false);
  const [stateValue, setValue] = useState(value);
  name = name || 'dropdown';

  return (
    <View className="flex flex-col mt-2">
      <Text className="text-sm text-gray-600">{label}</Text>
      <Dropdown
        data={items}
        labelField={'label'}
        valueField={'value'}
        value={stateValue}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          onChange(name, item.value);
          setIsFocus(false);
        }}
        style={{borderWidth: 1, borderColor: isFocus ? '#a5b4fc' : '#9ca3af',
          borderRadius: 8, padding: 8}}
      />
    </View>
  );
}