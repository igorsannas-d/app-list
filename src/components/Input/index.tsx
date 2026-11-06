import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { styles } from './styles';

type Props = TextInputProps & {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function Input({ label, icon, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <MaterialIcons name={icon} size={26} color={themes.colors.textLight} />
      <TextInput
        style={styles.input}
        placeholderTextColor={themes.colors.textLight}
        {...rest}
      />
    </View>
  );
}