import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { styles } from './styles';

type Props = { title: string };

export function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="inventory" size={52} color={themes.colors.primary} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}