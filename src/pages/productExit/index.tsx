import React, { useState } from 'react';
import { View } from 'react-native';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import { styles } from './styles';

export default function ProductExit() {
  const [reason, setReason] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Saída de Produto" />

      <Input label="Produto" icon="local-offer" placeholder="Nome do Produto" />
      <Input
        label="Quantidade de Saída"
        icon="inventory-2"
        placeholder="0"
        keyboardType="numeric"
      />
      <Select
        label="Motivo da Retirada"
        icon="assignment"
        placeholder="Selecione o motivo"
        options={['Venda', 'Avarias', 'Uso Interno']}
        selectedValue={reason}
        onValueChange={setReason}
      />

      <Button title="Registrar Saída" />
    </View>
  );
}