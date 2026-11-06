import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
    paddingHorizontal: themes.spacing.lg,
    paddingTop: 70,
  },
});