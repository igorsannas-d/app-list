import React from 'react';
import { View, FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { StockItem } from '../../components/StockItem';
import { styles } from './styles';

const products = [
  { id: '1', name: 'Notebook Dell', quantity: 25, status: 'Em Estoque' as const },
  { id: '2', name: 'Mouse sem fio', quantity: 3, status: 'Estoque Baixo' as const },
  { id: '3', name: 'Teclado mecânico', quantity: 40, status: 'Em Estoque' as const },
  { id: '4', name: 'Monitor 24"', quantity: 2, status: 'Estoque Baixo' as const },
  { id: '5', name: 'Cabo HDMI', quantity: 60, status: 'Em Estoque' as const },
  { id: '6', name: 'Headset', quantity: 4, status: 'Estoque Baixo' as const },
];

export default function StockControl() {
  return (
    <View style={styles.container}>
      <Header title="Controle de Estoque" />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <StockItem
            name={item.name}
            quantity={item.quantity}
            status={item.status}
          />
        )}
      />
    </View>
  );
}