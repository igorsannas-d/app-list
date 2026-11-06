import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { styles } from './styles';

type Props = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  options: string[];
  placeholder: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
};

export function Select({
  label,
  icon,
  options,
  placeholder,
  selectedValue,
  onValueChange,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <MaterialIcons name={icon} size={26} color={themes.colors.textLight} />
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        dropdownIconColor={themes.colors.primary}
      >
        <Picker.Item label={placeholder} value="" color={themes.colors.textLight} />
        {options.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
}