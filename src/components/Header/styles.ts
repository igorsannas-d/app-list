import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: themes.spacing.lg,
  },
  title: {
    fontSize: themes.fontSize.xl,
    fontWeight: 'bold',
    color: themes.colors.text,
    marginLeft: themes.spacing.md,
  },
});