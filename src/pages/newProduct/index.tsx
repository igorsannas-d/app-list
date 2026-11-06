import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { styles } from './styles';

export default function NewProduct() {
  return (
    <View style={styles.container}>
      <Header title="Novo Produto" />

      <Input label="Nome" icon="local-offer" placeholder="Nome do Produto" />
      <Input
        label="Preço"
        icon="attach-money"
        placeholder="R$ 0,00"
        keyboardType="numeric"
      />
      <Input
        label="Quantidade de Entrada"
        icon="inventory-2"
        placeholder="0"
        keyboardType="numeric"
      />

      <Button title="Cadastrar Produto" />
    </View>
  );
}