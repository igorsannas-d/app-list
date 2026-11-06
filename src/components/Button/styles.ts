import { StyleSheet } from 'react-native';
import { themes } from '../../global/themes';

export const styles = StyleSheet.create({
  button: {
    height: 54,
    backgroundColor: themes.colors.primary,
    borderRadius: themes.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  text: {
    color: '#FFFFFF',
    fontSize: themes.fontSize.md,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});