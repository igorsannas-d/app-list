import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { styles } from './styles';

type Props = {
  name: string;
  quantity: number;
  status: 'Em Estoque' | 'Estoque Baixo';
};

export function StockItem({ name, quantity, status }: Props) {
  const isLow = status === 'Estoque Baixo';
  const statusColor = isLow ? themes.colors.warning : themes.colors.success;

  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <MaterialIcons name="inventory-2" size={26} color={themes.colors.primary} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.quantity}>Quantidade: {quantity}</Text>
      </View>

      <View style={[styles.badge, { backgroundColor: statusColor }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>
    </View>
  );
}