# App List - Mini Sistema de Gestão de Estoque

Aplicativo mobile desenvolvido com React Native, Expo e TypeScript.

## Telas
- **Novo Produto:** cadastro de entrada de itens no estoque.
- **Saída de Produto:** registro de retirada de itens (motivo: Venda, Avarias ou Uso Interno).
- **Controle de Estoque:** visualização do inventário com status do item.

## Tecnologias
- React Native + Expo
- TypeScript
- React Navigation (Stack e Bottom Tab)
- @expo/vector-icons

## Estrutura (MVC)
- src/components: Header, Input, Select, Button, StockItem
- src/global: themes.ts
- src/pages: newProduct, productExit, stockControl
- src/routes: index, stack.routes, bottom.routes

## Como executar
```bash
npm install
npx expo start
```
Escaneie o QR Code com o app Expo Go.